function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    console.log(arr)
  }

  bubbleSort([9,8,7,6,5,4,3,2,1])