<?php

//Editor cu
add_filter( 'use_block_editor_for_post', '__return_false' );




/*Disable edit code & plugin */




add_filter('xmlrpc_enabled', '__return_false');
add_filter('wp_headers', 'wptangtoc_remove_x_pingback');
add_filter('pings_open', '__return_false', 9999);
add_filter('pre_update_option_enable_xmlrpc', '__return_false');
add_filter('pre_option_enable_xmlrpc', '__return_zero');
function wptangtoc_remove_x_pingback($headers) {
unset($headers['X-Pingback'], $headers['x-pingback']);
return $headers;
}



function wp_version_remove_version() 
{
return '';
}
add_filter('the_generator', 'wp_version_remove_version');





