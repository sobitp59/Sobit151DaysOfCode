// Write a function that uses reduce to find the user who has the most number of friends.

const users = [
  { id: 1, name: 'Alice', friends: ["Bob", "Charlie", "David"] },
  { id: 2, name: 'Bob', friends: ["Alice", "Charlie", "Eve"] },
  { id: 3, name: 'Charlie', friends: ["Alice", "Bob", "David", "Eve"] },
  { id: 4, name: 'David', friends: ["Alice", "Charlie"] },
  { id: 5, name: 'Eve', friends: ["Bob", "Charlie"] }
];

const getUserWithMostFriends = users => users.reduce((maxFriends, {name, friends}) => {
    if(friends.length > maxFriends){
        maxFriends = friends.length;
        return maxFriends;
    }else if(friends.length === maxFriends){
        return name;
    }
    return maxFriends;
    
     
}, 0)

console.log(getUserWithMostFriends(users));