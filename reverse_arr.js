function reverseArr(arr) {
    let reverse= []
    for (let i = arr.length-1; i >=0; i--) {
        reverse.push(arr[i])
    }
    console.log(reverse);
}
reverseArr([1,2,3])

