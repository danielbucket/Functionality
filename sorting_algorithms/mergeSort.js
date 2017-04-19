let randomArray = [5,1,3,7,8,9,6,4,2,0,10];

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  };
  let right = arr.slice(0, arr.length/2);
  let left  = arr.slice(arr.length/2, arr.length);

  return theMergePart( mergeSort(left), mergeSort(right) );
}

const theMergePart = (arr1, arr2) => {
  var sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    };
  };

  while (arr1.length) {
    sorted.push(arr1.shift());
  };

  while (arr2.length) {
    sorted.push(arr2.shift());
  };
  return sorted;
};
