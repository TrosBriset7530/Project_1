console.log("Hello")
let Item_1 = document.getElementById("click_1")
let h2_1 = document.getElementById("h2_1")
const bodyId = document.body.id
let Item_2 = document.getElementById("click_5")
const Item = document.querySelectorAll(".item")
var container = document.getElementById("container")

// Ini Awal dari Item_1
    Item_1.addEventListener('click',  function() {
    // Item_1.style.height = "30%"
    // Item_1.style.padding = "40vh"
    h2_1.style.display = "block"
    // Item_1.style.transform = "scale(1)"
    });
    Item_1.addEventListener('dblclick',  function() {
        /* padding: 40vh;
        width: 50%; */
        // Item_1.style.height = "150px"
        // Item_1.style.padding = "2em"
        h2_1.style.display = "none"
        // Item_1.style.transform = "scale(1.2)"
        });
        Item_1.addEventListener('mouseover',  function() {
            document.body.style.backgroundImage = "url(pic/CS_1.jpg)"
            
        });
        Item_1.addEventListener('mouseleave',  function() {
            document.body.style.backgroundImage = "url()"
        });
    // Ini Akhir dari Item_1
    // Item 5
    Item_5.addEventListener('click',  function() {
        document.h2 = "Counter Strike: Global Offensive"
        });
    // Item_5 end
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
//   });
//     item.addEventListener('mouseover',  function() {
//     document.body.style.cursor = "pointer";
//   });
//     item.addEventListener('mouseout', function(){
//     document.body.style.cursor = "default";
// });
// container.addEventListener('mouseout', function(){
//     document.body.style.cursor = "default";
// });
