if (typeof CKEDITOR != 'undefined') {
    // don't remove empty <i> or <span> tags (icons)
    CKEDITOR.config.protectedSource.push(/<i[^>]*><\/i>/g);
    CKEDITOR.config.protectedSource.push(/<span[^>]*><\/span>/g);
}
