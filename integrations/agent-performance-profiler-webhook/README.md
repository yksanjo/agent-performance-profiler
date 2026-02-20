# agent-performance-profiler-webhook

> Integration: webhook for Performance Profiler and Optimizer

## Installation

```bash
npm install @agent-performance-profiler/agent-performance-profiler-webhook
```

## Usage

```javascript
import { AgentPerformanceProfilerWebhook } from '@agent-performance-profiler/agent-performance-profiler-webhook';

const service = new AgentPerformanceProfilerWebhook();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
