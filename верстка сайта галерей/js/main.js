$(document).ready(function() {

    //  categoties accordeon

     $('.accordeon-trigger').on('click', function(e){
         e.preventDefault();
         var $this = $(this),
             item = $this.closest('.accordeon-item'),
             list = $this.closest('.accordeon-list'),
             items = list.find('.accordeon-item'),
             content = item.find('.accordeon-inner'),
             otherContent = list.find('.accordeon-inner'),
             duration = 300;

         if (!item.hasClass('active')) {
             items.removeClass('active');
             item.addClass('active');
             otherContent.stop(true, true).slideUp(duration);
             content.stop(true, true).slideDown(duration);
         } else {
             content.stop(true, true).slideUp(duration);
             item.removeClass('active');
         }
         return false;
     });
// categoties accordeon
    $.Placeholder.init();
});