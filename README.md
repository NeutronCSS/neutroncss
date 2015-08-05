# Neutroncss
A simple, semantic, Sass-based CSS framework.

##What is it?
Neutron is a CSS/SASS framework built from the beginning to be a clear, concise, and--primarily--flexible system for creating website layouts.

When building it we did away with redundant concepts and ideas that many frameworks still use, such as littering your HTML with classes, or manually declaring each column, or being restricted to a specific grid layout.

##How to use it.
Making Neutron simple to use and easy to grap was very important to us, let us show you an example of using Neutron.

Say we want to create an equal-width three column layout. Here is our HTML.

	<section>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
	</section>

And here is the Neutron code you would need to create the layout:

	section {
		columns(3);
	}

What if you don't want equal-widths, you want the middle column to be larger? That's easy too.

	section {
		columns((1,3,1));
	}
	
Neutron doesn't force you to declare your columns in a particular way. You can use bootstrap-style column declarations like `2,8,2` or ratios like `1,4,1`, or even simple to understand percentages like `20,60,20`.

##Powerful and flexible.

We didn't just want a simple framework. We wanted a flexible and powerful one too. Because of this we wanted to give you all the tools you need to create amazing layouts and designs.

###Responsively. Easily.
In a web where responsive sites are the norm, making your layout responsive easy is important.

Often you'll want to change the layout structure on different devices, Neutron lets you do this easily:

	section {
		columns(1);
		
		@media $from-tablet {
			columns(2);
		}
		
		@media $from-desktop {
			columns((1,4,1));
		}
	}

###No push. No pull. Just Order.
Changing widths of your layout isn't the only thing you'll need to do to make the perfect responsive design. Often you'll want to change the order of your elements as well. Until flexbox support becomes widespread, this usually involved adding messy classes to your HTML to 'push' or 'pull' elements left or right.

With Neutron we let you reorder your elements the way you think about it, not the way the framework implements it. Say we wanted to reverse the order of the below elements for tablets only:

	<section>
		<div>Column 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		<div>Column 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		<div>Column 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
	</section>
	
To do this you only need this single command:

	@media $is-tablet {
		order((3,2,1));
	}

###Real margins, real simple.
Almost every layout design calls for gutter spacing between columns, but most frameworks fake their margins or force you think about them in convoluted ways. In Neutron, if you want a margin, just say so.

	section {
		columns(
			$columns: 3,
			$margin: 10px 24px
		);
	}

We don't force you think of margins as ratios or other strange abstract concepts, we made margins work the same way they do for all the other CSS you've ever written.
