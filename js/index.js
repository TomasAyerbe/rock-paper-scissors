$(window).on('load', function(){
    $('input[type="submit"]').click(function(){
        localStorage.setItem('Name', $('#name').val());
        localStorage.setItem('Best', 0);
    });
});