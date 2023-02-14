const data = {
    firstName: 'Kakashi',
    lastName: 'Hatake',
    printName : function(){
        console.log(this) // points to `data object`
        console.log(data.firstName, data.lastName) // Kakashi Hatake
    }
}
data.printName()


const data2 = {
    firstName: 'Kakashi',
    lastName: 'Hatake',
    printName : function(){
        function printFull(){
            console.log(this) // points to `global object`
            console.log(data.firstName, data.lastName) // undefined undefined
        }
        printFull()
    }
}
data2.printName()


const data3 = {
    firstName : 'Itachi',
    lastName : 'Uchiha',
    printName : ()=>{
        console.log(this.firstName, this.lastName) // undefined undefined
    }
}
data3.printName()

const data4 = {
    firstName : 'Itachi',
    lastName : 'Uchiha',
    printName : function(){
        const printFull = () => {
            console.log(this.firstName, this.lastName) // Itachi Uchiha
        }
        printFull()
    }
}

data4.printName()