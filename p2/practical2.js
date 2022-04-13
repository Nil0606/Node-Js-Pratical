/**here object user is created which inherited property of object
 * which containe toString method
 */

let user={
    name:"Nil Patel",
    enrollMent:190280116111,
    college:"LD college of Engineering",
    subject:"Advanced Web Programming",
    toString:()=>{
        return user.name+"  "+user.enrollMent;
    }
};
console.log(user.toString());
