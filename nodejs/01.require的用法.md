
require 用来加载一个文件的代码

简单概括为以下几点:

<br/>

* require 可加载 .js、.json 和 .node 后缀的文件
* require 的过程是同步的

```javascript
setTimeout(() => {
    module.exports = { a: 'hello' }
}, 0)
```
