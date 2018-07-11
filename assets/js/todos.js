console.log("connected");
var newTodo = "";

/**
 * Actions relating to removing or checkin todos
 * 
 * Both those listeners are called on 'ul' because
 *          1- As more elements will be created, listeners have to be called on something that exists
 *              when page is created --> ul
 *          2- Then the second parameter passed in on() function is used to specify on which element
 *              within the 'ul' the listener is actually assign to
 */
$("ul").on("click", "li" , function(){
    $(this).toggleClass("strikeIt");
});

$("ul").on("click", "span" , function(e){

    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    //to stop event bubbling 
    e.stopPropagation();
});

/**
 * Actions when adding todos
 */
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //store input string
        newTodo = $("input[type='text']").val();
        $(this).val("");

        //add new li to ul and fill it with newTodo string
        $("ul").append("<li><span class=\"deleteBtn\"><i class=\"fas fa-trash-alt\"></i></span> "+ newTodo + "</li>");
    }
});

/**
 * Stuff with the input text box
 */

 $(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
 });