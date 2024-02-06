//  const obj ={
//     name:"Sushant",
//     displayMsg:function(){
//         console.log("Hello "+this.name);
//     }
//  }

//  obj.displayMsg();
// //  console.log(obj);

const user1 ={
    name:"Sushant",
    showName: function(){
        console.log(this.name);
    },
};
const user2 ={
    name:"Ravi",
    showName: function(){
        console.log(this.name);
    },
};
const user3 ={
    name:"Lakhan",
    showName: function(){
        console.log(this.name);
    },
};

user1.showName();
user2.showName();
user3.showName();