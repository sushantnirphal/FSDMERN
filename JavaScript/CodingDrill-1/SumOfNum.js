const arr = [10,17,61,54,44,60,120,23]

const res = arr.reduce((acc,cur)=> cur%20 ==0 && cur % 30 ==0 ? acc +cur: acc,0)
console.log(res);