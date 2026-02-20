# agent-performance-profiler-analyzer

> Service: analyzer for Performance Profiler and Optimizer

## Installation

```bash
npm install @agent-performance-profiler/agent-performance-profiler-analyzer
```

## Usage

```javascript
import { AgentPerformanceProfilerAnalyzer } from '@agent-performance-profiler/agent-performance-profiler-analyzer';

const service = new AgentPerformanceProfilerAnalyzer();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
