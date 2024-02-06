// function displayName(){
//     console.log(this);
// }

// const user1 ={
//     name:"Sushant",
//     showName:displayName,
// }
// console.log(user1);
// user1.showName();

/*  Question NO - 02   */
// function displayName(){
//     console.log(this);
// }

// const user2 ={
//     name:"Sushant",
//     showName : function () {
//         displayName();
//     }
// }

// user2.showName();


/*  Question-03    */

// const displayName =() =>{
//     console.log(this);
// };

// const user2 ={
//     name:"Sushant",
// }

// displayName.apply(user2);


/*    QUESTION - o4  */

// function User(){
//     console.log(this);
// }

// const userl = new User();


/*    QUESTION - o5  */

// const  person = {
//     name:"Sushant",
//     sayHi: function(){
//         console.log(`welcome ${this.name}`);
//     }
// }
// person.sayHi();

/*  Question -06*/

const person = {
    name :"Sushant",
    sayHi:function(){
        console.log(`WelCome ${this.name}`);
    }
}

let person2 = person.sayHi;
person2();