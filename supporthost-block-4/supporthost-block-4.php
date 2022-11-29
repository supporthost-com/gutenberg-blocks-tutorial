<?php
/**
 * Plugin Name: SupportHost block 04
 */

function supporthost_block_04_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'supporthost_block_04_register_block' );