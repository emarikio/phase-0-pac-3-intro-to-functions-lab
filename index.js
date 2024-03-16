const expect = require("expect");

function shout(Hello) {
    return Hello.toUpperCase(); 
}
function whisper(Hello) {
    return Hello.toLowerCase();
}
function logShout(Hello) {
    console.log("Hello".toUpperCase());
}
function logWhisper(Hello) {
    console.log("Hello".toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if(string===string.toLowerCase()) {
        return `I can\'t hear you!`;
}else if(string===string.toUpperCase()) {
    return `YES INDEED!`;
}else if(string===`Let\'s have dinner together!`) {
    return `I would love to!`;
  }
}
