/* sidenav start  */
$(function(){
  $('#navmenubar').click(function(){
    let sidenavId=$('#sidenavId');
    let fullcontentoverlay=$('#fullcontentoverlay')
    if(sidenavId.hasClass('sidenavclose')){
      sidenavId.removeClass('sidenavclose');
      sidenavId.addClass('sidenavopen');
      fullcontentoverlay.removeClass('sidenavoverlayclose')
      fullcontentoverlay.addClass('sidenavoverlay')
    }else{
      sidenavId.removeClass('sidenavopen');
      sidenavId.addClass('sidenavclose');
      fullcontentoverlay.removeClass('sidenavoverlay')
      fullcontentoverlay.addClass('sidenavoverlayclose')
    }
  })
});
/* sidenav end  */


// content overlay start 
$(function(){
  $('#fullcontentoverlay').click(function(){
    let sidenavId=$('#sidenavId');
    let fullcontentoverlay=$('#fullcontentoverlay')
    if(sidenavId.hasClass('sidenavclose')){
      sidenavId.removeClass('sidenavclose');
      sidenavId.addClass('sidenavopen');
      fullcontentoverlay.removeClass('sidenavoverlayclose')
      fullcontentoverlay.addClass('sidenavoverlay')
    }else{
      sidenavId.removeClass('sidenavopen');
      sidenavId.addClass('sidenavclose');
      fullcontentoverlay.removeClass('sidenavoverlay')
      fullcontentoverlay.addClass('sidenavoverlayclose')
    }
  })



});
// content overlay end
// feature_service_slick start 
$(function(){
  $('.service_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,


    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
    
     
    ]
    
 
 
});
})
// feature_service_slick end 





function myFunction(){
  document.getElementById("card-container").style.display = 'none';
  const mDiv = document.getElementById("mobile-con");
  const div = document.getElementById("mobile");
  div.innerHTML =
  `<div class="col-lg-4">
  <div class="portfolio_item_part">
    <div class="portfolio_img_part">
      
        <img src="images/appdev.jpg" alt="">
        <div class="portfolio_img_overlay"></div>
        <div class="portfolio_img_icon"><i class="fas fa-info"></i></div>


  </div>
  <div class="portfolio_text_part">
    <h3>App Development</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.</p>
  </div>
    

  </div>
</div>

  
<div class="col-lg-4">
<div class="portfolio_item_part">
  <div class="portfolio_img_part">
    
      <img src="images/web design.jpg" alt="">
      <div class="portfolio_img_overlay"></div>
      <div class="portfolio_img_icon"><i class="fas fa-info"></i></div>


</div>
<div class="portfolio_text_part">
  <h3>Web Development</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores. </p>
</div>
  

</div>
</div>

  
<div class="col-lg-4">
<div class="portfolio_item_part">
  <div class="portfolio_img_part">
    
      <img src="images/develop.jpg" alt="">
      <div class="portfolio_img_overlay"></div>
      <div class="portfolio_img_icon"><i class="fas fa-info"></i></div>


</div>
<div class="portfolio_text_part">
  <h3>Web Development</h3>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores. </p>
</div>
  

</div>
</div>`;
mDiv.appendChild(div);

}
function mobileFunction(){
  document.getElementById("card-container").style.display = 'none';
  const mDiv = document.getElementById("mobile-con");
  const div = document.getElementById("mobile");
  div.innerHTML =
  `<div class="col-lg-4 m-auto">
  <div class="portfolio_item_part ">
    <div class="portfolio_img_part">
      
        <img src="images/appdev.jpg" alt="">
        <div class="portfolio_img_overlay"></div>
        <div class="portfolio_img_icon"><i class="fas fa-info"></i></div>


  </div>
  <div class="portfolio_text_part">
    <h3>App Development</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores. </p>
  </div>
    

  </div>
</div>
<div class="col-lg-4 m-auto" ">
  <div class="portfolio_item_part">
    
  <div class="portfolio_text_part">
    <h3>Description</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores. </p>
  </div>
    

  </div>
</div>`;
mDiv.appendChild(div);
}
function designFunction(){
  document.getElementById("card-container").style.display = 'none';
  const mDiv = document.getElementById("mobile-con");
  const div = document.getElementById("mobile");
  div.innerHTML =
  `<div class="col-lg-4 m-auto">
  <div class="portfolio_item_part">
    <div class="portfolio_img_part">
      
        <img src="images/web design.jpg" alt="">
        <div class="portfolio_img_overlay"></div>
        <div class="portfolio_img_icon"><i class="fas fa-info"></i></div>


  </div>
  <div class="portfolio_text_part">
    <h3>Web Design</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores. </p>
  </div>
    

  </div>
</div>
<div class="col-lg-4 m-auto">
  <div class="portfolio_item_part">
    
  <div class="portfolio_text_part">
    <h3>Description</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.  </p>
  </div>
    

  </div>
</div>`;
mDiv.appendChild(div);
}
function deveFunction(){
  document.getElementById("card-container").style.display = 'none';
  const mDiv = document.getElementById("mobile-con");
  const div = document.getElementById("mobile");
  div.innerHTML =
  `<div class="col-lg-4 m-auto">
  <div class="portfolio_item_part">
    <div class="portfolio_img_part">
      
        <img src="images/develop.jpg" alt="">
        <div class="portfolio_img_overlay"></div>
        <div class="portfolio_img_icon"><i class="fas fa-info"></i></div>


  </div>
  <div class="portfolio_text_part">
    <h3>Development</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores. </p>
  </div>
    

  </div>
</div>
<div class="col-lg-4 m-auto">
  <div class="portfolio_item_part">
   
  <div class="portfolio_text_part">
    <h3>Description</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam dolorem et atque soluta vero explicabo expedita quasi. Fugit aspernatur reprehenderit suscipit id. Illo, cupiditate dolores. </p>
  </div>
    

  </div>
</div>`;
mDiv.appendChild(div);
}
