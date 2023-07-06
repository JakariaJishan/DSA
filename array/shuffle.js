function shuffle(arr, n) {
    let newArr = []
    for (let i  = 0; i  < n; i++) {
       newArr.push(arr[i])
       newArr.push(arr[i+n])
    }
    return newArr
}

console.log(shuffle([2,5,1,3,4,7], 3));
// [2,3,5,4,1,7] 