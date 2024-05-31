<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'yensaoNT' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eM1rNdHRlAiSeyYUtDd9Q2QDKA0R5BYJq5nwaIGrmMRNvliFzXNWRo8SFfyJGq3Q' );
define( 'SECURE_AUTH_KEY',  'noWeW3W8OehEcsLcNmEBzidoslamVkMRmeiFFPw7QOXLbf20lqT3zs6kLZYBd8MZ' );
define( 'LOGGED_IN_KEY',    'GCF8knqGQ0FknreEX707kXH4Eq6dxBAp0gJSuz9wgbYjCv7pNYvkEKscf5G0ei6a' );
define( 'NONCE_KEY',        'A3W6xkXvbxWhxAF1fysMbhwBGIRxgeHwz1voa8fmDVeqCPM75uFrTjStwwkqj6mb' );
define( 'AUTH_SALT',        'viz99UjxzABOtWlY1pkPbtWZT0qrr4tnpdupfAyj22173TlUhQu23fZ74oAu5A2P' );
define( 'SECURE_AUTH_SALT', 'udRjxMn15W4xXKtbE6iCtpx6qRyvwiBG5pSs8WfvpQPWivEXmTBy1Tur5068dxtI' );
define( 'LOGGED_IN_SALT',   'HWzZJckWWTgrP5fLsB91Msgb8w9CMWo4CZH9LShyP0iLtt7R1Tgpm6NgOVWiayB2' );
define( 'NONCE_SALT',       'gN1riIybo5MTaOAddB5rI8sGEGj82PwpIUKtK9rWfouSeQb5Xf4vKgFYfsAaFv1d' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
