<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package appon
 */

?>

		</div>
		<!-- #content -->
	</div>
	<!-- #page -->

<?php
if ( ! class_exists( 'ReduxFrameworkPlugin' ) || ( is_404() ) || ( is_search() ) ) {
	include get_parent_theme_file_path( 'inc/footer/footer-style-default.php' );
} else {
	$footerBuilder_id      = esc_html( get_post_meta( $post->ID, 'custom_footer', true ) );
	$custom_footer_post_id = $footerBuilder_id;
	if ( $footerBuilder_id && ( is_numeric( $footerBuilder_id ) ) ) {
		$footerBuilder_id = esc_html( get_post_meta( $post->ID, 'custom_footer', true ) );
		$getFooterPost    = get_post( $footerBuilder_id );
		echo '<!-- wraper_footer -->';
		echo "<footer class='wraper_footer custom-footer'>";
		echo "<div class='container'>";
		$content = $getFooterPost->post_content;
		echo do_shortcode( $content );
		echo '</div>';
		echo '</footer>';
		echo '<!-- wraper_footer -->';
	} else {
		include get_parent_theme_file_path( 'inc/footer/footer-style-default.php' );
	}
}
?>

</div>

<!-- radiantthemes-website-layout -->
<div class="modalForm modalFormEntrenador">
	<div class="modalConte">
		<div class="closeModal"><i class="fa fa-times" aria-hidden="true"></i></div>		
		<?php echo do_shortcode(' [contact-form-7 id="3503" title="Registro Entrenador"] '); ?>
	</div>
</div>
<div class="modalForm modalFormClub">
	<div class="modalConte">
		<div class="closeModal"><i class="fa fa-times" aria-hidden="true"></i></div>
		<?php echo do_shortcode(' [contact-form-7 id="3507" title="Registro Club"] '); ?>
	</div>
</div>
<div class="modalForm modalFormProximamente">
	<div class="modalConte">
		<div class="closeModal"><i class="fa fa-times" aria-hidden="true"></i></div>
		<div class="titleFormOpen titleFormEntre">PROXIMAMENTE</div>
		<p class="textProximamente"><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit. Morbi semper ligula sed orci placerat, at ultricies felis lobortis. Donec sagittis metus risus, vel consequat erat dapibus sit amet. Integer nec eros id neque semper fringilla in et dolor. Donec gravida suscipit tortor, sed porta nisi placerat non. Integer blandit odio vel metus suscipit iaculis. Curabitur finibus libero ac odio ultricies, eu consectetur dui posuere. Duis facilisis dapibus urna.</p>
	</div>
</div>
<?php wp_footer(); ?>

</body>
</html>
