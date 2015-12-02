# swproxy 
[![NPM version][npm-image]][npm-url] [![wercker status](https://app.wercker.com/status/896afe61c5ac7b35e2bdb49061006957/m/master "wercker status")](https://app.wercker.com/project/bykey/896afe61c5ac7b35e2bdb49061006957)
[![Dependency Status][daviddm-image]][daviddm-url]

## work in progress

Base package to write a custom mod for the swproxy library.

### 1.) install this package as a dev dependency
‘‘‘
npm install --save-dev swproxy-mod
‘‘‘

### Mod 
'''
class ModRewrite {
   static factoryMethodName() {
      return 'rewriteRule';
   }
   
   static factoryMethod(swproxy) {
      return (...args) {
         let rule = new RewriteRule(arg...);
         swproxy.addFetchRule(rule);
      }
   }
}

// [...]

swproxy.registerMod(ModRewrite);

swproxy.rewriteRule('param1', 'param2', 'param3');
'''

### Rule

'''
class RewriteRule {
   match: (event) => true,
   execute: (originalEvent, event) {
    return new Promise((resolve, reject) => {
       // execute the rule in this promise
    });
   }
}
'''

## License

MIT © [Alexander Bartels](http://www.alexanderbartels.com)

[npm-image]: https://badge.fury.io/js/swproxy-mod.svg
[npm-url]: https://npmjs.org/package/swproxy-mod
[daviddm-image]: https://david-dm.org/alexanderbartels/swproxy-mod.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/alexanderbartels/swproxy-mod

