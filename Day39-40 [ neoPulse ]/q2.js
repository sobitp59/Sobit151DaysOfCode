// Write a function that takes an object representing employee's information (name, experience, role, company ) and returns a template literal that includes the employee's name, experience, role and company in a sentence.



const employee1 = { name: 'John', experience: 5, role: 'Tester', company:'Redbus' }
const employee2 = { name: 'Jane', experience: 2, role: 'Developer', company:'Chalo' }

const employeeInfo = ({name, experience, role, company}) => {
    return `${name} has ${experience} years of experience as a ${role} in ${company}`;
};

console.log(employeeInfo(employee1));
console.log(employeeInfo(employee2));