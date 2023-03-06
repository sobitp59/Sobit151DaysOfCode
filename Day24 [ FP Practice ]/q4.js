// write a function which removes all letters between first and last letter of a word and replace with number of letters

const input = "Every developer likes to mix kubernetes and javascript";



const get7 = input => {
    const inputArray = input.split(' ');
    return inputArray.map((string) => {
        let firstChar = string[0];
        let lastChar = string[string.length - 1];
        let lengthBetween = string.length - 2;

        return lengthBetween < 1 ? `${firstChar}${lastChar}` : `${firstChar}${lengthBetween}${lastChar}`;
    }).join(' ')
}

console.log(get7(input))

//expected output

"E3y d7r l3s to m1x k8s a1d j8t"