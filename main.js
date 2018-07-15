/* global $ */

$("ul").on("click", "li",function(){
  $(this).toggleClass("task-completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var taskEntered = $(this).val();
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + taskEntered + "</li>");
    $(this).val("");
  }
});

$(".fa-check-circle").click(function(){
  $("input[type='text']").fadeToggle();
})
