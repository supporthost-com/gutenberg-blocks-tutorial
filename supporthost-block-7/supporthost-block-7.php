<?php
/**
 * Plugin Name: SupportHost block 07
 */

function supporthost_block_07_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'supporthost_block_07_register_block' );