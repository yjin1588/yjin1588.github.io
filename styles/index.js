var hide_lists = function(cb) {
    $('#posts').fadeOut(300);
    $('#projects').fadeOut(300);
    $('#publications').fadeOut(300);
    $('#posts-btn').removeClass('disabled');
    //$('#projects-btn').removeClass('disabled');
    $('#publications-btn').removeClass('disabled');
    $('#drawings-btn').removeClass('disabled');
};
// var show_projects = function() {
//     $('#posts-btn').removeClass('disabled');
//     $('#publications-btn').removeClass('disabled');
//     $('#publications').fadeOut(300);
//     $('#posts').fadeOut(300, function() {
//         $('#projects').fadeIn(300)
//     });
//     $('#projects-btn').addClass('disabled')
// };
var show_posts = function() {
    $('#drawings-btn').removeClass('disabled');
    $('#publications-btn').removeClass('disabled');
    $('#publications').fadeOut(300);
    $('#drawings').fadeOut(function() {
        $('#posts').fadeIn(300)
    });
    $('#posts-btn').addClass('disabled')
};
var show_publications = function() {
    $('#drawings-btn').removeClass('disabled');
    $('#posts-btn').removeClass('disabled');
    $('#posts').fadeOut(300);
    $('#drawings').fadeOut(function() {
        $('#publications').fadeIn(300)
    });
    $('#publications-btn').addClass('disabled')
};
var show_drawings = function() {
    $('#publications-btn').removeClass('disabled');
    $('#posts-btn').removeClass('disabled');
    $('#posts').fadeOut(300);
    $('#publications').fadeOut(function() {
        $('#drawings').fadeIn(300)
    });
    $('#drawings-btn').addClass('disabled')
};
