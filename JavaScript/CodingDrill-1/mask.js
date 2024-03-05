const str = "123456789987654321"

const maskChar ="#".repeat(4);

const result = str.slice(0,str.length-4)+maskChar;
console.log(result);