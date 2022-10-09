let quote=document.getElementById("Quote");
let author=document.getElementById("author");
let btn=document.getElementById("btn");

const api="https://free-quotes-api.herokuapp.com/";

let getQuote =() => {
    fetch(api).then((data_received) => data_received.json()).then((item) =>{
        quote.innerText=item.quote;
        author.innerText=item.author;
    });
};

window.addEventListener("load",getQuote);
btn.addEventListener("click",getQuote);