
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