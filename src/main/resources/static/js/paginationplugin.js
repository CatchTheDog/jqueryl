(function ($) {
    $.fn.extend({"hightLight":function (options) {
         var opts = $.extend({},defaults,options);
         this.each(function () {
            var $this = $(this);
            $this.css({
                backgroundColor: opts.background,
                color: opts.foreground
            });
         });
        }
    });
    var defaults = {
        foreground: 'red',
        background: 'yellow'
    };

})(window.jQuery);