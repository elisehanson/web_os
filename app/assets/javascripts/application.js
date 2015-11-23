// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery-ui
$(document).ready(function(){
  var dateTime=new Date() 
  var dragSrcEl = null;


//drag icons on the bottom

  function handleDragStart(e) {
    this.style.opacity = '1'; 
      
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';  
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over'); 
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function handleDragEnd(e) {
    [].forEach.call(cols, function (col) {
    col.classList.remove('over');
    });
  }
    //call bottom icon drag functions
  var cols = document.querySelectorAll('.column, .box');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
  });

// move windows around 
/*
  function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
  } 
  function drag_over(event) { 
    event.preventDefault(); 
    return false; 
  } 
  function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('dragme');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false; 
  }  
  function email_drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('email');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false; 
  }

  var dm = document.getElementById('dragme'); 
  dm.addEventListener('dragstart',drag_start,false); 
  document.body.addEventListener('dragover',drag_over,false); 
  document.body.addEventListener('drop',drop,false)
*/

// move email  around
  $(function() {
    $("#word").draggable();
    $("#word").resizable();
    $("#word_show").draggable();
    $("#word_show").resizable();
    $("#email").draggable();
    $("#email").resizable();
    $("#setting").draggable();
    $("#setting").resizable();
    $("#map").draggable();   
    $("#map").resizable();
    $("#browser").draggable();
    $("#browser").resizable();
    $("#game").draggable();    
    $("#game").resizable();
    $("#photo").draggable();    
    $("#photo").resizable();
    $("#calculator").draggable();    
    $("#calculator").resizable();
  });
    


// get time
  var dateTime=new Date() 
  var day = new Date();
  var weekday = new Array(7);
  weekday[0]=  "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thur";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var today = weekday[day.getDay()];
  $("#day").text(today);

  setInterval(function(){
      if(dateTime.getHours().toString().length<2){
        $("#hour").text("0"+dateTime.getHours());
      }else{
        $("#hour").text(dateTime.getHours());
      }
        if (dateTime.getMinutes().toString().length<2){
        $("#minute").text("0"+dateTime.getMinutes());
      }else{
        $("#minute").text(dateTime.getMinutes());
      }
        if (dateTime.getSeconds().toString().length<2){
        $("#second").text("0"+dateTime.getSeconds());
      }else{                                                         
      $("#second").text(dateTime.getSeconds());                             
      } 
  },100); 


 //onclick to show up apps

  $("#close_word").click(function() {
    $("#word").fadeOut();
  });
  
  $("#close_word").click(function Clear(){    
    document.getElementById("word_title").value= "";    
    document.getElementById("word_content").value= "";  
  });

  $("#word_icon").click(function() {
    $("#word").css({"opacity":"1","z-index":"10"});
    $("#word").fadeIn();
  });

  $("#close_setting").click(function() {
    $("#setting").fadeOut();
  });

  $("#set_icon").click(function() {
    $("#setting").css({"opacity":"1","z-index":"10"});
    $("#setting").fadeIn();
  });
  
  $("#close_email").click(function() {
    $("#email").fadeOut();
  });
  

  $("#close_email").click(function Clear(){    
    document.getElementById("email_content").value= "";    
    document.getElementById("subject_content").value= "";  
    document.getElementById("body_content").value= "";  
  });



  $("#email_icon").click(function() {
    $("#email").css({"opacity":"1","z-index":"10"});
    $("#email").fadeIn();
  });
  
  $("#close_map").click(function() {
    $("#map").fadeOut();
  });

  $("#map_icon").click(function() {
    $("#map").css({"opacity":"1","z-index":"10"});
    $("#map").fadeIn();
  });

  $("#close_browser").click(function() {
    $("#browser").fadeOut();
  });

  $("#browser_icon").click(function() {
    $("#browser").css({"opacity":"1","z-index":"10"});
    $("#browser").fadeIn();
  });

  $("#close_game").click(function() {
    $("#game").fadeOut();
    $(".pic_o").css("opacity","0");
    $(".pic_x").css("opacity","0");
  });

  $("#game_icon").click(function() {
    $("#game").css({"opacity":"1","z-index":"10"});
    $("#game").fadeIn();

  });

  $("#close_photo").click(function() {
    $("#photo").fadeOut();
  });

  $("#photo_icon").click(function() {
    $("#photo").css({"opacity":"1","z-index":"10"});
    $("#photo").fadeIn();
  });

  $("#close_calculator").click(function() {
    $("#calculator").fadeOut();
  });

  $("#calculator_icon").click(function() {
    $("#calculator").css({"opacity":"1","z-index":"10"});
    $("#calculator").fadeIn();
  });


$( ".click_show_box" ).each(function() {
  $(this).on("click", function(){
    $("#word_show").css({"opacity":"1","z-index":"10"});
    $("#word_show").fadeIn();
  });
});

  $("#close_word_show").click(function() {
    $("#word_show").fadeOut();
  });



// tic tac toe game
  // var box=["#one","#two"]
  // var h1="x"
  // var h2="o"
  
  // function myFunction(){
  //   var turn= document.getElementById("mySelect").value;
  //   return turn;
  // }

  // $(".box1").click(function (){
  //   var xId= "#pic_x_"+this.id
  //   var oId= "#pic_o_"+this.id
    //var xElement = document.getElementById(pic_x_one)
    //var yElement = document.getElementById(this.id)
   // var xStyle = window.getComputedStyle(xElement)
   // var yStyle = window.getComputedStyle(yElement)
  //  var xOpacity = xStyle.getPropertyValue("opacity")
   // var yOpacity = xStyle.getPtopertyValue("opacity")
    //var xOpacity=document.getElementById("pic_x_one").opacity
  //   if (myFunction()==="x"){
  //     $(xId).css("opacity","1");
  //   }else{
  //     $(oId).css("opacity","1");
  //   }
  // });
  
  // $("#game_reset").click(function (){
  //   $(".pic_o").css("opacity","0");
  //   $(".pic_x").css("opacity","0");
  // });

// hangman game

window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Category: 90's Cartoons";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Category: Basketball Teams";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Category: Foods";
    }
  };

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["rugrats", "hey-arnold", "dexters-laboratory", "powerpuff-girls", "Doug"],
        ["lakers", "knicks", "bulls", "clippers"],
        ["pickles", "chicken-wings", "rice", "bananas",]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        ["A group of toddlers who seek daily adventures", "Move it Football head!", "Annoying little sister named Dee-Dee", "created from sugar, spice and everything nice", "Skeeter's Bestfriend"],
        ["Kobe's Land", "NY's Original Team", "Greatest Player Ever!", "Former Buffalo Braves Team"],
        ["Taja's favorite word! lol", "Buffalonian's Favorite", "White or Brown", "Yellow Fruit"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
};

});

