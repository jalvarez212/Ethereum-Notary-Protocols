importScripts('https://binaries.soliditylang.org/bin/soljson-v0.8.19+commit.7dd6d404.js')
let wrapper = require('solc/wrapper');

self.addEventListener('message', (e) => {
    const compiler = wrapper(self.Module)
    self.postMessage(
         JSON.parse(compiler.compile(JSON.stringify(e.data)))
    )
}, false)