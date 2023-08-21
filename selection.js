function selectionSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort([5, 2, 4, 6, 1, 3]));
