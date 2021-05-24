function higherIndex(list) {
    let lowerValue = list[0];
    for (let indice in list) {
      if (list[lowerValue] > list[indice]) {
        lowerValue = indice;
      }
    }
    return lowerValue;
  }
  
  console.log(higherIndex([2, 4, 6, 7, 10, 0, -3]));