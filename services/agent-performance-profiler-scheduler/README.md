# agent-performance-profiler-scheduler

> Service: scheduler for Performance Profiler and Optimizer

## Installation

```bash
npm install @agent-performance-profiler/agent-performance-profiler-scheduler
```

## Usage

```javascript
import { AgentPerformanceProfilerScheduler } from '@agent-performance-profiler/agent-performance-profiler-scheduler';

const service = new AgentPerformanceProfilerScheduler();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
