// https://medium.com/javascript-in-plain-english/i-use-these-4-questions-to-find-outstanding-javascript-developers-4a468ea17155

// 2
//Implementation of Array map function
Array.prototype._map = function(callbackfn, thisArg) {
    let archiveArray = Array.prototype.slice.call(this)
    let result = new Array(this.length)

    for (let index = 0; index < archiveArray.length; index++) {
        if (!archiveArray.hasOwnProperty(i)) continue // goes to next iteration
        let newElement = callbackfn(archiveArray[index], index, this)
        result[index] = newElement;
    }

    return result
}

Array.prototype._filter = function(callbackfn, thisArg) {
    let archiveArray = Array.prototype.slice.call(this)
    let result = []

    for (let index = 0; index < archiveArray.length; index++) {
        if (!archiveArray.hasOwnProperty(i)) continue // goes to next iteration
        if (callbackfn(archiveArray[index], index, this)) {
            result.push(archiveArray[i])
        }
    }

    return result
}

//2
// option # 1

let obj = {
    _initValue: 0,
    get a() {
      this._initValue++;
      return this._initValue
    }
  }
  console.log(obj.a, obj.a, obj.a)

  // option # 2, using Object.defineProperty

let obj = {}
Object.defineProperty(obj, 'a', {
  get: (function(){
    let initValue = 0;
    return function(){
      initValue++;
      return initValue
    }
  })()
})
console.log(obj.a, obj.a, obj.a)

// option # 3, with proxies

let initValue = 0;
let obj = new Proxy({}, {
  get: function(item, property, itemProxy){
    if(property === 'a'){
      initValue++;
      return initValue
    }
    return item[property]
  }
})
console.log(obj.a, obj.a, obj.a)


// Question 3

function foo(a,b) {
    console.log(b)
    return {
      foo:function(c){
        return foo(c,a);
      }
    };
  }
  let res = foo(0); 
  res.foo(1); 
  res.foo(2); 
  res.foo(3);


  function foo(a,b) {
    console.log(b)
    return {
      bar:function(c){
        return foo(c,a);
      }
    };
  }
  foo(0).bar(1).bar(2).bar(3);

  // Question 4 - Compose

  let middleware = []
middleware.push((next) => {
 console.log(1)
 next()
 console.log(1.1)
})
middleware.push((next) => {
 console.log(2)
 next()
 console.log(2.1)
})
middleware.push(() => {
    console.log(3)
})
let fn = compose(middleware)
fn()