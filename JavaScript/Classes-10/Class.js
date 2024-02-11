class User {

    constructor(name,role,isAdmin,isLoggedIn){
        (this.name = name),
        (this.role =role),
        (this.isAdmin = isAdmin),
        (this.isLoggedIn = isLoggedIn)
    }

    displayInfo(){
        console.log(`${this.name} is a ${this.role} `);
    }
}

const user1 = new User("Sushant","SDE","false","true");
console.log(user1.displayInfo());
