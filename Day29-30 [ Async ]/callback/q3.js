// Write a function willThanosKillMe() . 
// This function will take three parameters

// Your name
// Function to call if Thanos doesn't kill you.
// Function to call if Thanos does kill you.

// This function will call success callback if your name 
// has even characters. You won't die.

// But if your name has odd number of characters then you're
// going to die. Sorry! :(

// Now, call this function with the given parameters. The success
//  function should console a happy message: Yay! I am alive! and 
// the failure function should console your will: Give my bose speakers and apple headphones to my sister

const willThanosKillMe = (name, CB1, CB2) => !(name.length%2) ? CB1(name.length) : CB2(name.length);

const CBAlive = (nameLength) => console.log(`yay!! i am alive. 🐱‍👓 it was ${nameLength}`);
const CBDead = (nameLength) => console.log(`oh no!! i am dead. 💀 it was ${nameLength}`);

willThanosKillMe('sobu', CBAlive, CBDead);


