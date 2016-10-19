$(document).ready(function(){
  $('#story').hide();
  $('#blanks form').submit(function(event){
    var person1Input = $("input#person1").val();
    var firstLetter = person1Input.charAt(0).toUpperCase();
    // alert (firstLetter);
    // var restName = person1Input.length
    var restName = person1Input.substring(1,person1Input.length);
    var fullName = firstLetter + restName.toLowerCase();
    // alert (restName);
    $('.person1').text(fullName);

    $('#story').show();
    event.preventDefault();
  });
});
