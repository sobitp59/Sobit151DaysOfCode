// 01: Find the sum of all members workExp sum who are permanent (isPermenant)?

let members =
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


const getTotalExp = members => members.reduce((totalWorkEXp, member) => {
    const {workExp, isPermanent} = member;
    return isPermanent ? totalWorkEXp + workExp : totalWorkEXp;
}, 0)

console.log(getTotalExp(members))