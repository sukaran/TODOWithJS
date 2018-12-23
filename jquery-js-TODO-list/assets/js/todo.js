//check off todos
$("ul").on("click","li",function()
{
    if($(this).css("color") === "rgb(128, 128, 128)")

   { $(this).css(
    {
        color:"black",
        textDecoration: "none"
    }
   );
}
//check back on
else{
    $(this).css(
{
    color:"gray",
    textDecoration: "line-through"
} );
}
});

//delete
$("ul").on("click","span",function(event)
{   $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
    if(event.which === 13)
    {
        //grabbing todo text
      var todoText=  $(this).val();
      $(this).val("");
        //create a new li
        $("ul").append("<li><span><i class ='fa fa-trash'></i></span> " +todoText+"</li>")
    }
});

$(".fa-plus").on("click",function()
{
    $("input[type='text'").fadeToggle();
    //$(this).remove().fadeOut();
});