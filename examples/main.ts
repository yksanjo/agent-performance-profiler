/**
 * Example: Agent Performance Profiler
 */

import { AgentPerformanceProfiler } from '../src';

const profiler = new AgentPerformanceProfiler({ workflowId: 'test-workflow' });

profiler.recordStart('agent-1', 'Research Agent');
profiler.recordEnd('agent-1', 1500);
profiler.recordContext('agent-1', 8000, 10000);

profiler.recordStart('agent-2', 'Code Generator');
profiler.recordEnd('agent-2', 5000);
profiler.recordError('agent-2');

console.log(profiler.getSummary());
