( function ( blocks, blockEditor, element ) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
    var useBlockProps = blockEditor.useBlockProps;
    var BlockControls = blockEditor.BlockControls;
    var AlignmentToolbar = blockEditor.AlignmentToolbar;

    blocks.registerBlockType( 'supporthost-blocks/supporthost-05', {

        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'p',
            },
            alignment: {
                type: 'string',
                default: 'left',
            },
        },
        example: {
            attributes: {
                content: 'Hello World',
                alignment: 'center'
            },
        },
        edit: function ( props ) {
            var blockProps = useBlockProps();
            var content = props.attributes.content;
            var alignment = props.attributes.alignment;

            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }

            function onChangeAlignment( newAlignment ) {
                props.setAttributes( {
                    alignment:
                        newAlignment === undefined ? 'left' : newAlignment,
                } );
            }

            return el(
                'div',
                blockProps,
                el(
                    BlockControls,
                    { key: 'controls' },
                    el( AlignmentToolbar, {
                        value: alignment,
                        onChange: onChangeAlignment,
                    } )
                ),
                el( RichText, {
                    key: 'richtext',
                    tagName: 'p',
                    style: { textAlign: alignment },
                    onChange: onChangeContent,
                    value: content,
                } )
            );
        },

        save: function ( props ) {
            var blockProps = useBlockProps.save();

            return el(
                'div',
                blockProps,
                el( RichText.Content, {
                    tagName: 'p',
                    className:
                        'supporthost-block-align-' +
                        props.attributes.alignment,
                    value: props.attributes.content,
                } )
            );
        },

    } );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element );