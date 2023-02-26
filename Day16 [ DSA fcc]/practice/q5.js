function print(arr){
    const newArray = [...arr];
    arr[4] = 10;
    console.log(newArray, arr);
}

print([1,2,3,4])
// [ 1, 2, 3, 4 ] [ 1, 2, 3, 4, 10 ]