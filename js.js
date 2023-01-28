$(document).ready(function()
{


  var timeout; 
  var thisid;

  $(".book_listview").on("mouseenter", function() {

    thisid = $(this).attr("id");
    clearTimeout(timeout);


    if( ! $(this).hasClass("force_closed") )
    {
      timeout = setTimeout(function() {

        $( "#" + thisid ).addClass("hover_active");
      }, 500);
    }



  });


  $(document).on("click", ".hover_active, .force_closed", function()
  {
    $(this).removeClass("hover_active");
    $(this).toggleClass("force_closed");

    clearTimeout(timeout);
  });



});