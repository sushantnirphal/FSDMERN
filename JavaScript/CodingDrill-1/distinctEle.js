const arr =['a','b','c','d','e','f','b','a']

// const res = arr.reduce((acc,cur)=>cur in acc ? {...acc,[cur]: acc[cur]+1},{})
const result = arr.reduce((acc, cur) => cur in acc ? {...acc, [cur]: acc[cur] + 1} : {...acc, [cur]: 1}, {});
console.log(result);