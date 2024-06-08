WPO.Settings = function () {
    var settings = {
        blog_url:'',
        debug:true,
    };
    var _getBlogUrl = function(){
        return settings.blog_url;
    };
    var _setBlogUrl = function($inVal){
        settings.blog_url = $inVal;
    };

    var _getDebug = function(){
        return settings.debug;
    };

    return{
        getBlogUrl:_getBlogUrl,
        setBlogUrl:_setBlogUrl,
        getDebug:_getDebug
    }
}();