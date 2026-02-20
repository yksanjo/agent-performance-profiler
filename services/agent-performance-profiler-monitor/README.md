# agent-performance-profiler-monitor

> Service: monitor for Performance Profiler and Optimizer

## Installation

```bash
npm install @agent-performance-profiler/agent-performance-profiler-monitor
```

## Usage

```javascript
import { AgentPerformanceProfilerMonitor } from '@agent-performance-profiler/agent-performance-profiler-monitor';

const service = new AgentPerformanceProfilerMonitor();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
