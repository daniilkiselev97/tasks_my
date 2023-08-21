function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (swapped !== true) break;
    }
    return arr
}

console.log(bubbleSort([2,1,3,4,5]));