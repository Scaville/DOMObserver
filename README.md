### DOM Observer

> Project DOM Observer<br/>
> Developer: Fabricio Paulo<br/>
> Maintainer: Scaville
> Version: 1.0 (stable)

This is a simply plugin to extend the jquery change function to include DOM Sub Three changes on object change listener.

#### Usage
To use this plugin you must put the DOMObserverPlugin.js into your HTML Head tag.
Their usage is very simply like on this example (On this way, any change in the object triggers an event):

```
$('#someObject').mutate(function(){
    alert('This has changed!');
});
```

This way only as DOM changes executed:

```
$('#someObject').observe(function(){
    alert('This has changed!');
});
```

---
**DOM Observer**<br/>
_Development by: Fabricio Paulo_<br/>
**© 2017 - <a href='http://www.scaville.com'>Scaville</a>**