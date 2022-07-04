



function mOver(obj) {
    obj.innerHTML = "Thank you";
}

 function mOut(obj) {
    obj.innerHTML = "mouse over me";
 }




 function mDown(web){
     web.innerHTML="Release me";
     web.style.backgroundColor="blue";
 }

 
 function mUp(web){
    web.innerHTML="Thank you";
    web.style.backgroundColor="red";
}


 




    function yourFunction(){
        var t = document.forms["air2"];
        var u = t.length;
        var text = "";
        var i;
        for(i = 0; i < u; i++){
            text += t[i].value + "<br>";
        }
        document.getElementById("demo9").innerHTML= text;
       
    }


var colors = ["green", "red", "yellow", "blue", "purple", "gray"];

var l = document.getElementById("color");
l.addEventListener("click", Random);

function Random(){
    var randomNumber = colors[getRandomNumber()];
 document.body.style.backgroundColor = randomNumber; 
}


function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}






 var col = document.getElementById("tolu");

 col.addEventListener("click", function (){
    var txt1 = document.getElementById("jer").value;
    var air1 = document.getElementById("je").value;
     alert(txt1*air1);

 });


 function myWeb(val){
 document.getElementById("display").value = document.getElementById("display").value + val;

 }

function val(){
    let f = document.getElementById("display").value;
    let k = eval(f);
    document.getElementById("display").value=k;
}

 let count = 0;
 let btn = document.querySelectorAll(".btn");
 let gt = document.getElementById("value");
 btn.forEach(function (btn){
     btn.addEventListener("click", function(){
      if(btn.classList.contains("decrease")){
          count--;
      }else if(btn.classList.contains("increase")){
          count++;
      }else {
         count = 0;
      }
         gt.textContent = count;
      
     });

 });

 var reviews = [{id:1, img:"images/kodecamp.png", name:"susan smith", job:"web developer", txt:"Hey there, i'm susan smith",},
 {id:2, name:"tolu", img:"images/car.jpeg", job:"web desgner", txt:" hey there, im tolu",},
 {id:3, name:"susan ",img:"images/img34.jpeg", job:"ui/ux designer", txt:"Hey there, im susan",},
 {id:4, name:"smith", img:"images/img33.jpeg", job:"developer", txt:"Hey there, smith",},
];

var gi = document.getElementById("person");
var job = document.getElementById("job");
var inf = document.getElementById("inf");
var author =  document.getElementById("author");

var albtn = document.querySelector(".prev-btn1");
var allbt = document.querySelector(".prev-btn2");
var allb = document.querySelector(".prev-btn3");

let ag = 0;

function tolName(){
    const yu = reviews[ag];
    author.textContent = yu.name;
    job.textContent = yu.job;
    inf.textContent = yu.txt;
    gi.src = yu.img;
}

albtn.addEventListener("click", function(){
    ag++;
    if(ag > reviews.length -1){
        ag = 0;
    }

    tolName();
});
   

allbt.addEventListener("click", function(){
    ag--;
    if(ag < 0){
        ag = reviews.length-1;
    }  
    tolName(); 

});

allb.addEventListener("click", function(){
    ag = Math.floor(Math.random()*reviews.length);
    tolName();
});
   /* var k = reviews[toluName()];
    if(allb.classList.contains("prev-btn3")){
        author.textContent = k.name;
        job.textContent = k.job;
        inf.textContent = k.txt;
        gi.src = k.img;
    }
});

function toluName(){
return Math.floor(Math.random()*reviews.length);
}*/





/*
var allbtn = document.querySelectorAll(".prev");
allbtn.forEach( function(allbtn){
    allbtn.addEventListener("click", function(){

        var k = reviews[toluName()];
        if(allbtn.classList.contains("btn3")){
            author.textContent = k.name;
            job.textContent = k.job;
            inf.textContent = k.txt;
            gi.src = k.img;
        }
        
       
    });
    
});

function toluName(){
    return Math.floor(Math.random()*reviews.length);
}*/
 



        
/*
var btnbars = document.querySelector(".btnbars");
var link = document.querySelector(".showlinks");
btnbars.addEventListener("click", function(){
    if(link.classList.contains("showlinks")){
        link.classList.remove("showlinks");
    }else{
        link.classList.add("showlinks");
    }
}); */

/*
 function navName(){
    var x = document.getElementsById("items1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/


  const barsbtn = document.querySelector(".bars9");
  const items   = document.querySelector(".items");
  barsbtn.addEventListener("click", function(){
      barsbtn.classList.toggle("active");
      items.classList.toggle("active");
  });



  var im = [{img:"images/img30.jpeg"}, {img:"images/img33.jpeg"},{img:"images/img34.jpeg"},];

  var q = document.querySelector(".btbars1");
  var  v = document.querySelector(".btbars2");
  var i = document.querySelector(".img");
 
  let currentItem = 0;
 


         function showPerson(){
            var item = im[currentItem];
            i.src = item.img;
           
         }
    
         q.addEventListener("click", function(){
             currentItem++;
             if(currentItem > im.length - 1){
                 currentItem = 0;
             }
             showPerson();
         });


         var fg = document.querySelector(".butt");
         var bg = document.querySelector(".modalcontainer");
         var nh = document.querySelector(".tu");
         
        function openNav(){
            document.querySelector(".modalcontainer").style.display ="block";

         }

         function closeNav(){
            document.querySelector(".modalcontainer").style.display ="none";
         }
         /*
         fg.addEventListener("click", function(){
             bg.style.display = "block";

         });

         fg.onclick = function(){
            bg.style.display = "block";
         }
         nh.onclick = function(){
             bg.style.display = "none";
         }*/ 


         var vb = document.querySelectorAll(".question-btn");
         var p = document.querySelector(".question");
         var n = document.querySelector(".question-text");
        
        // var df = document.querySelector(".question-text");
        vb.forEach( function(vb){
         vb.addEventListener("click", function(vb){

           /* const j = n.getBoundingClientRect().height;
             const ol = p.getBoundingClientRect().height;
          
             if(j === 0){
                 n.style.height= `${ol}px`;
             } else {
                 n.style.height = 0;
             }*/


            
           // if(vb.classList.contains("question-btn")){
               // df.classList.toggle("show-text");
            // }
            
             const question = vb.currentTarget.parentElement.parentElement;
             question.classList.toggle("show-text");
             //df.classList.toggle("show-text");
         });

        });







        var gh =  document.querySelector(".question-btn");
        var df = document.querySelector(".vc");
        gh.addEventListener("click", function(){
            df.classList.toggle("show-text");
        });





        const menu = [
            {
              id: 1,
              title: "buttermilk pancakes",
              category: "breakfast",
              price: 15.99,
              img: "images/item-1.jpeg",
              desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
            },
            {
              id: 2,
              title: "diner double",
              category: "lunch",
              price: 13.99,
              img: "images/item-2.jpeg",
              desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
            },
            {
              id: 3,
              title: "godzilla milkshake",
              category: "shakes",
              price: 6.99,
              img: "images/item-3.jpeg",
              desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
            },
            {
              id: 4,
              title: "country delight",
              category: "breakfast",
              price: 20.99,
              img: "images/item-4.jpeg",
              desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
            },
            {
              id: 5,
              title: "egg attack",
              category: "lunch",
              price: 22.99,
              img: "images/item-5.jpeg",
              desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
            },
            {
              id: 6,
              title: "oreo dream",
              category: "shakes",
              price: 18.99,
              img: "images/item-6.jpeg",
              desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
            },
            {
              id: 7,
              title: "bacon overflow",
              category: "breakfast",
              price: 8.99,
              img: "images/item-7.jpeg",
              desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
            },
            {
              id: 8,
              title: "american classic",
              category: "lunch",
              price: 12.99,
              img: "images/item-8.jpeg",
              desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
            },
            {
              id: 9,
              title: "quarantine buddy",
              category: "shakes",
              price: 16.99,
              img: "images/item-9.jpeg",
              desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
            },

            {
            id: 10,
            title: "bison steak",
            category: "dinner",
            price: 22.99,
            img: "images/item-10.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
          },

          ];

          const sectionCenter = document.querySelector(".section-center");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
   
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){

        return  `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo"/>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;

    });

    displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}



        
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter( function (menuItem){
            if(menuItem.category === category){
                return menuItem;
            }

        });

        if(category === "all"){
            displayMenuItems(menu);

        } else {
            displayMenuItems(menuCategory);
        }
    });
});



var kl = document.querySelector(".switch-btn");
var hu = document.querySelector(".switch");
var video = document.querySelector(".video-container");

kl.addEventListener("click", function(){
    if(!hu.classList.contains("switch1")){
        hu.classList.add("switch1");
        video.play();

    } else {
        hu.classList.remove("switch1");
        video.pause();  
      }
    

});



const bt = [{title:"history", text:"tilde try-hard, woke fixie banjo man bun. Small batch tumeric"},
{title:"vision", text:"I'm baby wolf pickled schlitz try-hard normcore marfa man bun"},
 {title:"goals", text:"rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard "},];


 var op = document.querySelectorAll(".tab-btn");
 var tg = document.querySelector(".about");
 var df = document.querySelector(".content");


function myMen(jh){
 let g = jh.map(function (men){
     return ` <h4>${men.title}</h4>
     <p>
      ${men.text}
     </p>`
 }).join("");

 df.innerHTML = g;

}


 op.forEach( function (op){
     op.addEventListener("click", function(e){
         const c = e.target.dataset.id;
         const r = bt.filter( function(menu){
            if(menu.title === c){
                return menu;
            }   
            
         });

         if(c === "al"){
            myMen(bt);
        }else {
            myMen(r);
        }
        

     });

 });






 const text = [
    `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
    `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
    `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
    `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
  I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
    `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
    `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
    `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
    `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
  ];
 
const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");


form.addEventListener("submit", function(e){
e.preventDefault();

const value = parseInt(amount.value);

const random = Math.floor(Math.random()*text.length);

if(isNaN(value) || value <= 0 || value > 9 ){
    result.innerHTML = `<p>${text[random]}</p>`; 

}else{
    let tempText = text.slice(0, value);
    tempText = tempText.map(function (item){
        return `<p class="result">${item}</p>`;
    }).join("");
    result.innerHTML = tempText;
}
});





window.addEventListener("load", function(){
    
var form = document.querySelector(".form-container");
var input = document.querySelector(".inpu");
var add = document.querySelector(".add");
var spa  = document.querySelector(".all-container");


    form.addEventListener("submit", function(e){
        e.preventDefault();

     const task = input.value;

if(!task){
    alert("enter value");
    return;
}


const task_el = document.createElement("div");
task_el.classList.add("spa-container");


const task_element = document.createElement("div");
task_element.classList.add("spa-text");

task_el.appendChild(task_element);

const task_el_input = document.createElement("input");
task_el_input.classList.add("text");
task_el_input.type = "text";
task_el_input.value = task;
task_el_input.setAttribute("readonly", "readonly");
task_element.appendChild(task_el_input);

const task_action = document.createElement("div");
task_action.classList.add("action");
task_el.appendChild(task_action);

const task_edit = document.createElement("button");
task_edit.classList.add("edit");
task_edit.innerHTML = "edit";

const task_delete = document.createElement("button");
task_delete.classList.add("delete");
task_delete.innerHTML = "delete";


task_action.appendChild(task_edit);

task_action.appendChild(task_delete);

spa.appendChild(task_el);








task_delete.addEventListener("click", function(){
    spa.removeChild(task_el);

    
});

task_edit.addEventListener("click", function(){
    if(task_edit.innerText === "edit"){
        task_el_input.removeAttribute("readonly");
        task_el_input.focus();
        task_edit.innerHTML = "save";  

        }else{
            task_el_input.setAttribute("readonly", "readonly");
            task_edit.innerHTML = "edit";
        }

});


    


    });



});

/*
add.addEventListener("click", function(){
   var paragraph = document.createElement("P")
   paragraph.textContent = inpu.value;
   spa.appendChild(paragraph);
   inpu.value = "";
   paragraph.addEventListener("dblclick", function(){
       spa.removeChild(paragraph);
      

   });
   paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration = "line-through";

});
  

});*/

var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");
var pink = document.querySelector(".pink");


var on = document.querySelector(".on");
var off = document.querySelector(".off");

on.addEventListener("click", function(){
    green.style.backgroundColor =  colors[getRandomNumber()];
    red.style.backgroundColor =  colors[getRandomNumber()];

    blue.style.backgroundColor =  colors[getRandomNumber()];

    yellow.style.backgroundColor =  colors[getRandomNumber()];

    gray.style.backgroundColor =  colors[getRandomNumber()];

    pink.style.backgroundColor =  colors[getRandomNumber()];


});

off.addEventListener("click", function(){
        green.style.backgroundColor = "white";
        red.style.backgroundColor = "white";
        blue.style.backgroundColor = "white";
        yellow.style.backgroundColor = "white";
        gray.style.backgroundColor = "white";
        pink.style.backgroundColor = "white";
    
    });
    

    var quizData = [{
                                       
                        question:"which langauge runs in a web browser?",
                    a:"java",
                    b:"c",
                    c:"python",
                    d:"javascript",
                    correct:"d",
                },
                
                     {
                         question:"where are you from?",
                      a:"lagos",
                      b:"jibola",
                      c:"tobi",
                      d:"javascript",
                      correct:"a",
                    },

                    {
                        question:"what is the name of your teacher?",
                    a:"icey",
                    b:"andrew",
                    c:"tobi",
                    d:"javascript",
                    correct:"a",
                },
                
                    {
                        question:"what year was javascript launched?",
                    a:"1991",
                    b:"1995",
                    c:"1987",
                    d:"none of the above",
                    correct:"d",
                },
                ];




            var quiz = document.getElementById("quiz");
            var answerEls = document.querySelectorAll(".answer");
            var  questionEl = document.querySelector(".questions");
            var a_text =  document.getElementById("a-text");
            var b_text =  document.getElementById("b-text");
            var c_text =  document.getElementById("c-text");
            var d_text =  document.getElementById("d-text");
            var submitbtn9 = document.getElementById("submits");

            let currentquiz = 0;
            let scores = 0;

       function getTame(){
           var tog = quizData[currentquiz];
           questionEl.textContent = tog.question;
           a_text.textContent = tog.a;
           b_text.textContent = tog.b;
           c_text.textContent = tog.c;
           d_text.textContent = tog.d;
       }






       function deselectAnswers() {
           answerEls.forEach(function(answerEl){
               answerEl.checked = false;
           });
       }


       function getSelected(){
           let answer;
           answerEls.forEach(function(answerEl){
               if(answerEl.checked){
               answer = answerEl.id;
               }
           })
           
           return answer;
       }

       submitbtn9.addEventListener("click", function(){
           const answer = getSelected();
           deselectAnswers();
           
           if (answer === quizData[currentquiz].correct){
               scores++;

               
           }
           currentquiz++;

           if(currentquiz > quizData.length-1){
        

            quiz.innerHTML = `<h2> you have answerd ${scores}/${quizData.length} questions correctly<h2>
            <button id="submits" onclick="location.reload()">Reload</button>
            `
            quiz.classList.add("tega");

           }else {
               getTame();
           }   

       });



       

       function myTok(){

        var t, u, a, dor, i;

         dor = document.querySelector(".wagon");
         t = dor.value.toUpperCase();
         u = document.querySelector(".nik");
         a = u.getElementsByTagName("a");

         for(i= 0; i < a.length; i++){
             txtValue = a[i].textContent || a[i].innerText;

             if(txtValue.toUpperCase().indexOf(t) > -1) {
                a[i].style.display = "";
             } else {
                a[i].style.display = "none";
             }
         }


       }

