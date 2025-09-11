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
// Parag
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
const p = document.querySelectorAll(".para")
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
     Item.forEach(item => {
        item.style.transform = "scale(1)"
        item.style.opacity= "0.4"
    });
    p.forEach(para => {
        para.style.transform = "scale(1)"
        para.style.opacity = "0.4"
    })
    if (counter === 1) {
        gname.innerHTML = "COUNTER STRIKE";
        worddesc.innerHTML = "Originally a modification for Half-Life, Originally a modification for Half-Life, the development team was hired by Valve in 2000, when the company acquired the rights to Counter-Strike.The game received a port to Xbox in 2003. It was also ported to OS X and Linux in the form of a beta in January 2013. A full release was published in April 2013.";
        Item_1.style.transform = "scale(1.2)"
        p1.style.transform = "scale(1.1)"
        Item_1.style.opacity= "1"
        p1.style.opacity = "1"
    } else if (counter === 2) {
        gname.innerHTML = "COUNTER STRIKE: GROUND ZERO";
        worddesc.innerHTML = "Counter-Strike was followed up with Counter-Strike: Condition Zero, developed by Turtle Rock Studios and released in 2004. It used the Half-Life GoldSrc engine, similarly to its predecessor. Besides the multiplayer mode, it also included a single-player mode with a 'full' campaign and bonus levels. The game received mixed reviews in contrast to its predecessor and was quickly followed with a further entry to the series titled Counter-Strike: Source.";
        Item_2.style.transform = "scale(1.2)"
        p2.style.transform = "scale(1.1)"
        Item_2.style.opacity= "1"
        p2.style.opacity = "1"
    }
    else if (counter === 3) {
        gname.innerHTML = "COUNTER STRIKE: SOURCE";
        worddesc.innerHTML = "Counter-Strike: Source was the first game publicly released by Valve to run on the Source engine. Counter-Strike: Source was initially released as a beta to members of the Valve Cyber Café Program on August 11, 2004.On August 18, 2004, the beta was released to owners of Counter-Strike: Condition Zero and to those who had bought ATI Radeon video cards bundled with a Half-Life 2 voucher. While the original release only included a version for Microsoft Windows, the game eventually received a port to OS X on June 23, 2010, with a Linux port afterwards in 2013.";
        Item_3.style.transform = "scale(1.2)"
        p3.style.transform = "scale(1.1)"
        Item_3.style.opacity= "1"
        p3.style.opacity = "1"
    }
    else if (counter === 4) {
        gname.innerHTML = "COUNTER STRIKE: GLOBAL OFFENSIVE";
        worddesc.innerHTML = "Counter-Strike: Global Offensive was the fourth release in the main, Valve-developed Counter-Strike series in 2012. Much like Counter-Strike: Source the game runs on the Source engine. It was available for Microsoft Windows, OS X, and Linux, as well as the Xbox 360 and PlayStation 3 consoles, and is backwards compatible on the Xbox One console.";
        Item_4.style.transform = "scale(1.2)"
        p4.style.transform = "scale(1.1)"
        Item_4.style.opacity= "1"
        p4.style.opacity = "1"
    }
    else if (counter === 5) {
        gname.innerHTML = "COUNTER STRIKE: 2";
        worddesc.innerHTML = "On March 22, 2023, Valve announced Counter-Strike 2, which utilizes the Source 2 game engine. It was originally announced as a free upgrade to Global Offensive with a summer 2023 release date. On September 1, 2023, it was released as a limited beta, and the game replaced Global Offensive on September 27.";
        Item_5.style.transform = "scale(1.2)"
        p5.style.transform = "scale(1.1)"
        Item_5.style.opacity= "1"
        p5.style.opacity = "1"
    }
    up.style.opacity="1";
    down.style.opacity="1";
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
    p1.addEventListener('click',  function() {
        counter = 1;
       updateContent()
    });
    p2.addEventListener('click',  function() {
        counter = 2;
       updateContent()
    });
    p3.addEventListener('click',  function() {
        counter = 3;
       updateContent()
    });
    p4.addEventListener('click',  function() {
        counter = 4;
       updateContent()
    });
    p5.addEventListener('click',  function() {
        counter = 5;
       updateContent()
    });
    Item.forEach(item => {
        item.addEventListener('click', function() {
            console.log('A div was clicked!');
        });
    
        item.addEventListener('mouseover', function() {
            document.body.style.cursor = "pointer";
            updateContent()
            item.style.transform = "scale(1.2)"
            p.style.transform = "scale(1.2)"
            console.log(p);

        });
    
        item.addEventListener('mouseout', function() {
            document.body.style.cursor = "default";
            item.style.transform = "scale(1)"
            updateContent()
            
            // p.forEach(para =>{
            //     para.style.transform = "scale(1)"
            // })
        });
    });
    p.forEach(para =>{
        para.addEventListener('mouseover', function() {
            document.body.style.cursor = "pointer";
            updateContent()
            para.style.transform = "scale(1.1)"
            console.log(para);

        });
        para.addEventListener('mouseout', function() {
            document.body.style.cursor = "default";
            para.style.transform = "scale(1)"
            updateContent()
    })
});