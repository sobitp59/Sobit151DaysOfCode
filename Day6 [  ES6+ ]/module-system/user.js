const User = (name, age) => {
    return {name, age}
}

const addition = (a, b) => {
    return a + b
}

const substraction = (a, b) => {
    return a - b
}

const multiplication = (a, b) => {
    return a * b
}

const division = (a, b) => {
    return a / b
}

const PI = 3.14

const areaOfCircle = (radius, py) => {
    return py * radius * radius
}

export default User
export {addition, substraction, division, areaOfCircle, PI}