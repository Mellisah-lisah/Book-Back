$(document).ready(function(){
    $("#picture").click(function(){
      $(this).hide();
      $("#picture1").show();
    });
    $("#picture1").click(function(){
      $(this).hide();
      $("#picture").show();
    });

    $("#picture2").click(function(){
        $(this).hide();
        $("#picture3").show();
      });
      $("#picture3").click(function(){
        $(this).hide();
        $("#picture2").show();
      });

      $("#picture4").click(function(){
        $(this).hide();
        $("#picture5").show();
      });
      $("#picture5").click(function(){
        $(this).hide();
        $("#picture4").show();
      });  
  });