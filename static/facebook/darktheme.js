function toggleHelp() {
   var a = document.querySelectorAll('.subhelpandsupport h2'); 
     a.forEach(items => {
     	if(items.style.display === "none" || items.style.display === "")
     	{
     		items.style.display = "block";
     	}
     	else {
     		items.style.display = "none";
     	}
     });
}
function arrowminus() {
    var b = document.querySelector('#arrowminus'); // Single element
    var c = document.querySelector('#arrowdown');  // Single element

    if (c.style.display === "block" || c.style.display === "") {
        c.style.display = "none";
        b.style.display = "block"; // Corrected: First show b
    } else {
        b.style.display = "none";
        c.style.display = "block"; // Toggle back to c
    }
}

 let clickSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
 function playSound(){
    clickSound.play();
 }


let clickSou = new Audio("https://files.catbox.moe/1obqlq.mp3");
 
 function playSou()
 {
    clickSou.play();}
    


function container5tggl() 
{
  document.getElementById('container5').classList.toggle('active');
}
function containerR5tggl() 
{
  document.getElementById('container5').classList.remove('active');
}
function Container6() {
    let checkbox = document.getElementById('checkboxofC6');
    if (checkbox.checked) {
        alert("Your Notification settings change is done!");
    }
}

function container6t(){
   var e = document.getElementsByClassName('settingofC6Fr')[0];

   if(e.style.display === "none" || e.style.display === "")
   {
    e.style.display = "block";
   }
   else{
    e.style.display = "none"
   }
}
function slider3t(){
    document.getElementsByClassName('slider3')[0].classList.toggle('active');
}
function sliderR3t(){
    document.getElementsByClassName('slider3')[0].classList.remove('active');
}
function sentrequestC6slider3()
{
    var f = document.getElementsByClassName('sentrequest')[0];
    if(f.style.display === "none" || f.style.display === "")
    {
        f.style.display = "block";
    }
    else{
        f.style.display = "none";
    }
}
function slider4C6()
{
    document.getElementsByClassName('slider4')[0].classList.toggle('active');
}
function sliderR4C6()
{
    document.getElementsByClassName('slider4')[0].classList.remove('active');
}

function btnSizeIncrease() {
    var buttons = document.querySelectorAll('.btnC6'); // Sabhi buttons ko select karo
    var divs = document.querySelectorAll('.btnC6-1');    // Sabhi divs ko select karo

    buttons.forEach((btn, index)=>{
        btn.addEventListener("click", function(){
         btn.style.display = "none";
         divs[index].style.width = "98%";
        });
    });
    divs.forEach((div, index)=>{
        div.addEventListener("click", function(){
            if(div.style.width === "98%"){
                div.style.width = "49%";
                buttons[index].style.display = "inline-block";
            }
        });
    });
}

function subfindfriends2profileADD(){
    var buttons1 = document.querySelectorAll('.btnC6-2'); // Sabhi buttons ko select kiya
    var btn1 = document.querySelectorAll('.btnC6-3');     // Second buttons ko select kiya

    // Pehla button pe click hone pe doosra button show kare
   buttons1.forEach((button, index) =>{
    button.addEventListener('click', function(){
        button.style.display = "none";
        btn1[index].style.height = "60%";
        btn1[index].style.fontSize = "150%";
    });
   });

    // Second button pe click hone pe pehla button wapas show kare
    btn1.forEach((s, index) => {
        s.addEventListener('click', function(){
            s.style.height = "40%";
            btn1[index].style.fontSize = "100%";
            buttons1[index].style.display = "inline-block";
        });
    });
}

function container6toggle()
{
 document.getElementsByClassName('container6')[0].classList.toggle('active');
 document.getElementsByClassName('findfriends')[0].classList.toggle('active'); 
document.getElementsByClassName('slider2')[0].classList.toggle('active'); 
}
function containerR6toggle()
{
 document.getElementsByClassName('container6')[0].classList.remove('active');
document.getElementsByClassName('findfriends')[0].classList.remove('active');
}


function slider5toggle()
{
    document.getElementsByClassName('slider5')[0].classList.toggle('active');
}
function sliderR5toggle()
{
    document.getElementsByClassName('slider5')[0].classList.remove('active');
}
function birthdaysnone() {
   var g = document.getElementById('angleDown1');
   var h = document.getElementById('Birthday1');
if (h.style.display === "none" || h.style.display === ""){
    h.style.display = "block";
    g.style.display = "none";
}else{
    h.style.display = "none";
    g.style.display = "block";
}
}
function findfriendsRR()
{
   var i =  document.getElementsByClassName('findfriends')[0];

   // Actual display value ko check karo
   if(window.getComputedStyle(i).display === "none"){
      i.style.display = "block";
   }
   else{
      i.style.display = "none";
   }
}
function customlists1()
{
    document.getElementsByClassName('customlists1')[0].classList.toggle('active');
}

function sliderMoveDarkLight() {
  var slider = document.getElementById('slider');
  slider.classList.toggle('active');
  var slider1 = document.getElementsByClassName('container2')[0];
  slider1.classList.toggle('active');
  var slider2 = document.getElementsByClassName('navbarF1')[0];
  slider2.classList.toggle('active');
  var slider3 = document.getElementsByClassName('subcontainer2')[0];
  slider3.classList.toggle('active');
  var slider4 = document.getElementsByClassName('subcontainer2-1')[0];
  slider4.classList.toggle('active');
  var slider5 = document.getElementsByClassName('subcontainer2-2')[0];
  slider5.classList.toggle('active');
  var slider6 = document.getElementsByClassName('Createanotherofform')[0];
  slider6.classList.toggle('active-theme');
  var slider7 = document.getElementsByClassName('MemoSavGr')[0];
  slider7.classList.toggle('active');

  var slider8 = document.querySelectorAll('.MemoriesC2');
  for(j=0; j<slider8.length; j++)
  slider8[j].classList.toggle('active');
  var slider9 = document.getElementsByClassName('container1')[0];
  slider9.classList.toggle('active-theme');

var slider10 = document.querySelectorAll('.menubar hr');
for(ab = 0; ab<slider10.length; ab++)
slider10[ab].classList.toggle('active');  
}


function heightIsubcontainer2()
{
document.getElementsByClassName('subcontainer2')[0].classList.toggle('active-theme');
}
function CreateanotherofformT(){
    document.getElementsByClassName('Createanotherofform')[0].classList.toggle('active');
}
function container2T(){
    document.getElementsByClassName('container2')[0].classList.toggle('active-theme');
}
function container2TR(){
    document.getElementsByClassName('container2')[0].classList.toggle('active-theme');
}
function ChatsettingT()
{
document.getElementsByClassName('Chatsetting')[0].classList.toggle('active');    
}
function ChatsettingR()
{
document.getElementsByClassName('Chatsetting')[0].classList.remove('active');    
}

function subNotification1NotT()
{
 document.getElementsByClassName('subNotification1-Not')[0].classList.toggle('active');   
}
function subNotification1NotR()
{
 document.getElementsByClassName('subNotification1-Not')[0].classList.remove('active');   
}


function subNotification3NotT()
{
document.getElementsByClassName('subNotification3-Not')[0].classList.toggle('active');    
}
function subNotification3NotR()
{
document.getElementsByClassName('subNotification3-Not')[0].classList.remove('active');    
}


function subNotification4NotT()
{
document.getElementsByClassName('subNotification4-Not')[0].classList.toggle('active');    
}
function subNotification4NotR()
{
document.getElementsByClassName('subNotification4-Not')[0].classList.remove('active');    
}

function Notification1T()
{
document.getElementsByClassName('Notification1')[0].classList.toggle('active');    
}
function Notification1R()
{
document.getElementsByClassName('Notification1')[0].classList.remove('active');    
}

function nanbarF1(){
    var icons = document.querySelectorAll('.navbarF1 i');
    icons.forEach(function(icon){
        icon.addEventListener('click', function(event){
        event.stopPropagation();
        icons.forEach(i => i.style.color = "black");
        icon.style.color = "blue";
        });
    });
    document.addEventListener('click', function(){
        icons.forEach(icon => icon.style.color = "black");
    });
}

/*           -----------j tak use varient--------*/

function C4Seemore(){
    var k = document.getElementsByClassName('seemore')[0];
    var l = document.getElementById('seemore1');
    var m = document.getElementById('seeless');

    if(k.style.display === "none" || k.style.display === "")
    {
        k.style.display = "block";
        l.style.display = "none";
        m.style.display = "block";

    }else{k.style.display = "none";
        l.style.display = "block";
        m.style.display = "none";}
}
function C4Seeless(){
     var k = document.getElementsByClassName('seemore')[0];
     var l = document.getElementById('seemore1');
     var m = document.getElementById('seeless');
   
     if(k.style.display === "block" || k.style.display === ""){
         k.style.display = "none";
         l.style.display = "block";
         m.style.display = "none";
     }else{
        k.style.display = "block";
        l.style.display = "none";
        m.style.display = "block";
     }
}


/*-----------------d use kar sakte hai--------------*/

function showC8(CNumber){
    let container8 = document.getElementById('scrollContainer8');
    let contain = document.getElementById(`Container${CNumber}`);
    
    container8.scrollTo({
        left:contain.offsetLeft,behavior:"smooth"
    });
}
function backC8(){
    let container8 = document.getElementById('scrollContainer8');
    let homeC8 = document.getElementById('Container8');
    container8.scrollTo({
      left:homeC8.offsetLeft,behavior:"smooth"
    });
}

document.addEventListener("DOMContentLoaded", function(){
    function jointoveiw(){
    let view = document.querySelectorAll('.subSuggestjoin button');

    view.forEach(function(text){
        text.addEventListener('click',function(){
            if(text.textContent === "join" || text.textContent === ""){
                text.textContent = "view";
            }else{
                text.textContent = "join";
            }
        });
    }); 
  }
   jointoveiw();
});

function Groups1show(){
    const gGroup = document.getElementsByClassName('Groups1')[0];
  
  if(gGroup.style.display === "none" || gGroup.style.display === ""){
    gGroup.style.display = "block";
  }else{gGroup.style.display = "none";}
}

function settingsofgroupsT(){
 document.getElementsByClassName('settingsofgroups')[0].classList.toggle('active');   
}
function settingsofgroupsR(){
 document.getElementsByClassName('settingsofgroups')[0].classList.remove('active');   
}

function UserContainer8T(){
document.getElementsByClassName('UserContainer8')[0]
.classList.toggle('active');
}
function UserContainer8R(){
document.getElementsByClassName('UserContainer8')[0]
.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function(){
    function MoresugestbuttonJoin(){
        var join = document.querySelectorAll('.Moresugestbutton button');
       join.forEach(function(view){
        view.addEventListener('click',function(){
            if(view.textContent === "Join group" || view.textContent === ""){
                view.textContent = "view";
            }else{
                view.textContent = "Join group";
            }
        });
       });
    }
    MoresugestbuttonJoin();
});
