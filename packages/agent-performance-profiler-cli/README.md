# agent-performance-profiler-cli

> Package 4: cli for Performance Profiler and Optimizer

## Installation

```bash
npm install @agent-performance-profiler/agent-performance-profiler-cli
```

## Usage

```javascript
import { AgentPerformanceProfilerCli } from '@agent-performance-profiler/agent-performance-profiler-cli';

const service = new AgentPerformanceProfilerCli();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
