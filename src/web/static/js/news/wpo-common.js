WPO.Common = (function($, window, document, WPO, Marionette, Backbone) {
    let _body;
    let _nav;
    let _ddParents;
    let _init = function() {
        _body = $('body');
        _nav = $('.site-header nav .menu-main-menu-container');
        let mainNavItems = $('> ul > li.menu-item-has-children', _nav);
        let mainNavItemsAs = $('> ul > li.menu-item-has-children > a', _nav);

        mainNavItemsAs.on('click', function(e) {
            e.preventDefault();
            mainNavItems.not($(this).parent()).removeClass('open');
            $(this).parent().toggleClass('open');
        });
        document.body.addEventListener('click', function (event) {
            if (!_nav[0].contains(event.target)) {
                mainNavItems.removeClass('open');
            }
        });

        //hide empty elements in list columns on mobile
        $('h1,h2,h3,h4,h5,h6,p', '.list-container').each(function(){
            let rgba = $(this).css("color").replace('rgb(', '').replace('rgba(', '').replace(')', '').replace(' ', '').split(',').map(e => e.trim());
            console.log(rgba);
            if (rgba.length == 4 && rgba[3].trim() === "0") {
                $(this).addClass('hidden lg:block');
            }
        })
        $('.search-toggle').on('click', function(e) {
            e.preventDefault();
            $('.search-form-wrapper').toggleClass('open');
            $('.search-form-wrapper input').focus();
            mainNavItems.removeClass('open');
        });

        $('.menu-toggle').on('click', function(e) {
            e.preventDefault();
            if (!_body.hasClass('menu-open')) {
                _body.addClass('menu-open');
            }
            else {
                _body.removeClass('menu-open');
            }
        });
        $('.content-features-block.alternating .btn').on('mouseenter', function(){
            $(this).parent().parent().parent().find('.hover-image').addClass('hover');
        }).on('mouseleave', function(){
            $(this).parent().parent().parent().find('.hover-image').removeClass('hover');
        })
        /* $('.body-content > div:not(.hero), .callouts').attr('data-aos', 'fade-up'); */

        //ADD ANIMATION TO BLOCKS
        $(document).ready(function() {
            AOS.init({
                easing: 'ease-in-out-sine'
            });
            let hasScrolled = false;
            $(window).on('scroll', function() {
                if (!hasScrolled) {
                    hasScrolled = true;
                    AOS.refresh();
                }
            });

            window.addEventListener('load', AOS.refresh);
            //don't animate the home hero
        });

    };

    //SHOW AND HIDE MOBILE MENU WHEN RESIZED
    let _onWindowResizeHandler = function() {
        if (window.innerWidth > 991) {
            if (!_nav.hasClass('show')) {
                _nav.addClass('show');
            }
            _ddParents.removeClass('open');
        }
        else {
            if (_nav.hasClass('show')) {
                _nav.removeClass('show');
            }
        }
    };
    _init();
    return {};
})(jQuery, window, document, WPO);
