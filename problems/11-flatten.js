/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
// base case idea 1: check if array
// 2 check if og array is empty

function flatten(arr) {
    let newArr = [];

    // check if element is array
     for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        //if so use spread operator to access inside value
        newArr.push(...flatten(arr[i]));
      } else {
        newArr.push(arr[i]);
      }
    }

    console.log("newArr: ",newArr)
    return newArr;
}

//flatten([]); // []
//flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]




/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
