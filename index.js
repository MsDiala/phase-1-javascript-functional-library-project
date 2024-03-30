// Function to iterate over a collection and apply a callback to each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // Function to create a new array by applying a callback to each element of a collection
  function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, element => newArray.push(callback(element)));
    return newArray;
  }
  
  // Function to reduce a collection to a single value using a callback and an optional accumulator
  function myReduce(collection, callback, acc) {
    let startIndex = 0;
    const coll = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
      acc = coll[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < coll.length; i++) {
      acc = callback(acc, coll[i]);
    }
    return acc;
  }
  
  // Function to find the first element in a collection that satisfies a predicate
  function myFind(collection, predicate) {
    for (const element of collection) {
      if (predicate(element)) {
        return element;
      }
    }
  }
  
  // Function to filter elements of a collection based on a predicate
  function myFilter(collection, predicate) {
    const filteredArray = [];
    myEach(collection, element => {
      if (predicate(element)) {
        filteredArray.push(element);
      }
    });
    return filteredArray;
  }
  
  // Function to get the size of a collection
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  
  // Function to get the first n elements of an array or the first element if n is not provided
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // Function to get the last n elements of an array or the last element if n is not provided
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
// Implement the myKeys and myValues functions
function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys, 
  };
