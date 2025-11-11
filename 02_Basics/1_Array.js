const arr = [1,2,3,4,5];

// splice and slice:


// map function on array: array.map( function )
const arr1 = arr.map(function(i){
    return i*2;
});

console.log("map function : ", arr1);


// filter function on array: arr.filter( function )
const arr2 = arr.filter(function(x){
    if(x%2==0) return true;
    else return false;
});

console.log(arr2);


// reduce function on array: