// Ivonne Garcia, Nina Keoborakot, Rija Aamir, Irandy Perez
// This is the jquery file that adds functionality to our Chicagoan quiz.


// jQuery for questions.html
$(function() {
    var count = 0;
    $(".video").hide();
    $(".imgResult").hide();
    
    $(".correctAns").click(function(){
         count++;
         console.log("Counter has been incremented!")
    });
  
    $("#checkButton").click(function () {
        $("#feedback").show();
        $("#checkButton").hide();
        $("#result").css({
            "background-color": "powderblue",
            "color": "black",
            "border-radius" : 5,
            "width" : 600,
            "text-align": "center",
            "font-family": "'Comic Sans MS', cursive, sans-serif",
            "font-size" : 20
        });
        
        if (count >= 3) {
            $("#result").show().html("You got " + count + " answers correct. <br/> You are a true Chicagoan!" + "<br/>" + "Click the squares below to reveal a celebratory image.<br/>");
            console.log("Hide video")
            $(".video").hide();
            $(".imgResult").show();
            $(".target").css("cursor", "pointer");
            
            $("#cover1").click(function(){
            console.log("Revealed one square");
            $("#cover1").html("<img src='images/result1.png'>");
            });

            $("#cover2").click(function(){
            console.log("Revealed one square");
            $("#cover2").html("<img src='images/result2.png'>");
            });

            $("#cover3").click(function(){
            console.log("Revealed one square");
            $("#cover3").html("<img src='images/result3.png'>");
            });

            $("#cover4").click(function(){
            console.log("Revealed one square");
            $("#cover4").html("<img src='images/result4.png'>");
            });
        }
      
        else {
            $("#result").show().html("You got " + count + " answers correct.<br/> You should probably watch this video..<br/>");
            console.log("Show video");
            $(".video").show();
        }
    });
    
});

