// hide loader in live edit mode
jQuery(function ($) {

    // Remove Loader

    $('.loader').css('opacity', 0);
    setTimeout(function(){$('.loader').hide();}, 600);


});

if (typeof CKEDITOR != 'undefined') {
    // don't remove empty <i> and <span> tags (icons)
    CKEDITOR.config.protectedSource.push(/<i[^>]*><\/i>/g);
    CKEDITOR.config.protectedSource.push(/<span[^>]*><\/span>/g);
}
