var objectified = {
  person1: {name: 'taylor', age: 11},
  person2: {name: 'j-rod', age: 12},
  person3: {name: 'nate', age: 16},
  person4: {name: 'meeka', age: 16},
  person5: {name: 'harold', age: 19},
  person5: {name: 'girard', age: 19}
};

const ageSort = (obj) => {
  let sortedObject = Object.keys(obj).reduce( (ageism, curVal) => {
    if (obj[curVal].age < 15) {
      ageism.youngerThan15.push(obj[curVal]);
    };
    ageism.olderThan15.push(obj[curVal]);
    return ageism;
  }, { youngerThan15:[], olderThan15:[] } )
  return sortedObject;
};

ageSort(objectified);
