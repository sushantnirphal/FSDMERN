const emp =[
    {
        name:"Sushant",
        numOfYear :1
    },
    {
        name:"Sanket",
        numOfYear :5
    },
    {
        name:"Aniket",
        numOfYear :5
    },
    {
        name:"Jay",
        numOfYear :2
    },
    {
        name:"Chetan",
        numOfYear :3
    }
]


const res = emp.filter(emp=>emp.numOfYear >3).map(emp=>emp.name);
console.log(res);