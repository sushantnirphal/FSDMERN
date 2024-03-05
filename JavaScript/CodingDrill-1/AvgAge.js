const AgeOfFrend =[
    {
        name:"Sushant",
        age :23
    },
    {
        name:"Sanket",
        age :22
    },
    {
        name:"Aniket",
        age :21
    },
    {
        name:"Jay",
        age :22
    },
    {
        name:"Chetan",
        age :24
    }
]
let res = AgeOfFrend.reduce((acc,cur)=> acc + cur.age,0);
     res = res / AgeOfFrend.length;
console.log(res);