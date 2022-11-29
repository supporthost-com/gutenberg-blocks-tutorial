( function ( blocks, blockEditor, element ) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
    var useBlockProps = blockEditor.useBlockProps;

    blocks.registerBlockType( 'supporthost-blocks/supporthost-04', {

        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'p',
            },
        },
        example: {
            attributes: {
                content: 'Hello World',
            },
        },
        edit: function ( props ) {
            var blockProps = useBlockProps();
            var content = props.attributes.content;
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }

            return el(
                RichText,
                Object.assign( blockProps, {
                    tagName: 'p',
                    onChange: onChangeContent,
                    value: content,
                    placeholder: 'Insert text here...',
                } )
            );
        },

        save: function ( props ) {
            var blockProps = useBlockProps.save();
            return el(
                RichText.Content,
                Object.assign( blockProps, {
                    tagName: 'p',
                    value: props.attributes.content,
                } )
            );
        },
    } );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element );