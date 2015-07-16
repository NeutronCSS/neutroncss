#NeutronCSS Reference

##Grid

###Container
#####Mixin Definition

	columns( $columns:"", $container-width:$container-max-width, $container-align:"", $padding:	$padding:$global-column-padding, $margin:"", $target:"" );

#####Mixin Specification

	columns(
		$columns:			integer|list,
		$container-width:	[CSS width], 
		$container-align:	left|right|center,
		$padding:			[CSS width],
		$flush-padding:		false|true,
		$margin:			[CSS width],
		$flush-margin:		true|false,
		$target:			[CSS selector]
	);
	
###Container Align
#####Mixin Definition

	container-align( $align:"" );
	
#####Mixin Specification

	container-align(
		$align: left|right|center
	);

	
###Order
#####Mixin Definition

	order( $order, $columns:"" );
	
#####Mixin Specification

	order(
		$order: 	list, 
		$columns:	null|integer|list
	);


##Utilities

###Hide
#####Mixin Definition

	hide( $media-query:"" );
	
#####Mixin Specification

	hide(
		$media-query: null|[CSS media rule]
	);


###Show
#####Mixin Definition

	show( $media-query:"", $display-as:"block" );
	
#####Mixin Specification

	show(
		$media-query: 	[CSS media rule],
		$display-as: 	[CSS display property]
	);

