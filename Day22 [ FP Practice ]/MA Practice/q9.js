// 1. write a function getArea which will accept either one or two arguments and return the area of geometrical figure.

//   if function is called with one arguments then consider it as side of square 
//   and 
//     if it is called with two arguments then consider it as length and breadth of rectangle


const getArea = (a, b) => {
    return a && b ?  a * b : a*a ;  
}

// sample eg.
  console.log(getArea(4)) //_+ output : 16
  console.log(getArea(4,8)) // output : 32
  console.log(getArea(8)) // output : 64