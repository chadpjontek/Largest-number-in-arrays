function largestOfArrays(arr) {
  //create new array to hold highest numbers
  var newArr = [];
//loop through each array within the array and push the highest value of each into newArr
  for (var i = 0; i < arr.length; i++){
    var largestNum = 0;
    for (var j = 0; j < arr[i].length; j++) {  
      if (largestNum < arr[i][j]) {
        largestNum = arr[i][j];
      }
    }
    newArr.push(largestNum);
  }
  return newArr;
}
//example of use
largestOfArrays([[4, 5, 1, 3, 0], [13, 27, 18, 111, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);