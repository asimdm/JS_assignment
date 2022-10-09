let quote=[
    "\"If you want to live a happy life, tie it to a goal, not to people or things.\"",
    "\"Never let the fear of striking out keep you from playing the game.\"",
    "\"Money and success don\'t change people; they merely amplify what is already there.\"",
    "\"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking.\"",
    "\"If life were predictable it would cease to be life, and be without flavor.\""
]

let author=[
    "- Albert Einstein",
    "- Babe Ruth",
    "- Will Smith",
    "- Steve Jobs",
    "- Eleanor Roosevelt"
]

function next(){
    let x=Math.floor((Math.random()*5));
    document.getElementById("Quote").innerHTML=quote[x];
    document.getElementById("author").innerHTML=author[x];
}