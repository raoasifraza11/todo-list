/*
Theme Name: Todo list
Author: Asif Raza
Type: Javascript
Description: The theme for todo list.
Version: 1.0
*/

// grabbing the all li
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed-task');
});

// grabbing ul and update the span
$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });

    e.stopPropagation();
});

// grab the input filed
$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        $('ul').append('<li><span><i class="fas fa-trash"></i></span> '+ $(this).val() +'</li>')
        $(this).val('');
    }
});

$('h1').on('click', 'span', function(){
    $('input[type="text"]').toggle(500);
})