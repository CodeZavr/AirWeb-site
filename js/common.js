$(document).ready(function(){

	// SLICK SLIDER
	$('.slider').slick({
		slidesToShow: 1,
		dots: true
	});

	// SCROLL
	$(".down-button").click(function() {
		$("html, body").animate({ scrollTop: $(".main-header").height()+70 }, "slow");
		return false;
  });

  // CLASSIE
  function classReg( className ) {
  	return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
		hasClass = function( elem, c ) {
			return elem.classList.contains( c );
		};
		addClass = function( elem, c ) {
			elem.classList.add( c );
		};
		removeClass = function( elem, c ) {
			elem.classList.remove( c );
		};
	}
	else {
		hasClass = function( elem, c ) {
			return classReg( c ).test( elem.className );
		};
		addClass = function( elem, c ) {
			if ( !hasClass( elem, c ) ) {
				elem.className = elem.className + ' ' + c;
			}
		};
		removeClass = function( elem, c ) {
			elem.className = elem.className.replace( classReg( c ), ' ' );
		};
	}

	function toggleClass( elem, c ) {
		var fn = hasClass( elem, c ) ? removeClass : addClass;
		fn( elem, c );
	}

	var classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};

	// INPUT CHANGER
	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}


	// MOBILE BUTTON
	var toggles = $(".c-hamburger");
	var menus = $(".header-menu");

	var cross = $(".cross");

	cross.click(function(e){
		e.preventDefault();

		$(this).parent().slideToggle();
	});

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		var menu = i;
		toggleHandler(toggle, menu);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			$(".header-menu").eq( menu ).slideToggle();
		});
	}

});
