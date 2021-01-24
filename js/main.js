$(document).ready(function () {
    $('.burger__menu').click(function () {
      $('.menu').addClass('active');
      $('body').addClass('active');
    })
    $('.close').click(function () {
      $('.menu').removeClass('active');
      $('body').removeClass('active');
    })
    window.onload = function(){
      var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
      $('.cdp_i').on('click', function(){
        var go = $(this).attr('href').replace('#!', '');
        if (go === '+1') {
          paginationPage++;
        } else if (go === '-1') {
          paginationPage--;
        }else{
          paginationPage = parseInt(go, 10);
        }
        $('.cdp').attr('actpage', paginationPage);
      });
    };
    
    $('.small-img').click(function(e){
      e.preventDefault();
      $('.big-img img').attr('src', $(this).attr('href'));
    })
});