const Narr =[1,2,3,4,5];

const reduceFun = (acc,curr) => acc+curr;

const output = Narr.reduce(reduceFun,0);
console.log(output);