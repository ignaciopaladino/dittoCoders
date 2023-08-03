<?php
/**
 * Template for Blog Item Five.
 *
 * @package RadiantThemes
 */
    
// POST FORMAT STANDARD.
$output .= '<!-- blog-item -->';
$output .= '<article class="blog-item ' . $rt_animation . '" ' . $time . '>';
    $output .= '<div class="holder">';
        $output .= '<div class="pic">';
            $output .= '<img src="' . plugins_url( 'radiantthemes-addons/assets/images/Blank-Image-100x75.png' ) . '" alt="Blank Image" width="100" height="75">';
            $output .= '<a class="pic-main" href="' . get_the_permalink() . '" style="background-image:url(' . get_the_post_thumbnail_url( get_the_ID(), 'full' ) . ');"></a>';
        $output .= '</div>';
        $output .= '<div class="data">';
            $output .= '<h4 class="title"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h4>';
            $output .= '<ul class="meta-data">';
                $output .= '<li class="date">' . get_the_date() . '</li>';
            $output .= '</ul>';
            $output .= '<p>' . substr( get_the_excerpt() , 0, 120) . '...</p>';
        $output .= '</div>';
    $output .= '</div>';
$output .= '</article>';
$output .= '<!-- blog-item -->';
