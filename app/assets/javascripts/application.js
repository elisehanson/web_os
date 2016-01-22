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
  var box=["#one","#two"]
  var h1="x"
  var h2="o"
  
  function myFunction(){
    var turn= document.getElementById("mySelect").value;
    return turn;
  }

  $(".box1").click(function (){
    var xId= "#pic_x_"+this.id
    var oId= "#pic_o_"+this.id
    var xElement = document.getElementById(pic_x_one)
    var yElement = document.getElementById(this.id)
   var xStyle = window.getComputedStyle(xElement)
   var yStyle = window.getComputedStyle(yElement)
   var xOpacity = xStyle.getPropertyValue("opacity")
   var yOpacity = xStyle.getPtopertyValue("opacity")
    var xOpacity=document.getElementById("pic_x_one").opacity
    if (myFunction()==="x"){
      $(xId).css("opacity","1");
    }else{
      $(oId).css("opacity","1");
    }
  });
  
  $("#game_reset").click(function (){
    $(".pic_o").css("opacity","0");
    $(".pic_x").css("opacity","0");
  });


var lineWeight = 10;
function setup() {
  var drawing = createCanvas(windowWidth, windowHeight);
  drawing.parent('wrapper');
  background(255);
  strokeWeight(lineWeight);
}

function draw() {
  stroke(0);
  strokeWeight(lineWeight);
  strokeCap(ROUND);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

$('#ten-px').click(function(){
  lineWeight = 10;
  $(this).addClass('active');
  $('#two-px').removeClass('active');
});

$('#two-px').click(function(){
  lineWeight = 2;
  $(this).addClass('active');
  $('#ten-px').removeClass('active');
});


});




