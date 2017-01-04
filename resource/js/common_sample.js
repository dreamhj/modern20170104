$(function() {
	$('.sub_mn ul ul').hide();
	$('.sub_mn > ul >li').eq(0).find('a').addClass('active').next().show();

	$('.sub_mn > ul >li > a').click(function(){
		var subUl=$(this).next();
		if((subUl.is('ul')) && (subUl.is(':visible'))){
			$('.sub_mn ul ul:visible').slideUp();
		};
		if((subUl.is('ul')) && (!subUl.is(':visible'))){
			$('.sub_mn > ul >li > a').removeClass('active');
			$(this).addClass('active');
			$('.sub_mn ul ul:visible').slideUp();
			subUl.slideDown();
		}
		return false;
	});
	$('.sub_mn > ul >li li a').click(function(){
		return false;
	});

	var isOn= false;
	if(!$('body').hasClass('main')){
		$('body').css({'paddingTop':'0px'});
		$('.toggle.top').css('top','-51px');
		$('.toggle.top .toggle_btn').click(function(){
			if(isOn){
				$('.toggle.top').animate({'top':'-51px'}, 300);
				$('body').animate({'paddingTop':'0'}, 300);
				isOn= false;
			}else{
				$('.toggle.top').animate({'top':'0'}, 300);
				$('body').animate({'paddingTop':'50px'}, 300);
				isOn= true;
			}
			return false;
		});

		//$('.toggle.bottom').css({'bottom':'-80px'});
		$('.toggle.bottom').hide();
	}else{
		$('.toggle.top .toggle_btn').click(function(){
			if(!isOn){
				$('.toggle.top').animate({'top':'-51px'}, 300);
				$('body').animate({'paddingTop':'0'}, 300);
				isOn= true;
			}else{
				$('.toggle.top').animate({'top':'0'}, 300);
				$('body').animate({'paddingTop':'50px'}, 300);
				isOn= false;
			}
			return false;
		});

		$('.toggle.bottom').addClass('active');
		var toggle= setTimeout(function(){ //2초후에 하단 토글
			$('.toggle.bottom').stop().animate({'bottom':'-80px'}).removeClass('active');
			}, 2000);
	}

	$('.toggle.bottom .toggle_btn').click(function(){
		clearTimeout(toggle);
		if($('.toggle.bottom').hasClass('active')){
			$('.toggle.bottom').animate({'bottom':'-80px'}, 300).removeClass('active');
		}else{
			$('.toggle.bottom').animate({'bottom':'0'}, 300).addClass('active');
		}
		return false;
	});

	$('#allmn').hide();
	$('.allmn_btn').click(function(){
		if(!$('#allmn').is(':visible')){
			$('#allmn').slideDown();
			$('.allmn_btn').find('img').attr('src','img/allmnBtn2.png');
		}else{
			$('#allmn').slideUp();
			$('.allmn_btn').find('img').attr('src','img/allmnBtn.png'); 
		}
		return false;
	});
	$('.sub_mn .close').click(function(){
		$('#allmn').slideUp();
		return false;
	});

$('body').click(function(e){ //영역외 클릭시
	if($('#allmn').css('display') == 'block'){
		if(!$('#allmn').has(e.target).length){
			$('#allmn').slideUp();
		}
	}
});

//console.log($('#subNav .sub_mn').css('margin-left'));
$('body').click(function(e){ //영역외 클릭시
	if($('#subNav .sub_mn').css('margin-left') == '0px'){
		if(!$('#subNav').has(e.target).length){
			$('#subNav').animate({'width':'69px'});
			$('#subNav .sub_mn').animate({'marginLeft':'-238px'},300);
		}
	}
});
	$('#subNav').css({'width':'69px'});
	$('#subNav .sub_mn').css({'marginLeft':'-238px'});
	$('#subNav .gnb_mn').click(function(){
		$('#subNav').animate({'width':'307px'});
		$('#subNav .sub_mn').animate({'marginLeft':'0'},300);
	});
	$('#subNav .close').click(function(){
		$('#subNav').animate({'width':'69px'});
		$('#subNav .sub_mn').animate({'marginLeft':'-238px'},300);
		return false;
	});
	


	$(window).scroll(function(){ //위로이동
		if($(this).scrollTop > 200){
			$('.go_top').fadeIn();
		}else{
			$('.go_top').fadeOut();
		}
	});

	$('.go_top').click(function(){
		$('html,body').animate({scrollTop:0}, 400);
		return false;
	});
});