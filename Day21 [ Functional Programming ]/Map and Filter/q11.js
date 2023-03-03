
// Write a arrow function which takes an object and prints the particular sentence
// My name is Sudipta Chakraborty. I scored 99 in Math and 96 in Computer from ISC board.

const getSentence = (({name, school : {board : [boardname], marks}}) => {
    
    return `My name is ${name}. I scored ${
            marks.map((mark, index) => {
                const {subject, percent} = mark;
                index = index + 1;

                if(marks.length > 1){
                    return `${percent} in ${subject} ${index < marks.length ? ' and ' : ' '}`  
                }else{
                    return `${percent} in ${subject}`  
                }
            }).join('')}from ${boardname} board.`
}) 


const student = {
    name: 'Sudipta Chakraborty',
    school: {
        board:['ISC'],
        marks: [
                { subject: 'Math', percent: 99 },
                { subject: 'Computer', percent: 96},
               ]
    }
}

console.log(getSentence(student))
