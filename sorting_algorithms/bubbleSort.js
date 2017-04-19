thisArr = [12,5,3,75,34,25,77,45,35,4,32,44];

function swap(arr,j) {
  let tempHold = arr[j];
  arr[j] = arr[j+1];
  arr[j+1] = tempHold;
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j);
      };
    };
  };
  return arr;
};

bubbleSort(thisArr);
