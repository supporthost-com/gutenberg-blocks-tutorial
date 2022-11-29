<?php
/**
 * Plugin Name: SupportHost block 05
 */

function supporthost_block_05_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'supporthost_block_05_register_block' );