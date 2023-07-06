 function two_sum(arr, tar){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]+ arr[j] == tar) {
                
                console.log([i,j]);
            }
        }
    }
}
two_sum([2,7,11,15], 18)
