<?php
/**
 * Plugin Name: SupportHost block 02
 */

function supporthost_block_02_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'supporthost_block_02_register_block' );