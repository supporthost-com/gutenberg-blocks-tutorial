<?php
/**
 * Plugin Name: SupportHost block 01
 */

function supporthost_block_01_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'supporthost_block_01_register_block' );