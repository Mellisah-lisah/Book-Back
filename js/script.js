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

// $(document).ready(function(){
//   $("h2").click(function(){
//     $("#email").slideDown("slow");
//     $("#psw").slideDown("slow");
//     $("#psw-repeat").slideDown("slow");
//     $(".registerbtn").slideDown("slow");
//     $(".signin").slideDown("slow");
//   });
// });
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
// $(document).ready(function(){
//   $("h2").click(function(){
//     $(".col-25").show();
//     $(".col-75").show();
//     $(".row").show();
//   });
// });
