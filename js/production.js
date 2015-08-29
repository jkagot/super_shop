$(document).ready(function(){
		var sliderSettings = {
			slideWidth: 250,
			slideMargin: 0,
			moveSlides: 1,
			minSlides: 1,
			maxSlides: 5,
			infiniteLoop: false,
			hideControlOnEnd: true,
			pager: false,
			speed: 210
		}
		slider = $('#slider').bxSlider();
		$('#sliderWithPg').bxSlider({
			pagerCustom: '#bx-pager'
		});	
		window_width = $( window ).width(); 
		/*if( window_width < 701){
			$("#content .product-wrapper .product-filter").remove();
			slider3= $("#new-slider").bxSlider(sliderSettings);
			slider2= $("#populae-slider").bxSlider(sliderSettings);	
			if($('#populae-slider').length) {
				$(window).on('resize', function() {
					slider2.reloadSlider();
					slider3.reloadSlider();
				});
			}
			else{
				//slider2.destroySlider();
				//slider3.destroySlider();
			}
		}
		//sliders end	
		/*choose-phone*/	
		$(".top-part .choose-phone .chosen-phone").click( function() {
			$(".top-part .choose-phone ul.dropdownn").show();
			$(".backopacity").addClass("black").show();	
		});		
		$(".dropdownn li a span").click( function() {
			var telnumber =$(this).text(); 
			console.log(telnumber);
			$(".top-part .choose-phone .chosen-phone .active-tel").text(telnumber);
			$(".top-part .choose-phone ul.dropdownn").hide();
			$(".backopacity").addClass("black").hide();
			$(".top-part .enter .enter-dropzone").hide();
		});
		/*Закрытие всех окон по клику на область*/
		$(".backopacity").click( function() {
			$(".top-part .choose-phone ul.dropdownn").hide();
			$(".top-part .enter .dropdownn").hide();
			$(".top-part .order-call .order-call-dropzone").hide();
			$(this).hide();
		});
		/*enter dropdown*/		
		$(".top-part .enter a").click( function() {
			$(".top-part .enter .dropdownn").show();
			$(".backopacity").addClass("black").show();
		});
		$(".dropdownn .close-bt").click( function() {
			$(this).parent().hide();
			$(".backopacity").hide();	
		});
		/*enter dropdown end*/
		/*order-call*/
		$(".top-part .order-call a").click( function() {
			$(".top-part .order-call .dropdownn").show();
			$(".backopacity").addClass("black").show();			
		});
		$(".top-part .order-call .order-call-dropzone .close").click( function() {
			$(this).parent().toggle();
			$(".backopacity").hide();
		});
		/*oreder-call end*/
		/*включение меню в хедере на 320*/
		$(".header-wrapper .top-part .top-menu-toggle").click( function() {
			$(this).toggleClass("clicked");
			$(".header-wrapper .top-part ul.top-menu").toggleClass("active");
		});
		/*включение меню с разделами в хедере на 320*/
		$(".bottom-part .top-filter-toggle").click( function() {
			$(this).toggleClass("clicked");
			$(".header-wrapper .bottom-part ul").toggleClass("active");
		});
		$("footer .footer-menu-toggle").click( function() {
			$(this).toggleClass("clicked");
			$("footer .footer-menu").toggleClass("active");
			window_width = $( window ).width();
			console.log(window_width);
			if( 500 < window_width ){
				$("footer .sotial-bt li a").toggle();
			}					
		});
		/*кнопка поиска*/
		$(".bottom-part .search").click( function() {
			$(".bottom-part .search-form").toggleClass("active");
			window_width = $( window ).width();
			console.log(window_width);
			if(window_width > 840){
				$(".bottom-part ul").toggle();
				console.log("840");
			}
			else if( window_width >= 768){
				$(".bottom-part ul").toggle();
				$(".header-wrapper .header-inner .bottom-part").toggleClass("all-width");
				console.log(" попали в > 768");
			}
			else if( 500 < window_width < 767){							
				$(".header-wrapper .header-inner .bottom-part .top-filter-toggle").toggle();				
				console.log(" попали в < 768");
			}
			/*else if(window_width < 500){
				$(".header-wrapper .cart-inner").toggle();	
				$(".header-wrapper .header-inner .bottom-part .top-filter-toggle").toggle();  //старый js
				console.log("попали в 500");				
			}					
			*/
			else{
				console.log("mur");						
				//$(".bottom-part ul").toggle();
				//$(".header-wrapper .header-inner .bottom-part .top-filter-toggle").toggle();
			}			
		});	
		$(function() {/*инициализация слайдера*/		
			$("#slider-range" ).slider({
				min: 0,
				max: 10000,
				values: [0,10000],
				range: true,
				stop: function(event, ui) {
					$("input#minCost").val($("#slider-range").slider("values",0));
					$("input#maxCost").val($("#slider-range").slider("values",1));
				},
				slide: function(event, ui){
					$("input#minCost").val($("#slider-range").slider("values",0));
					$("input#maxCost").val($("#slider-range").slider("values",1));
				}			
			});
			//$('#minCost').val(0);
			//$('#maxCost').val(1000);
		  });
		$('#minCost,#maxCost').keypress(function(e) {
				if (!(e.which==8 || e.which==44 ||e.which==45 ||e.which==46 ||(e.which>47 && e.which<58))) return false;
			});
		$('#minCost').keyup(function() {
			var val = parseInt($(this).val());
			var max = $('#slider-range').slider("values", 1);					
			if(	val<max)
			{					
				$('#slider-range').slider("values",0,val);
			}
			else{
				$('#slider-range').slider("values",0,max);
			}					
		});
		$('#maxCost').keyup(function() {
			var val = parseInt($(this).val());
			var min = $('#slider-range').slider("values", 0);					
			if(	val>min)
			{					
				$('#slider-range').slider("values",1,val);
			}
			else{
				$('#slider-range').slider("values",1,min);
			}					
		});		
		$(".you-choose .filter-inner ul li .close").click( function() {				
			var itlang = $(this).parents('ul').find('li').length;
			var filterchoose = $(".you-choose");
			if( itlang != 0){
				if (itlang == 1){
					console.log($(this).parent().html());
					$(this).parent().parent().parent().remove();
					if(filterchoose.find(".filter-inner").length == 0){
						$(".reset-filter").remove();
						$(".no-filters").toggle();						
					}
				}
				else{
					$(this).parent().remove();
					console.log(itlang);
				}				
			}			
		});		
		$(".reset-filter").click( function() {
			$(".you-choose .filter-inner").remove();
			$(this).remove();
			$(".no-filters").toggle();
		});
		$('.up-to-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
			/* Плавная прокрутка наверх */
			$('body, html').animate({
			scrollTop: 0
			}, 1000);
		});
		/*Проверка на IE*/				
		if (document.all) {
			// Код для всех версий IE. В других браузерах выполняться не будет.
			console.log("its ie");	
			$('.top-filters .left .section-title').css("color","red");
			$('.product-inner:hover .description').css("box-shadow","1px 0 0 0 @yellow, 0 0px 0 0 @yellow, 0px 1px 0 0 @yellow,  1px 0 0 0 @yellow inset, 0 0px 0 0 @yellow inset !important");		
			console.log("its ie");
		} 
		else{			
			console.log("not ie");
		}
		/*release mob*/
		$("#content .release .top-filters .right .sort-by .mobile-filters").click( function() {
			$("#content .release .main-filters").show();
			$(".backopacity").show();			
		});	
		if(window_width < 700){
			$(".backopacity").click( function() {
				$("#content .release .main-filters").hide();
				$(this).hide();
			});				
		}			
		$(".close-this-filter").click( function() {	
			var  thisInner = $(this).parent().parent().parent();
			$(this).parent().parent().parent().toggleClass("close-filter");
			if( $(thisInner).hasClass("close-filter")){				
				$(this).text("Развернуть фильтр");
			}
			else{
				$(this).text("Свернуть фильтр")				
			}
			$(this).parent().find(".input-holder").toggle();			
		});
		$(".sort-by .chosen-type").click( function() {
			$(this).find(".arrow").toggleClass("max-min");
		});
		$("#content .release .main-filters .other-filters .filter-inner .filter-title").click( function(){
			console.log($(this).parent().find(".scroll-filters"));
			$(this).parent().find(".scroll-filters").toggle();
			$(this).toggleClass("open");
		});
		//product
		(function() {//размеры
			$(".size-part ul li a").click( function() {	
				$(".size-part ul li a").removeClass("active");
				$(this).addClass("active");
				var active_a = $(".size-part ul li a.active");
				if($(active_a).data('name') == "available"){
					console.log("rrr");
				 	$(".size-map").css("display","none");					
					$(".size-part .available-size").css("display","inline-block");
					$(".product-attention").css("display","inline-block");
					$(".product-color").show();
					$(".product-info-tabs").show();
				}
				else{
					console.log("nnn");
					$(".product-attention").css("display","none");
					$(".size-part .available-size").hide();
					$(".product-color").hide();
					$(".product-info-tabs").hide();
					$(".size-map").show();
					$(".size-map .product-attention").css("display","inline-block");						
				}
			});			
			
			
		})();
		(function() {//табы описания товара
			$(".product-info-tabs > div").hide();
			$(".product-information").show();
			$(".product-info-tabs ul li a").click( function() {	
				$(".product-info-tabs ul li a").removeClass("active");
				$(this).addClass("active");
				var active_a = $(".product-info-tabs ul li a.active");
				$(".product-info-tabs > div").hide();	
				if($(active_a).data('tab') == "1"){
					console.log("1");
					$(".product-information").show();
				}
				else if($(active_a).data('tab') == "2"){
					console.log("2");
					$(".product-specifications").show();
				}
				else if($(active_a).data('tab') == "3"){
					console.log("3");
					
				}
				else if($(active_a).data('tab') == "4"){
					console.log("4");
					$(".product-reviews").show();
						
				}
			});
			$(".add-reviews").click( function() {
				$(this).parent().hide();
				$(".add-review").show();
			});
			$(".read-review").click( function() {
				$(this).parent().hide();
				$(".product-reviews").show();
			});
		})();
		/*новый хедер правки после 11.08*/
		(function() {
			$(".header-wrapper .header-inner .top-part .top-menu-toggle2").click( function(){
				$(".backopacity").addClass("black").show();				
				if(window_width < 500){
					$(".new-bt-mob").show();
					console.log("500");
				}
				/*if( 500 < window_width < 1001){
					console.log(" not 500");
					$(this).toggleClass("clicked");
					$(".header-wrapper .top-part ul.top-menu").addClass("active");
				}*/
			});
			$(".backopacity").click( function(){				
				$(".new-bt-mob").hide(); //закрывает единое меню в хедере при клике на серую область при < 500px
				$(".backopacity").removeClass("black");
			});
			window_width = $( window ).width();
			console.log(window_width);
				if(window_width < 500){
					$(".bottom-part .search").click( function() {
					console.log("попали в 500")
					$(".header-wrapper .header-inner .top-part").toggle();
					$(".header-wrapper .header-inner .bottom-part .top-filter-toggle").hide();
					$(".header-wrapper .header-inner .bottom-part").toggleClass("all-width active2");					
				});	
				
			}			
		})();
		(function() {
			$(".cart .cart-table .delete-item .close").click(function(){ //удаляет элементы по клику на кнопку удалить
				console.log($(this).parent().parent().find(".cart-table-item"));
				$(this).parent().parent().remove();
				if($(".cart .cart-table").find(".cart-table-item").val() == null){
					$(".cart-empty").show();
				}
			});
			$("#clear-cart").click(function(){
				$(".cart .cart-table").find(".cart-table-item").remove();
				$(".cart-empty").show();
			});
		})();
});
 
(function($){
	$(window).load(function(){
		$(".brand-filter").mCustomScrollbar({
			scrollInertia: 1000,
			theme:"my-theme",
			scrollButtons:{
				enable:true,
				scrollType:"stepless", 
			},
		});
		$(".size-filter").mCustomScrollbar({
			scrollInertia: 1000,
			theme:"my-theme",
			scrollButtons:{
				enable:true,
				scrollType:"stepless",
			},
		});
		$(".color-filter").mCustomScrollbar({
			scrollInertia: 1000,
			theme:"my-theme",
			scrollButtons:{
				enable:true,
				scrollType:"stepless",
			},
		});		
		$(".product-reviews-inner").mCustomScrollbar({
			theme:"my-theme",
			scrollButtons:{
				enable:true,
				scrollType:"stepless",
			}
		});
		
	});
})(jQuery);