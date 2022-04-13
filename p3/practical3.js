const fs=require("fs");

// create new file and add text on it

fs.writeFileSync("text.txt","Today is good day.");

//append good bye in text.text

fs.appendFileSync("text.txt","good bye");

console.log(fs.readFileSync("text.txt","utf-8"));

fs.unlinkSync("text.txt");