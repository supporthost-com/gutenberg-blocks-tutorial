<?php
/**
 * Plugin Name: SupportHost block 06
 */

function supporthost_block_06_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'supporthost_block_06_register_block' );