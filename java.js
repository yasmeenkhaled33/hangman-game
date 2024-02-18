let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lettersarray=Array.from(letters);
let letterscontainer=document.querySelector(".letters");
lettersarray.forEach((letter)=>{
    let span=document.createElement("span");
    let spantext=document.createTextNode(letter);
    span.appendChild(spantext);
    span.className="letterbox"
    letterscontainer.appendChild(span)
})

let words= {
    programming:["PHP","JAVASCRIPT","GO","SCALA","FORTRAN","R","MYSQL","PYTHON"],
    movies:["GAALATNY MOGRIMAN","MATAB SENAEE","ELKHALEIA","WESH EGRAM","YANA YA KHALTY","EL GEZERA","HOBAK NAR","BEIT EL RUBY"],
    people:["AHMED ELSAQA","KAREEM ABDELAZIZ","AHMED HELMY","MONA ZAKI","YASMEEN KHALED","AHMED MEKKI"],
    countries:["SYRIA","PALASTINE","YEMEN","EGYPT","BAHRAIN","QATAR"]
}
let allkes=Object.keys(words);
let randompropnum=Math.floor(Math.random()*allkes.length)
let randompropname=allkes[randompropnum];
let randompropvalue=words[randompropname];
let randomvalue=Math.floor(Math.random()*randompropvalue.length)
let propname=randompropvalue[randomvalue];

document.querySelector(".info .cate span").innerHTML=randompropname;

let letterguesscontainer=document.querySelector(".guess");
let arrayofprop=Array.from(propname);
console.log(arrayofprop);
arrayofprop.forEach((ele)=>{
    let emptyspan=document.createElement("span");
    if(ele===" ") {
        emptyspan.className="space";
        emptyspan.innerHTML="-"
    }
    letterguesscontainer.appendChild(emptyspan);
})

let wordspans=document.querySelectorAll(".guess span");
let wrongnum=0;
let thedrow=document.querySelector(".hangman");

document.addEventListener("click",(e)=>{
    if(e.target.className === "letterbox") {
        let thestatus=false;
        e.target.classList.add("clicked")
        let chosenletter=e.target.innerHTML;
        arrayofprop.forEach((letter,letterindex)=>{
            if(chosenletter===letter) {
                thestatus=true;
                wordspans.forEach((span,index)=>{
                    if(letterindex===index) {
                        span.innerHTML=letter
                        checkComplete();
                    }
                })
            }
        })
        if(thestatus!==true) {
            wrongnum++;
            thedrow.classList.add(`wrong-${wrongnum}`);
            document.getElementById("fail").play();
            if(wrongnum === 9) {
                letterscontainer.classList.add("finished");
                document.getElementById("failll").play();
                endgame(false);
            }
        }else {
            document.getElementById("success").play();
        }
    }
})
function endgame(complete) {
    let div=document.createElement("div");
    if(complete){
        divtext = document.createTextNode(`Congratulation y gamed ` );
    }else{
        divtext = document.createTextNode(`Game over ya baba khalas, The word is ${propname}` );
    }
    div.appendChild(divtext);
    div.className="over";
    document.body.appendChild(div);
}

function checkComplete() {
    let status=true;
    wordspans.forEach((span)=>{
        if(span.innerHTML === "" ) {
            status=false;
        }
    })
    if(status===true) {
        letterscontainer.classList.add("finished");
        document.getElementById("winner").play();
        endgame(true);
    }
}










