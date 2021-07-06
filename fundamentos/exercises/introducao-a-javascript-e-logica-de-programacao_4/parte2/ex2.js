function higherIndex(list) {
    let higherValue = list[0];
    for (let indice in list) {
      if (list[higherValue] < list[indice]) {
        higherValue = indice;
      }
    }
    return list[higherValue];
  }
  
  console.log(higherIndex([2, 3, 6, 7, 10, 1]));