( function ( blocks, element, blockEditor ) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
    var useBlockProps = blockEditor.useBlockProps;
    var BlockControls = blockEditor.BlockControls;
    var AlignmentToolbar = blockEditor.AlignmentToolbar;

    blocks.registerBlockType( 'supporthost-blocks/supporthost-06', {

        attributes: {
            name: {
                type: 'string',
                source: 'html',
                selector: '.supporthost-testimonial-name',
            },
            position: {
                type: 'string',
                source: 'html',
                selector: '.supporthost-testimonial-position',
            },
            content: {
                type: 'string',
                source: 'html',
                selector: '.supporthost-testimonial-content',
            },
            alignment: {
                type: 'string',
                default: 'center',
            },
        },
        example: {
            attributes: {
                name: 'Ivan',
                position: 'SupportHost',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper feugiat. Proin tempus sem nec sapien pulvinar tristique vitae ac odio. Ut laoreet ligula id auctor hendrerit. Aliquam rutrum eu enim quis sollicitudin. Donec ut bibendum nisl. Etiam tempor, dolor id interdum vehicula, metus tortor vestibulum lorem, nec volutpat eros odio id orci. Donec vitae suscipit orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut malesuada luctus lectus, at ullamcorper dolor tempor in. Sed sed ex ullamcorper, convallis elit et, interdum elit. Etiam massa magna, cursus eget lorem vel, varius malesuada nibh. Donec non enim interdum, pellentesque enim efficitur, scelerisque turpis. Fusce lacus nulla, consectetur sed orci quis, luctus interdum nisi.',
                alignment: 'center'
            },
        },
        
        edit: function ( props ) {
            var blockProps = useBlockProps();
            var name = props.attributes.name;
            var position = props.attributes.position;
            var content = props.attributes.content;
            var alignment = props.attributes.alignment;

            function onChangeName( newName ) {
                props.setAttributes( { name: newName } );
            }
            function onChangePosition( newPosition ) {
                props.setAttributes( { position: newPosition } );
            }
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }

            function onChangeAlignment( newAlignment ) {
                props.setAttributes( {
                    alignment:
                        newAlignment === undefined ? 'center' : newAlignment,
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
                    onChange: onChangeName,
                    value: name,
                    placeholder: 'Insert name here...'
                } ),
                el( RichText, {
                    key: 'richtext',
                    tagName: 'p',
                    style: { textAlign: alignment },
                    onChange: onChangePosition,
                    value: position,
                    placeholder: 'Insert position here...'
                } ),
                el( RichText, {
                    key: 'richtext',
                    tagName: 'p',
                    style: { textAlign: alignment },
                    onChange: onChangeContent,
                    value: content,
                    placeholder: 'Insert review here...'
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
                        'supporthost-testimonial-name supporthost-block-align-' +
                        props.attributes.alignment,
                    value: props.attributes.name,
                } ),
                el( RichText.Content, {
                    tagName: 'p',
                    className:
                        'supporthost-testimonial-position supporthost-block-align-' +
                        props.attributes.alignment,
                    value: props.attributes.position,
                } ),
                el( RichText.Content, {
                    tagName: 'p',
                    className:
                        'supporthost-testimonial-content supporthost-block-align-' +
                        props.attributes.alignment,
                    value: props.attributes.content,
                } )
            );
        },

    } );
} )( 
    window.wp.blocks,
	window.wp.element,
	window.wp.blockEditor
 );