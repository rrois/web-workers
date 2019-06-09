# web-workers

Worker types
- Dedicated Workers
- Shared Workers: 
- Service Workers
- Chrome Workers
- Audio Workers


## Dedicated Workers
Single execution context

Lifecycle: create -> destroy
close()
worker.terminate()

## Shared Workers
Multiple execution Contexts
Communicate via 'ports' property
- Firefox 29+
- Chrome 4+
- Opera 11.5+

Lifecycle: create -> connect -> startup -> destroy
close()
worker.port.close()

chrome://inspect/#workers


##Info:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers