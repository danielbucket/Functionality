var objectified = {
  person1: {name: 'taylor', age: 11},
  person2: {name: 'jhun', age: 12},
  person3: {name: 'alter-nate', age: 16},
  person4: {name: 'meeka', age: 16},
  person5: {name: 'harold', age: 19}
};

const ageism = (obj) => {
  let sortedObject = Object.keys(obj).reduce( (ageism, curVal) => {
    obj[curVal].age < 15 ? ageism.youngerThan15.push(obj[curVal]) : ageism.olderThan15.push(obj[curVal]);
    return ageism;
  }, { youngerThan15:[], olderThan15:[] });
  return sortedObject;
};

ageism(objectified);
