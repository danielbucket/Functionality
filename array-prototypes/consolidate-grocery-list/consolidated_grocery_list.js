var itemsList = [
  { name: 'khan',
    groceryList: [ 'avocados', 'chicken', 'tortillas', 'rice' ] },
  { name: 'conan',
    groceryList: ['chips', 'kale', 'cheese', 'tortillas', 'rice'] },
  { name: 'carol',
    groceryList: ['chips', 'eggs', 'tomatoes', 'tortillas', 'rice'] },
  { name: 'barbarella',
    groceryList: ['chips', 'fish_dicks', 'chicken', 'marijuana'] }
];

const consolidated = (list) => {
  let numberedList = list.reduce( (newList, curVal) => {
    curVal.groceryList.forEach( (groceryItem) => {
      !newList[groceryItem] ? newList[groceryItem]=1 : newList[groceryItem]++
    });

    return newList;
  }, []);
  return numberedList;
};

consolidated(itemsList);
