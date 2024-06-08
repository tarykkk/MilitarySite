//CONTROL PAGE LOADING
WPO.Utility = function($, window, document, WPO, navigator){
    var isMobilePlatform	= null;

    var _detectIE = function(){
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
        {
            $('body').addClass('ie');
        }

    };

    var _GetRandomInteger = function(min,max){
        var rtn = Math.floor(Math.random() * Math.floor(max)) + min;
        if(rtn > max){
            rtn = max - 1;
        }
        return rtn;
    };
    var _Back = function () {
        WPO.Utility.Log('back');
        history.go(-1);
    };

    var _Log = function(message){
        if(WPO.Settings.getDebug()){
            console.log(message);
        }
    };


    var _createCookie = function(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    };

    var _readCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };

    var _eraseCookie = function(name) {
        createCookie(name,"",-1);
    };

    // RETURNS BOOLEAN BASED ON IF A MOBILE DEVICE

    var _isMobile 	= function(){
        var tmpRetVal	= false;
        if(isMobilePlatform != null) tmpRetVal = isMobilePlatform;
        else{
            isMobilePlatform = (navigator.userAgent.indexOf('iPad') !== -1 ||
                navigator.userAgent.indexOf('iPhone') !== -1 ||
                navigator.userAgent.indexOf('iPod') !== -1 ||
                navigator.userAgent.indexOf('Android') !== -1 ||
                navigator.userAgent.indexOf('BlackBerry') !== -1 ||
                navigator.userAgent.indexOf('webOS') !== -1);

            tmpRetVal	= isMobilePlatform;
        }
        return tmpRetVal;
    };


    var _isUrl = function(s) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    };

    var _scrollToElm = function(elm,the_offset)
    {

        var $container = jQuery("html,body");
        var $scrollTo = jQuery(elm);

        $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top - the_offset},300);
    };

    // CSS3 TRANSITION
    var _updateCSS3Transitions	= function(el, x, y, speed, ease){
        jQuery(el).css({
            '-webkit-transform':'translate3d('+ x +'px, '+ y +'px, 0)','-webkit-transition':'-webkit-transform '+ speed +'ms ' + ease,
            '-moz-transform':'translate3d('+ x +'px, '+ y +'px, 0)','-moz-transition':'-moz-transform '+ speed +'ms ' + ease,
            '-ms-transform':'translate3d('+ x +'px, '+ y +'px, 0)','-ms-transition':'-ms-transform '+ speed +'ms ' + ease,
            '-o-transform':'translate3d('+ x +'px, '+ y +'px, 0)','-o-transition':'-o-transform '+ speed +'ms ' + ease,
            'transform':'translate3d('+ x +'px, '+ y +'px, 0)','transition':'transform '+ speed +'ms ' + ease
        });
    };


    var _elementInViewport	= function(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    };

    //MOVE TO OWN FILE
    // var _trackGA    = function(category, action, opt_label, opt_value, opt_noninteraction){
    //     utility.log('GA TRACK: ' + category + ', ' + action + ', ' + opt_label + ', ' + opt_value + ', ' + opt_noninteraction);
    //     if(typeof ga !== "undefined"){
    //     ga('send', 'event', category,action,opt_value, {
    //         nonInteraction: opt_noninteraction
    //     });
    //     }
    // };
    var _getScrollPercent = function () {
        var h = document.documentElement,
            b = document.body;
        return $(window).scrollTop() / ($(document).height() - $(window).height());
    };

    var _getParameterByName = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    return{
        GetRandomInteger:_GetRandomInteger,
        detectIE:_detectIE,
        createCookie:_createCookie,
        readCookie:_readCookie,
        eraseCookie:_eraseCookie,
        isMobile:_isMobile,
        scrollToElm:_scrollToElm,
        updateCSS3Transitions:_updateCSS3Transitions,
        elementInViewport:_elementInViewport,
        isUrl:_isUrl,
        getScrollPercent:_getScrollPercent,
        Log:_Log,
        Back:_Back,
        getParameterByName:_getParameterByName,
    };

}(jQuery, window, document, WPO, navigator);