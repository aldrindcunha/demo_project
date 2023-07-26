let display = {};
let author = " author";
let category = " category"
async function newsfeed(){
    let url = 'https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news';
    let response = await fetch(url);
    display = await response.json();   
    document.getElementById("load-news").addEventListener("click", loadNews);
    document.getElementById("load-buisness").addEventListener("click", loadbuisness);
    document.getElementById("load-all").addEventListener("click", loadall);
    document.getElementById("load-sports").addEventListener("click", loadsports);
    document.getElementById("load-world").addEventListener("click", loadworld);
    document.getElementById("load-politics").addEventListener("click", loadpolitics);
    document.getElementById("load-hatke").addEventListener("click", loadhatke);
    document.getElementById("load-science").addEventListener("click", loadscience);
    document.getElementById("load-automobile").addEventListener("click", loadautomobile);
    document.getElementById("fill1").addEventListener("click", loadcolor1);
    document.getElementById("fill2").addEventListener("click", loadcolor2);
    document.getElementById("fill3").addEventListener("click", loadcolor3);
    document.getElementById("fill4").addEventListener("click", loadcolor4);
}
newsfeed();

function loadNews() {
    document.getElementById("author1").innerHTML = 'BY ' + display.data[0][author];
    document.getElementById("general1").innerHTML = display.data[0].content;
    let text1 = document.getElementById("category1").innerHTML = display.data[0][category];
    document.getElementById('fill1').style.color = 'black';
     

    document.getElementById("author2").innerHTML = 'BY ' + display.data[1].author;
    document.getElementById("general2").innerHTML = display.data[1].content;
    document.getElementById("category2").innerHTML = "CATEGORY HATKE";
    document.getElementById('fill2').style.color = 'black';
    
    
}
loadNews();

function loadbuisness() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[2].author;
    document.getElementById("general3").innerHTML = display.data[2].content;
    document.getElementById("category3").innerHTML = "CATEGORY BUISNESS";
    document.getElementById('fill3').style.color = 'black';
    

    document.getElementById("author4").innerHTML = 'BY ' + display.data[3].author;
    document.getElementById("general4").innerHTML = display.data[3].content;
    document.getElementById("category4").innerHTML = "CATEGORY BUISNESS";
    document.getElementById('fill4').style.color = 'black';
    
    
}
loadbuisness()


function loadall() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[4].author;
    document.getElementById("general3").innerHTML = display.data[4].content;
    let text3 = document.getElementById("category3").innerHTML = "CATEGORY ALL";
    document.getElementById('fill3').style.color = 'black';

    document.getElementById("author4").innerHTML = 'BY ' + display.data[5].author;
    document.getElementById("general4").innerHTML = display.data[5].content;
    document.getElementById("category4").innerHTML = "CATEGORY ALL";
    document.getElementById('fill4').style.color = 'black';
    
    
}
loadall()


function loadsports() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[6].author;
    document.getElementById("general3").innerHTML = display.data[6].content;
    document.getElementById("category3").innerHTML = "CATEGORY SPORTS";
    document.getElementById('fill3').style.color = 'black';

    document.getElementById("author4").innerHTML = 'BY ' + display.data[7].author;
    document.getElementById("general4").innerHTML = display.data[7].content;
    document.getElementById("category4").innerHTML = "CATEGORY SPORTS";
    document.getElementById('fill4').style.color = 'black';
    
    
}
loadsports()


function loadworld() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[8].author;
    document.getElementById("general3").innerHTML = display.data[8].content;
    document.getElementById("category3").innerHTML = "CATEGORY World";
    document.getElementById('fill3').style.color = 'black';

    document.getElementById("author4").innerHTML = 'BY ' + display.data[9].author;
    document.getElementById("general4").innerHTML = display.data[9].content;
    document.getElementById("category4").innerHTML = "CATEGORY World";
    document.getElementById('fill4').style.color = 'black';
    
    
}
loadworld()

function loadpolitics() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[10].author;
    document.getElementById("general3").innerHTML = display.data[10].content;
    document.getElementById("category3").innerHTML = "CATEGORY POLITICS";
    document.getElementById('fill3').style.color = 'black';

    document.getElementById("author4").innerHTML = 'BY ' + display.data[11].author;
    document.getElementById("general4").innerHTML = display.data[11].content;
    document.getElementById("category4").innerHTML = "CATEGORY POLITICS";
    document.getElementById('fill4').style.color = 'black';
} 
    loadpolitics()


function loadhatke() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[12].author;
    document.getElementById("general3").innerHTML = display.data[12].content;
    document.getElementById("category3").innerHTML = "CATEGORY HATKE";
    document.getElementById('fill3').style.color = 'black';

    document.getElementById("author4").innerHTML = 'BY ' + display.data[13].author;
    document.getElementById("general4").innerHTML = display.data[13].content;
    document.getElementById("category4").innerHTML = "CATEGORY HATKE";
    document.getElementById('fill4').style.color = 'black';
    
    
}
loadhatke()

function loadscience() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[14].author;
    document.getElementById("general3").innerHTML = display.data[14].content;
    document.getElementById("category3").innerHTML = "CATEGORY SCIENCE";
    document.getElementById('fill3').style.color = 'black';

    document.getElementById("author4").innerHTML = 'BY ' + display.data[15].author;
    document.getElementById("general4").innerHTML = display.data[15].content;
    document.getElementById("category4").innerHTML = "CATEGORY SCIENCE";
    document.getElementById('fill4').style.color = 'black';
    
    
}
loadscience()


function loadautomobile() {
    document.getElementById("author3").innerHTML = 'BY ' + display.data[16].author;
    document.getElementById("general3").innerHTML = display.data[16].content;
    document.getElementById("category3").innerHTML = "CATEGORY AUTOMOBILE";
    document.getElementById('fill3').style.color = 'black';
    

    document.getElementById("author4").innerHTML = 'BY ' + display.data[17].author;
    document.getElementById("general4").innerHTML = display.data[17].content;
    document.getElementById("category4").innerHTML = "CATEGORY AUTOMOBILE";
    document.getElementById('fill4').style.color = 'black';
    
    
}
loadautomobile()

function loadcolor1(){
    document.getElementById('fill1').style.color = 'red';
}
loadcolor1();


function loadcolor2(){
    document.getElementById('fill2').style.color = 'red';
}
loadcolor2();


function loadcolor3(){
    document.getElementById('fill3').style.color = 'red'; 
}
loadcolor3();


function loadcolor4(){
    document.getElementById('fill4').style.color = 'red';
}
loadcolor4();









