# agent-performance-profiler-api

> Package 2: api for Performance Profiler and Optimizer

## Installation

```bash
npm install @agent-performance-profiler/agent-performance-profiler-api
```

## Usage

```javascript
import { AgentPerformanceProfilerApi } from '@agent-performance-profiler/agent-performance-profiler-api';

const service = new AgentPerformanceProfilerApi();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
