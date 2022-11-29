<?php
/**
 * Plugin Name: SupportHost block 03
 */

function supporthost_block_03_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'supporthost_block_03_register_block' );