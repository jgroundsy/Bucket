var localStorage = window.localStorage;
var gender, orient, prefer, current;

function startSweeping(){
    if (localStorage.getItem('loggedIn') == "true"){
         gender = localStorage.getItem('gender');
         orient = localStorage.getItem('orient');
         prefer;

        if ((gender == "male" &&  orient == "straight") || (gender == "male" && orient == "lesbian") || (gender == "female" && orient == "lesbian")){
            prefer = "woman";
            $("#profile").load("./profile1.html");
            current = 1;
            
        }else if((gender == "male" && orient == "gay") || (gender == "female" && orient == "straight") || (gender == "female" && orient == "gay")){
            prefer = "man";
            $("#profile").load("./profile4.html");
            current = 1;
        }else if((gender == "male" && orient == "bisexual") || (gender == "female" && orient == "bisexual")){
            prefer = "both";
            $("#profile").load("./profile1.html");
            current = 1;
        }else{
            alert("An error occurred while selecting compatible profiles.");
        }

        alert("Use your finger/mouse to Sweep™ left or right on a person. Sweep™ right if you like them, and Sweep™ left if you don't like them. Your finger/mouse MUST swipe on their profile.")

    }else{
        alert("You cannot Sweep™ if you are not logged in!");
        window.location.href = "login.html";
    }
}

$(function() {      
    $("#profile").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == "right"){
            $("#sweepRightIcon").fadeIn(1000, function(){
                $("#sweepRightIcon").fadeOut(1000);
                loadNext();
            });

        }else if(direction == "left"){
            $("#sweepLeftIcon").fadeIn(1000, function(){
                $("#sweepLeftIcon").fadeOut(1000);
                loadNext();
            });

        }else{
            //do nothing
        }
      },

       threshold:0
    });
  });

  function loadNext(){
      if (prefer == "woman" && current == 1){
        $("#profile").load("./profile2.html");
        current++;
      }else if (prefer == "woman" && current == 2){
        $("#profile").load("./profile3.html");
        current++;
      }else if (prefer == "woman" && current == 3){
        alert("We ran out of people to match you with! Now redirecting to your profile.");
        window.location.href = "profile.html";
      }

      if(prefer == "man" && current == 1){
        $("#profile").load("./profile5.html");
        current++;
      }else if(prefer == "man" && current == 2){
        $("#profile").load("./profile6.html");
        current++;
      }else if(prefer == "man" && current == 3){
        alert("We ran out of people to match you with! Now redirecting to your profile.");
        window.location.href = "profile.html";
      }

      if (prefer == "both" && current == 1){
        $("#profile").load("./profile4.html");
        current++;
      }else if (prefer == "both" && current == 2){
        $("#profile").load("./profile2.html");
        current++;
      }else if (prefer == "both" && current == 3){
        $("#profile").load("./profile3.html");
        current++;
      }else if (prefer == "both" && current == 4){
        $("#profile").load("./profile5.html");
        current++;
      }else if (prefer == "both" && current == 5){
        $("#profile").load("./profile6.html");
        current++;
      }else if (prefer == "both" && current == 6){
        alert("We ran out of people to match you with! Now redirecting to your profile.");
        window.location.href = "profile.html";
      }
  }