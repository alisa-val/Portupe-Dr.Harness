(function($) {
    $(function() {
      
      $('div.tabs__caption').on('click', 'button:not(.proactive)', function() {
        $(this)
          .addClass('proactive').siblings().removeClass('proactive')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);
