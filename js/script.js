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

  // form section
  function openSignIn(){
    document.getElementById("myForm").style.display="block";
  }
  function closeForm(){
    document.getElementById("myForm").style.display="none";
  }
  $(document).ready(function(){
    $(".reg").click(function(){
      $("#email").toggle("slow");
      $("#psw").toggle("slow");
      $("#psw-repeat").toggle("slow");
      $(".registerbtn").toggle("slow");
      $(".signin").toggle("slow");
    });
  });
  $(document).ready(function(){
    $("button").click( function(){
  $("#hide").show(2000);
  
    });
  });
  
  function myFunction(){
    alert("Thank you for your donations");
  }
  $(document).ready(function(){
    $("h2").click(function(){
      $(".col-25").toggle();
      $(".col-75").toggle();
      $(".row").toggle();
    });
  });
  // form section