$(window).on('load', function(){
    $('#play-button').click(function(){
        localStorage.setItem('Name', $('#name').val());
        
        localStorage.setItem('Best', 0);
    });
});