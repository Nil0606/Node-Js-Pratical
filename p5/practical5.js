const url=require("url");
//url parsing without query 
let address="https://github.com/Nil0606"
let urlobject = url.parse(address, false);
console.log(urlobject);

//url parsing with query
address ="https://www.youtube.com/results?search_query=gate"
urlobject=url.parse(address,true);
console.log(urlobject);
