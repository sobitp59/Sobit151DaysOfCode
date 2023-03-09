var members =
[
  {
    id: 111,
    name: "Chelsea Foster",
    workExp: 7,
    deptExp: 6,
    isPermanent: true,
  },
  {
    id: 102,
    name: "Aggie Sparling",
    workExp: 13,
    deptExp: 10,
    isPermanent: false,
  },
  {
    id: 123,
    name: "Timmy Matthews",
    workExp: 23,
    deptExp: 15,
    isPermanent: false,
  },
  {
    id: 66,
    name: "Emmet Foster",
    workExp: 22,
    deptExp: 9,
    isPermanent: true,
  },
  {
    id: 89,
    name: "Brent Dolan",
    workExp: 16,
    deptExp: 12,
    isPermanent: true,
  },
];

const getTotalWorkExp = members => members
.filter(({isPermanent}) => isPermanent)
.reduce((totatlExp, {workExp}) => totatlExp + workExp, 0 )


const addScore = members => members.map(member => {
    return {...member, score : member.workExp + member.deptExp}
})

console.log(getTotalWorkExp(members))
console.log(addScore(members))