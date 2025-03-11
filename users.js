class User{
    id;
    name;
    type;
    status;
    constructor(id,name, type, status ) {
        this.id=id;
        this.name = name;
        this.type = type;
     
    }
    toString() {
        return `id:${this.id},name: ${this.name}, type: ${this.type}, status: ${this.status}`;
    }
   

}
const users=[new User("1111","aaa","metach",true),new User("2222","bbb","drama",false),new User("3333","ccc","regesh",false)]
function printUsers(){
    for (const u of users) {
        console.log(u.toString());
        console.log();
    }
}
function userTakeBook(i) {
    for (const u of users) {
        if (u.id==i) {
            return u
        }
    }
    throw new Error("this user doesnt exist!");   
}
module.exports = {printUsers,userTakeBook}