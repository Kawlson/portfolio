
var totalslides = 1;

        function mycarousel_initCallback(carousel) {
            jQuery('#viewvid').bind('click', function () {
                carousel.scroll(jQuery.jcarousel.intval(1));
                pageslide('about');
                return false;
            });

            jQuery('.jcarousel-navigation li a').click(function (e) {
                var panel = $(this).parent('li').attr('id');
                carousel.scroll(jQuery.jcarousel.intval(panel));
                return false;
            });
        };

        function mycarousel_itemFirstInCallback(carousel, item, idx, state) {
            var bubble = calcSlide(idx);
            $('.jcarousel-navigation li').each(function () {
                if ($(this).attr('id') == bubble)
                    $(this).addClass('active');
                else
                    $(this).removeClass('active');
            });
        };

        function calcSlide(value) {
            var current = value;
            if (value > totalslides) {
                current = value - totalslides;
                calcSlide(current);
            }

            return current;
        }

        jQuery(document).ready(function () {
            // $('.menuColor ul.mega-menu').css('background-image', 'url(/js/jquery-mega-drop-down-menu/css/skins/images/bg_<?=$_CLEAN['menuColor']?>.png)');
            // $('.menuColor ul.mega-menu li a').css('background-image', 'url(/js/jquery-mega-drop-down-menu/css/skins/images/bg_<?=$_CLEAN['menuColor']?>.png)');

            $("#s2").jcarousel({
                scroll:    1,
                wrap:      'last',
                animation: 'fast'
            });

            $('#s3 li').each(function () {
                $('.jcarousel-navigation').append('<li id="' + totalslides + '"><a href="#"></a></li>');
                totalslides++;
            });
            totalslides = totalslides - 1;

            $("#s3").jcarousel({
                scroll:              1,
                wrap:                'circular',
                animation:           'fast',
                itemFirstInCallback: mycarousel_itemFirstInCallback,
                initCallback:        mycarousel_initCallback
            });

            $('.fg-button').hover(
                function () { $(this).removeClass('ui-state-default').addClass('ui-state-focus'); },
                function () { $(this).removeClass('ui-state-focus').addClass('ui-state-default'); }
            );
            });