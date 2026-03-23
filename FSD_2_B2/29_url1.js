// Unit 3 --> Node Js

var url=require("url");
var addr="https://video.google.com:8080/ljunivercity/about?branch=CSE&year=2025#students";
var up=url.parse(addr);
console.log(up)


// OutPut -----------

// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'video.google.com:8080',
//   port: '8080',
//   hostname: 'video.google.com',
//   hash: '#students',
//   search: '?branch=CSE&year=2025',
//   query: 'branch=CSE&year=2025',
//   pathname: '/ljunivercity/about',
//   path: '/ljunivercity/about?branch=CSE&year=2025',
//   href: 'https://video.google.com:8080/ljunivercity/about?branch=CSE&year=2025#students'
// }

var up1=url.parse(addr,true);
console.log(up1)

// Output -----------

// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'video.google.com:8080',
//   port: '8080',
//   hostname: 'video.google.com',
//   hash: '#students',
//   search: '?branch=CSE&year=2025',
//   query: [Object: null prototype] { branch: 'CSE', year: '2025' },
//   pathname: '/ljunivercity/about',
//   path: '/ljunivercity/about?branch=CSE&year=2025',
//   href: 'https://video.google.com:8080/ljunivercity/about?branch=CSE&year=2025#students'
// }


var a=up1["query"].year
if (a%4==0){
    console.log("Leap Year")
}
else{
    console.log("Not a Leap Year")
}
 
// 2025 --> Not a Leap Year



// no in exam point of
process.noDeprecation=true; // if you don't want warning 
// node --no-deprecation url1.js   --> another option
// node --trace-deprecation url1.js --> if you don't want know reason for warning