document.addEventListener('DOMContentLoaded',function(event){  
// array with texts to type in typewriter  
var dataText = ["experiences.", "designs", "solutions"];   
// type one text in the typwriter 
// keeps calling itself until the text is finished  
function typeWriter(text, i, fnCallback) {    
// chekc if text isn't finished yet   
if (i < (text.length)) {     
// add next character to h1    
document.querySelector(".anim").innerHTML = text.substring(0, i+1);      
// wait for a while and call this function again for next character     
setTimeout(function() {       
   typeWriter(text, i + 1, fnCallback)      }, 150);    }   
    // text finished, call callback if there is a callback function  
     else if (typeof fnCallback == 'function') {      
     // call callback after timeout      
     setTimeout(fnCallback, 2000);    }  }  
     // start a typewriter animation for a text in the dataText array   
     function StartTextAnimation(i) {     
     	if (typeof dataText[i] == 'undefined'){        
     		setTimeout(function() {          StartTextAnimation(0);        }, 10000);     }    
      // check if dataText[i] exists    
      if (i < dataText[i].length) {      
      // text exists! start typewriter animation     
      typeWriter(dataText[i], 0, function(){       
      // after callback (and whole text has been animated), start next text       
      StartTextAnimation(i + 1);     });    }  }  // start the text animation  
      StartTextAnimation(0);});


const elements = document.querySelector('.elements');
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('mousemove', e => {
    elements.setAttribute("style", "margin-left: "+(e.pageX * 0.01)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})






// just querying the DOM...like a boss!
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector("#wrapper");
 
// the activeLink provides a pointer to the currently displayed item
var activeLink = 0;
 
// setup the event listeners
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);
 
    // identify the item for the activeLink
    link.itemID = i;
}
 
// set first item as active
links[activeLink].classList.add("active");
 
function setClickedItem(e) {
    removeActiveLinks();
 
    var clickedLink = e.target;
    activeLink = clickedLink.itemID;
 
    changePosition(clickedLink);
}
 
function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}
 
// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition(link) {
    var position = link.getAttribute("data-pos");
 
    var translateValue = "translate3d(" + position + ", 0px, 0)";
    wrapper.style.transform = translateValue;
 
    link.classList.add("active");
}
