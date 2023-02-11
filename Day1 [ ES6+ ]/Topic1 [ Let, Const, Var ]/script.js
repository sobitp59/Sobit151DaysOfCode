// # SUB TOPIC 1 : BLOCK SCOPE AND FUNCTION SCOPE

// Example 1: 
    if(true){
        let a = 2;
        // var a = 2 
    }

    console.log(a) // ReferenceError: a is not defined


// Example 2: 
    function scopesInJS(){
        if(true){
            var a = 'Var';
            let b = 'Let';
            const c = 'Const';

            console.log(' Inside If Block ' + a, b, c)
        }
        console.log(' Inside Function Block ' + a, b, c) // ReferenceError: b is not defined
    }

    scopesInJS()


// Example 3:
    let a = 43;
    {
        let a = 99;
    }
    console.log(a) // 43


// Example 4:
    let a = 100;

    function Test(){
        console.log(a)
    }
    Test()

    function App(){
        console.log("1 : ", a) // ReferenceError: Cannot access 'a' before initialization
        let a = 200;
        // var a = 200;
        
        console.log("2 : ", a)
        {
            let a = 300;
        }
        console.log("3 : ", a)
    }
    App()


// Example 5:
    let a = 99;
    function App(){
        a = 100;
        console.log(a)
    }
    App(); // 100




// # SUB TOPIC 2 : TEMPORAL DEAD ZONE

// Example 1:
    function App(){
        console.log(a);
        let a = 100;
    }

    App() // ReferenceError: Cannot access 'a' before initialization



// # SUB TOPIC 3 : HOISTING

// Example 1:
    function App(){
        console.log(a);
        let a = 99;
        // var a = 99;
    }
    App()


// Example 2:
    var food = 'cooking';
    console.log(food);

    // function
    function funcOne(){
        var food;
        console.log(food);
    }
    funcOne();

    // if
    if(true){
        let food;
        console.log(food);
    }

    // for-loop
    for(var i = 1; i <= 3; i++){
        var food;
        console.log(food);
    }



// # SUB TOPIC 4 : CONST VS VAR

// Example 1:
    const name = 'Sobit'
    name = 'Mohit'
    console.log(name) // TypeError: Assignment to constant variable.



// # SUB TOPIC 5: CONST WITH OBJECTS

// Example 1:
    const obj = {a : 20, b : 30}
    console.log(obj)
    obj.a = 100
    console.log(obj)

// Example 2:
    const obj1 = {a: 20, b: 30}
    const obj2 = {a: 100, b: 300}
    console.log(obj1) 
    console.log(obj2) 
    obj1 = obj2
    console.log(obj1) // TypeError: Assignment to constant variable.


// # SUB TOPIC 6: CONST WITH ARRAYS
    let array = [1,2,3,4,5]
    array.push(6)
    console.log(array) // [ 1, 2, 3, 4, 5, 6 ]

    array = array.push(100)
    console.log('arr ' + array) // arr 7
    // ⚡ NEW : arr.push().push() returns length of the array 

    const arr = [1,2,3,4,5]
    arr.push(6)
    console.log(arr)
    
    arr = arr.push(6)
    console.log(arr) //TypeError: Assignment to constant variable.

