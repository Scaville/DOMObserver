/* 
 * SCAVILLE
 * 
 * Author: Fabricio Paulo
 * 
 * Copyright (c) 2017 SCAVILLE | Fabricio Paulo
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function($) {

    $.extend($.fn, {
        mutate: function(callback) {
            $(this).change(function(){
                callback();
            });
            $(this).bind('DOMSubtreeModified',function(){
                callback();
            });
        },
        observe: function(callback) {
            $(this).bind('DOMSubtreeModified',function(){
                callback();
            });
        },
    });
    
}));


