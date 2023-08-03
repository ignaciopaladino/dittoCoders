<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'deportify_ggbdwp3' );

/** MySQL database username */
define( 'DB_USER', 'deportify_hhuswp' );

/** MySQL database password */
define( 'DB_PASSWORD', '#u+!4?%V~[u.' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ';McobnZx$pV}[QSEgXyZRVs{E3c0WM|~j&W!@6X?y|t7Yf4Usr/:,0ws[/Ai.Gr5');
define('SECURE_AUTH_KEY',  '?jJ!A]c-P}5ERa=YCC6K;/v xhXg i!EiLD,OY)vZYp{tMI6K7[< !Q-^Yptrgey');
define('LOGGED_IN_KEY',    '@1MSqDMf<yO[_WOa#2mw9 eyW~j-JAKs<gfJ{``$7CpbAXc53s95g,tbHLNA#9!$');
define('NONCE_KEY',        ':||z@|A&k>c+c-{|2[qoa[LiOyHGb|uLHp?IvfE>@FS2|f2|*nuS}yqZ v-Gn+B#');
define('AUTH_SALT',        ']:68]*;,IczNwl>0c-&-dN#d:u-N8rxD%~Pjf~/bnxQy0tc4Af`Oh<Xp>wpa*7{Q');
define('SECURE_AUTH_SALT', 'oHAMq26Y1J%yEd:VdvqzT++[Av(|xs#4$1.1+XgV`tF3D^Lo|@9:5-F(jN::H8e,');
define('LOGGED_IN_SALT',   'L)!:zx>Vrw:%_a0muQvV>uxO)|+nl4w<IFnqn`[kp-~ALwXTk736^$PU:Q5}=U;G');
define('NONCE_SALT',       '39?c-DBXrz/Z%RctBrcfqJ`(jPy+r|b^Q*c+Gx>5-QI03?H~bUYm@H-toIYl=#1O');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_dep_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('WP_MEMORY_LIMIT', '256M');
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
