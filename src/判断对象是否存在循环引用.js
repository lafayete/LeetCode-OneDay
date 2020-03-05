// 这是有赞的一道笔试题，蛮有意思的，所以记录了下来

//var obj = { foo: { bar: { baz: { qux: {} } } } };
//obj.foo.bar.baz.qux = obj.foo;
//如果满足上述条件可以认为这是一个对象的循环引用

function isCyclic(obj) {
    var hasCircle = false;
    var cache=[];
    const fn = function(obj) {
        var keys = Object.keys(obj);
        for(let i=0;i<keys.length;i++) {
            var key = keys[i];
            var value = obj[key];
            if(typeof value === "object" && typeof value !== null) {
                var index = cache.indexOf(value);

                if(index !== -1) {
                    hasCircle = true;
                    break;
                } else {
                    cache.push(value);
                    fn(value);
                }
            }
        }

    }
    fn(obj);
    return hasCircle;
}


//测试用例
var obj = { foo: { bar: { baz: { qux: {} } } } };
obj.foo.bar.baz.qux = obj.foo;
console.log(isCyclic(obj)); // true

var o = {}; o.o = o;
console.log(isCyclic(o)); // true
