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