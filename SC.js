//item (maybe ???)
let Item_1 = document.getElementById("click_1")
let h2_1 = document.getElementById("h2_1")
let Item_2 = document.getElementById("click_2")
let Item_3 = document.getElementById("click_3")
let Item_4 = document.getElementById("click_4")
let Item_5 = document.getElementById("click_5")
// About
let gname = document.getElementById("gname")
let worddesc = document.getElementById("word-about")
let up = document.getElementById("click_0")
let down = document.getElementById("click_last")
// 
const bodyId = document.body.id
const Item = document.querySelectorAll(".item")
var container = document.getElementById("container")
let counter = parseInt(localStorage.getItem('myPersistentCount')) || 1;
// To Update Counter
function updateCountDisplayAndStorage() {
    localStorage.setItem('myPersistentCount', counter); // Save the current count to localStorage
    console.log("Count is now: " + counter + " (saved to localStorage)");
}
function updateContent() {
    updateCountDisplayAndStorage();
    if (counter === 1) {
        gname.innerHTML = "Counter Strike";
        worddesc.innerHTML = "Originally a modification for Half-Life, Originally a modification for Half-Life, the development team was hired by Valve in 2000, when the company acquired the rights to Counter-Strike.The game received a port to Xbox in 2003. It was also ported to OS X and Linux in the form of a beta in January 2013. A full release was published in April 2013.";
        Item.forEach(item => {
        item.style.transform = "scale(1)"
    });
        Item_1.style.transform = "scale(1.2)"
    } else if (counter === 2) {
        gname.innerHTML = "Counter Strike: Ground Zero";
        worddesc.innerHTML = "Counter-Strike was followed up with Counter-Strike: Condition Zero,Counter-Strike was followed up with Counter-Strike: Condition Zero, developed by Turtle Rock Studios and released in 2004. It used the Half-Life GoldSrc engine, similarly to its predecessor. Besides the multiplayer mode, it also included a single-player mode with a 'full' campaign and bonus levels. The game received mixed reviews in contrast to its predecessor and was quickly followed with a further entry to the series titled Counter-Strike: Source.";
        Item.forEach(item => {
        item.style.transform = "scale(1)"
    });
        Item_2.style.transform = "scale(1.2)"
    }
    else if (counter === 3) {
        gname.innerHTML = "Counter Strike: Source";
        worddesc.innerHTML = "Counter-Strike was followed up with Counter-Strike: Condition Zero,Counter-Strike was followed up with Counter-Strike: Condition Zero, developed by Turtle Rock Studios and released in 2004. It used the Half-Life GoldSrc engine, similarly to its predecessor. Besides the multiplayer mode, it also included a single-player mode with a 'full' campaign and bonus levels. The game received mixed reviews in contrast to its predecessor and was quickly followed with a further entry to the series titled Counter-Strike: Source.";
        Item.forEach(item => {
        item.style.transform = "scale(1)"
    });
        Item_3.style.transform = "scale(1.2)"
    }
    else if (counter === 4) {
        gname.innerHTML = "Counter Strike: Global Offensive";
        worddesc.innerHTML = "Counter-Strike was followed up with Counter-Strike: Condition Zero,Counter-Strike was followed up with Counter-Strike: Condition Zero, developed by Turtle Rock Studios and released in 2004. It used the Half-Life GoldSrc engine, similarly to its predecessor. Besides the multiplayer mode, it also included a single-player mode with a 'full' campaign and bonus levels. The game received mixed reviews in contrast to its predecessor and was quickly followed with a further entry to the series titled Counter-Strike: Source.";
        Item.forEach(item => {
        item.style.transform = "scale(1)"
    });
        Item_4.style.transform = "scale(1.2)"
    }
    else if (counter === 5) {
        gname.innerHTML = "Counter Strike: 2";
        worddesc.innerHTML = "Counter-Strike was followed up with Counter-Strike: Condition Zero,Counter-Strike was followed up with Counter-Strike: Condition Zero, developed by Turtle Rock Studios and released in 2004. It used the Half-Life GoldSrc engine, similarly to its predecessor. Besides the multiplayer mode, it also included a single-player mode with a 'full' campaign and bonus levels. The game received mixed reviews in contrast to its predecessor and was quickly followed with a further entry to the series titled Counter-Strike: Source.";
        Item.forEach(item => {
        item.style.transform = "scale(1)"
    });
        Item_5.style.transform = "scale(1.2)"
    }
    // else {
        
        
    // }
    // ... add more if/else if blocks for other counter values
}
// func button
updateCountDisplayAndStorage()

up.addEventListener('click',  function() {
    if (counter > 1){
    console.log(counter)
    counter -= 1;
    updateContent()
    }
    else{
        counter = 5;
        updateContent()
    }
});


down.addEventListener('click',  function() {
    if (counter < 5){
        console.log(counter)
        counter += 1;
        updateContent()
        }
    else{
        counter = 1;
        updateContent()
        }
});
// Ini Awal dari Item_1
    Item_1.addEventListener('click',  function() {
       counter = 1;
       updateContent()
    });
        Item_1.addEventListener('mouseleave',  function() {
            document.body.style.backgroundImage = "url()"
        });
    // Ini Akhir dari Item_1

    // Item 2
    Item_2.addEventListener('click',  function() {
        counter = 2;
       updateContent()
    });
    // Item 3
    Item_3.addEventListener('click',  function() {
        counter = 3;
       updateContent()
    });
    // Item 4
    Item_4.addEventListener('click',  function() {
        counter = 4;
       updateContent()
    });
    // Item 5
    Item_5.addEventListener('click',  function() {
        counter = 5;
       updateContent()
    });
    Item.forEach(item => {
        item.addEventListener('click', function() {
            console.log('A div was clicked!');
        });
    
        item.addEventListener('mouseover', function() {
            document.body.style.cursor = "pointer";
        });
    
        item.addEventListener('mouseout', function() {
            document.body.style.cursor = "default";
        });
    });