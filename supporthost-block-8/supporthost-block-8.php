<?php
/**
 * Plugin Name: SupportHost block 08
 */

function supporthost_block_dynamic_render_callback( $block_attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => 3,
        'post_status' => 'publish',
    ) );

    if ( count( $recent_posts ) === 0 ) {
        return 'No posts yet';
    }

    $return = '<ul>';
    foreach ( $recent_posts as $post ) {
        $return .= sprintf(
            '<li><a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a></li>',
            esc_url( get_permalink( $post['ID'] ) ),
            esc_html( get_the_title( $post['ID'] ) )
        );
    }
    $return .= '</ul>';

    return $return;
}

function supporthost_block_08_register_block() {

    register_block_type( __DIR__ , array(
        'render_callback' => 'supporthost_block_dynamic_render_callback'
    ) );

}
add_action( 'init', 'supporthost_block_08_register_block' );
