#NeutronCSS Reference

##Grid

###Container
#####Mixin Definition

	container( $columns:"", $max-width:$container-max-width, $align:"", $target:"" );

#####Mixin Specification

	container(
		$columns:	null|integer|list,
		$max-width:	[CSS width],
		$align:		left|right|center,
		$target:	[CSS selector]
	);
	
###Flush Padding
#####Mixin Definition

	flush-padding( $active:true	 );
	
#####Mixin Specification

	flush-padding(
		$active: true|false
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
		$order: list, 
		$columns:	null|integer|list
	);

