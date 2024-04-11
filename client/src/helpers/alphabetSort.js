/* сортировка массива объектов по буквам */
function alphabetSort_helper(arrToSort, comparisonField, returnGrouped = false) {
  /* 
    arrToSort - массив, который надо отсортировать
    comparisonField - поле, по которому идёт сравнение
    returnGrouped - нужна ли группировка по буквам
      если false -> возвращается отсортированный массив с заданным видом
      если true -> возвращается объект в виде:
        {
          "a": [{...}, {...}],
          "б": [{...}]
        }
  */

  // создаем копию входного массива (чтобы не менять изначальный)
  const arrSort = arrToSort;

  // сортируем по буквам
  arrSort.sort((a, b) => {
    switch (true) {
      case a[comparisonField] < b[comparisonField]: {
        return -1;
      }
      case a[comparisonField] > b[comparisonField]: {
        return 1;
      }
      default: {
        return 0;
      }
    }
  });

  // если нужно сгруппировать
  if (returnGrouped) {
    // устанавливаем массив для возврата
    let objToReturn = {};

    for (const instance of arrSort) {
      // имя группы
      const groupName = instance[comparisonField][0].toLowerCase();
      // есть ли уже такая группа
      if (objToReturn?.[groupName]) {
        objToReturn[groupName].push(instance);
        continue;
      }

      // группы нет
      objToReturn[groupName] = [instance];
    }

    return objToReturn;
  }

  return arrSort;
}

export default alphabetSort_helper;
