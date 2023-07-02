function binarySearch(arr, n, k) {
    let left = 0;
    let right = n - 1;
    let mid;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      
      if (k === arr[mid]) {
        return mid;
      }
      
      if (k > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return -1;
  }
  
  // Example usage
  const arr = [2, 4, 6, 8, 10];
  const n = arr.length;
  const k = 8;
  console.log(binarySearch(arr, n, k));
  