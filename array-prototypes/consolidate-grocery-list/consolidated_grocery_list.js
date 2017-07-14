const shitWindsList = [
  { name: 'ricky',
    shitList: [ 'chicken chips', 'piss jugs', 'liquor', 'grade 6', 'hashcoins' ] },
  { name: 'bubbles',
    shitList: ['swazy train', 'kitties', 'cheese', 'liquor', 'grade 6'] },
  { name: 'julian',
    shitList: ['swazy train', 'dirty burger', 'whiskey', 'liquor', 'grade 6'] },
  { name: 'fuckin phil collins',
    shitList: ['swazy train', 'dirty burger', 'piss jugs', 'baaaam!'] },
  { name: 'ray',
    shitList: ['pepperoni', 'liquor', 'piss jugs', 'way she goes'] }
]

const consolidatedWindsOfShitList = (list) => {
  let numberedList = list.reduce( (newList, curVal) => {
    console.log(curVal.shitList)
    curVal.shitList.forEach( (groceryItem) => {
      !newList[groceryItem] ? newList[groceryItem]=1 : newList[groceryItem]++
    });
    return newList;
  }, []);
  return numberedList;
}

consolidatedWindsOfShitList(shitWindsList)
