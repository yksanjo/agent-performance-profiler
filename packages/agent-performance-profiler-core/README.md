# agent-performance-profiler-core

> Package 1: core for Performance Profiler and Optimizer

## Installation

```bash
npm install @agent-performance-profiler/agent-performance-profiler-core
```

## Usage

```javascript
import { AgentPerformanceProfilerCore } from '@agent-performance-profiler/agent-performance-profiler-core';

const service = new AgentPerformanceProfilerCore();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
