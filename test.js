
$(document).ready(function(){
      var serv = $('#get_SERVICE').html();
      $('#sticky-01').html(serv); 
    });
    
    
    var $sidebar = $("#sticky-01"),
        $window = $(window);
    $window.scroll(function () {

        var footerTop = $('#shopify-section-footer').position().top
        var sidebarBottom = $window.scrollTop() + 400;
        if ($window.scrollTop() > 35 && $window.scrollTop() < 87) {
            $(".sideBarWrapper").addClass('sideBarWrapperSmall');
            $(".sideBarWrapper").removeClass('sideBarWrapperBig');

        } else if ($window.scrollTop() > 86) {
            $(".sideBarWrapper").removeClass('sideBarWrapperSmall');

            $(".sideBarWrapper").addClass('sideBarWrapperBig');

        }
        else {
            $(".sideBarWrapper").removeClass('sideBarWrapperSmall');

            $(".sideBarWrapper").removeClass('sideBarWrapperBig');
        }
        if (sidebarBottom > footerTop) {
            $('.sideBarWrapper').css('opacity', '0');
        } else {
            $('.sideBarWrapper').css('opacity', '1');
        }

    });
