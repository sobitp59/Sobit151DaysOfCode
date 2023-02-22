// Prevent Object Mutation
function freezeObj(){
    const MATH_CONSTANSTS = {
        PI : 3.14
    }

    Object.freeze(MATH_CONSTANSTS);

    try {
        MATH_CONSTANSTS.PI = 5.44; 
    } catch (error) {
        return error
    }

    return MATH_CONSTANSTS
}

console.log(freezeObj()) // 3.14u