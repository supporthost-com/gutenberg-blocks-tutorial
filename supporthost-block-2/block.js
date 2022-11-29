( function ( blocks, element, blockEditor ) {
    var el = element.createElement;

    blocks.registerBlockType( 'supporthost-blocks/supporthost-02', {
        edit: function ( props ) {
            var blockProps = blockEditor.useBlockProps();
            return el(
                'p',
                blockProps,
                'Hello World (from the editor, with css).'
            );
        },
        save: function () {
            var blockProps = blockEditor.useBlockProps.save();
            return el(
                'p',
                blockProps,
                'Hello World (from the frontend, with css).'
            );
        },
    } );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor );