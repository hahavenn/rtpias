/* сортировка массива объектов по буквам */
function alphabetSort_helper(arrToSort, comparisonField, returnGrouped = false) {
  /* 
    arrToSort - массив объектов, который надо отсортировать
    comparisonField - поле в объекте, по которому идёт сравнение
    returnGrouped - нужна ли группировка по буквам
      если false -> возвращается отсортированный массив с заданным видом
      если true -> возвращается объект в виде:
        {
          "a": [{...}, {...}],
          "б": [{...}]
        }
  */

  // создаем копию входного массива (чтобы не менять изначальный)
  const arrToReturn = arrToSort;

  // если на вход пустой массив
  if (arrToReturn.length === 0) return [];

  // сортируем по буквам
  sortArrayOfObjectsByLetters(arrToReturn, comparisonField);

  // если нужно сгруппировать
  if (returnGrouped) return sortObjects(arrToReturn, comparisonField);

  return arrToReturn;
}

// сортировка по буквам
function sortArrayOfObjectsByLetters(arrToSort, comparisonField) {
  arrToSort.sort((a, b) => {
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
}

// группировка по буквам
function sortObjects(arrToSort, comparisonField) {
  // устанавливаем массив для возврата
  let objToReturn = {};

  for (const instance of arrToSort) {
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

export default alphabetSort_helper;
