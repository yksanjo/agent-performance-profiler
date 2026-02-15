/**
 * Agent Performance Profiler
 * APM-style tool for monitoring agent performance
 */

export interface AgentMetrics {
  agentId: string;
  agentName: string;
  tokensUsed: number;
  executionTimeMs: number;
  contextUtilization: number;
  calls: number;
  errors: number;
}

export interface PerformanceProfile {
  workflowId: string;
  totalTokens: number;
  totalTimeMs: number;
  agents: AgentMetrics[];
  bottlenecks: string[];
  contextWindowUtilization: number;
  timestamp: Date;
}

export interface ProfilerOptions {
  workflowId: string;
}

export class AgentPerformanceProfiler {
  private workflowId: string;
  private agents: Map<string, AgentMetrics> = new Map();
  private startTime: number = Date.now();
  private bottlenecks: string[] = [];

  constructor(options: ProfilerOptions) {
    this.workflowId = options.workflowId;
  }

  trackAgent(agentId: string, agentName: string): void {
    if (!this.agents.has(agentId)) {
      this.agents.set(agentId, { agentId, agentName, tokensUsed: 0, executionTimeMs: 0, contextUtilization: 0, calls: 0, errors: 0 });
    }
  }

  recordStart(agentId: string, agentName: string): void {
    this.trackAgent(agentId, agentName);
  }

  recordEnd(agentId: string, tokensUsed: number): void {
    const agent = this.agents.get(agentId);
    if (!agent) return;
    agent.tokensUsed += tokensUsed;
    agent.calls += 1;
  }

  recordError(agentId: string): void {
    const agent = this.agents.get(agentId);
    if (agent) agent.errors += 1;
  }

  recordContext(agentId: string, contextSize: number, contextLimit: number): void {
    const agent = this.agents.get(agentId);
    if (agent) agent.contextUtilization = contextSize / contextLimit;
  }

  getTopConsumers(limit: number = 5): AgentMetrics[] {
    return Array.from(this.agents.values()).sort((a, b) => b.tokensUsed - a.tokensUsed).slice(0, limit);
  }

  getTopSlowest(limit: number = 5): AgentMetrics[] {
    return Array.from(this.agents.values()).sort((a, b) => b.executionTimeMs - a.executionTimeMs).slice(0, limit);
  }

  getTotalTokens(): number {
    return Array.from(this.agents.values()).reduce((sum, a) => sum + a.tokensUsed, 0);
  }

  getTotalTime(): number {
    return Date.now() - this.startTime;
  }

  getContextUtilization(): number {
    const agents = Array.from(this.agents.values()).filter(a => a.contextUtilization > 0);
    if (agents.length === 0) return 0;
    return agents.reduce((sum, a) => sum + a.contextUtilization, 0) / agents.length;
  }

  getProfile(): PerformanceProfile {
    return {
      workflowId: this.workflowId,
      totalTokens: this.getTotalTokens(),
      totalTimeMs: this.getTotalTime(),
      agents: Array.from(this.agents.values()),
      bottlenecks: this.bottlenecks,
      contextWindowUtilization: this.getContextUtilization(),
      timestamp: new Date()
    };
  }

  getSummary(): string {
    const profile = this.getProfile();
    const top = this.getTopConsumers(3);
    let report = `📊 ${this.workflowId}\n`;
    report += `Tokens: ${profile.totalTokens} | Time: ${profile.totalTimeMs}ms\n`;
    report += `Context: ${(profile.contextWindowUtilization * 100).toFixed(1)}%\n`;
    report += `Top Consumers:\n`;
    top.forEach((a, i) => report += `  ${i + 1}. ${a.agentName}: ${a.tokensUsed} tokens\n`);
    return report;
  }

  reset(): void {
    this.agents.clear();
    this.startTime = Date.now();
    this.bottlenecks = [];
  }
}

export default AgentPerformanceProfiler;
