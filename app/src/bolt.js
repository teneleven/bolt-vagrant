/**
 * Instance of the Bolt module.
 *
 * @namespace Bolt
 *
 * @mixes Bolt.actions
 * @mixes Bolt.activity
 * @mixes Bolt.app
 * @mixes Bolt.ckeditor
 * @mixes Bolt.conf
 * @mixes Bolt.data
 * @mixes Bolt.datetime
 * @mixes Bolt.files
 * @mixes Bolt.stack
 * @mixes Bolt.secmenu
 * @mixes Bolt.video
 *
 * @mixes Bolt.fields
 * @mixes Bolt.fields.geolocation
 * @mixes Bolt.fields.slug
 */
var Bolt = {};

// don't remove empty <i> tags (icons)
CKEDITOR.dtd.$removeEmpty['i'] = false;

// widget for icon
CKEDITOR.plugins.add('bwcaret', {
    requires: ['widget'/*, 'richcombo'*/],
    icons: 'bwcaret',
    init: function (editor) {
        editor.widgets.add('bwcaret', {
            button: 'Create a caret',
            template: '<b class="caret"></b>',
            allowedContent: 'b(!caret)',
            requiredContent: 'b(!caret)',
            upcast: function (element) {
                return element.name == 'b' && element.hasClass('caret');
            }
        });
    }
});
