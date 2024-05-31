<?php if ( have_posts() ) : ?>

<?php
	// Create IDS
	$ids = array();
	while ( have_posts() ) : the_post();
		array_push($ids, get_the_ID());
	endwhile; // end of the loop.
	$ids = implode(',', $ids);

	$readmore = __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'flatsome' );

?>

<?php echo do_shortcode('[blog_posts style="bounce" type="row" col_spacing="small" columns="2" show_date="false" excerpt="false" comments="false" image_hover="grayscale" depth="'.flatsome_option('blog_posts_depth').'" depth_hover="'.flatsome_option('blog_posts_depth_hover').'" ids="'.$ids.'"]'); ?>

<?php flatsome_posts_pagination(); ?>

<?php else : ?>

	<?php get_template_part( 'template-parts/posts/content','none'); ?>

<?php endif; ?>