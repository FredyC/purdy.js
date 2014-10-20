# Purdy

Print things real purdy for nodejs.

## Usage

```javascript
    var Purdy = require('purdy');
    Purdy({list: [1,2,3], string: 'some string'});
```

### `Purdy(object, [options])`

Prints anything indented, and with arrays with index keys, and different
types in colors such that it's very easy to get an overview of what object
you're dealing with.

* `object` - anything, number, object, array, etc.
* `options` - optional object with the following keys.
    * `plain` - when `true`, prints result without colors. Defaults to `false` with tty, `true` when not.
    * `path` - when `true`, prints result with a path (To be used with [Hoek.reach()](https://github.com/spumko/hoek#reachobj-chain-options))
    * `pathPrefix` - prefix for path. default: `// `
    * `arrayIndex` - enables index printing for arrays. default: `true`


### `Purdy.stringify(object, [options])`

This function returns a string without printing it to stdout. This may prove
to be useful for log files other other applications.

``` javascript
var purdyString = Purdy.stringify({a: 'b'}, {plain: true});
writeLog(purdyString);
```

### Examples

````javascript
// var circularObj = { };
// circularObj.a = circularObj;
// var circ = [];
// circ.push(circ);
// Purdy({
//     a: 3,
//     bn: 'foo',
//     raino: it,
//     d: {king: 'cobra'},
//     null: null,
//     undefined: undefined,
//     regexp: new RegExp,
//     falseBool: false,
//     trueBool: true,
//     emptyArr: [],
//     circular: circularObj,
//     circularArr: circ
// });

{
              a: 3,
             bn: 'foo',
          raino: [Function: ?],
              d: {
        king: 'cobra'
    },
           null: null,
      undefined: undefined,
         regexp: /(?:)/,
      falseBool: false,
       trueBool: true,
       emptyArr: [],
       circular: {
        a: [Circular]
    },
    circularArr: [
        [0] [Circular]
    ]
}
```

```javascript
// Purdy([1,2,'foo', it, Array.isArray, new Date,1,1,1,1,12,[1,2]]);

[
    [ 0] 1,
    [ 1] 2,
    [ 2] 'foo',
    [ 3] [Function: ?],
    [ 4] [Function: isArray],
    [ 5] Tue May 06 2014 20:49:29 GMT-0700 (PDT),
    [ 6] 1,
    [ 7] 1,
    [ 8] 1,
    [ 9] 1,
    [10] 12,
    [11] [
        [0] 1,
        [1] 2
    ]
]
```

``` javascript
// var obj = {
//     travel: {
//         down: {
//             a: [{
//                 path: 'to get here'
//             }]
//         }
//     }
// Purdy(obj, { path: true });

{
    travel: {
        // travel.down
        down: {
            // travel.down.a
              a: [
                // travel.down.a.0
                [0] {
                    // travel.down.a.0.path
                    path: 'to get here'
                }
            ]
        }
    }
}

// var Hoek = require('hoek');
// Purdy(Hoek.reach(obj, 'travel.down.a.0.path'));

{
        path: 'to get here'
}

```



## Acknowledgements
* Michael Dvorkin for [Awesome Print]

[Awesome Print]: https://github.com/michaeldv/awesome_print
