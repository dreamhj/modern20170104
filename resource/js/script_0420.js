$(function() {
	init();
	addressRemove();
	swiper();
	bxslider();
	datepicker();
});

function init(){
	toolBar();
	footerBar();
	navi();
	tab('#tab','#tabcont');
	allchk('#allchk');
	goTop();
	layer_open();
	popup();
}

function addressRemove(){
	window.addEventListener('load', function() {
	setTimeout(scrollTo, 0, 0, 1);
	}, false);
}
//메인 화면 넘기기
function swiper(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
		mousewheelControl:true
    });
}
//메인 이미지 슬라이드
function bxslider(){
	if($('.bxslider').length > 0){
		 $('.swipe1 .bxslider').bxSlider({
			auto: true,
			controls:false,
				autoHover:true,
				pause:5000
		});
		 $('.swipe2 .bxslider').bxSlider({
			auto: true,
			controls:false,
				autoHover:true,
				pause:5000
		});
	}
}

function datepicker(){
	$("#fromDate").datepicker({
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
   // showOn: "button",//button
    buttonImageOnly: false, 
	//buttonImage: '../image/icon_calendar.png',
    showAnim: "slideDown",
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
    onClose: function(selectedDate) {
        $("#toDate").datepicker("option", "minDate", selectedDate);
    }
});
$("#toDate").datepicker({
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
   // showOn: "button",//button
    buttonImageOnly: false, 
	//buttonImage: '../image/icon_calendar.png',
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
    onClose: function(selectedDate) {
        $("#fromDate").datepicker("option", "maxDate", selectedDate);
    }
});

 $('#yearDate').MonthPicker({ 
	 ShowIcon: false
	//Button: false 
	//Button: '<img class="icon" src="images/icon.gif" />'
	//StartYear: 2027
});

	/*
  $( "#fromDate, #toDate" ).datepicker({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
  });
  */
}

//위로가기버튼
function goTop(){
	$('#goTop').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 150){
			$('#goTop').fadeIn();
		}else{
			$('#goTop').fadeOut();
		}
	});
	$('#goTop').click(function(){
		$('html, body').animate({scrollTop:0}, 300);
		return false;
	});
}

//탑- 즐겨찾기, 최신기록
function toolBar(){
	var toolH = $('#toolbar').outerHeight();
	var contPad = parseInt($('#container .grid').css("padding-top"), 10); // px제거 parseInt, 10
	var subNav = parseInt($('#subNav').css("top"), 10);
	$('#toolbar').find('.btn_toggle').click(function(){
		if(!$(this).hasClass('off')){
			$('#container > .grid').stop().animate({'paddingTop':contPad-toolH}, 150);
			$('#toolbar').stop().animate({'marginTop':-toolH}, 150);
			$('#subNav').stop().animate({'top':subNav-toolH}, 150);
			$(this).addClass('off');
		}else{
			$('#container > .grid').stop().animate({'paddingTop':contPad}, 150);
			$('#toolbar').stop().animate({'marginTop':''}, 150);
			$('#subNav').stop().animate({'top':subNav}, 150);
			$(this).removeClass('off');
		}
		return false;
	});
	if(!$('body').hasClass('main')){
		$('#container > .grid').css({'paddingTop':contPad-toolH});
		$('#toolbar').css({'marginTop':-toolH});
		$('#subNav').css({'top':subNav-toolH});
		$('#toolbar .btn_toggle').addClass('off');
	}
}

//푸터
function footerBar(){
	var footH = $('.site_footer').outerHeight();
	$('.site_footer').find('.btn_toggle').click(function(){
		if(!$(this).hasClass('off')){
			$('.site_footer').animate({'marginBottom':-footH}, 250);
			$(this).addClass('off');
		}else{
			$('.site_footer').animate({'marginBottom':''}, 250);
			$(this).removeClass('off');
		}
		return false;
	});
	if($('body').hasClass('main')){
		var toggle= setTimeout(function(){ //2초후에 하단 토글
			$('.site_footer').animate({'marginBottom':-footH}, 250).find('.btn_toggle').addClass('off');
		}, 2000);
	}else{
			$('.site_footer').css({'marginBottom':-footH});
			$('.site_footer .btn_toggle').addClass('off');
	}
}

function navi(){
	//상단전체메뉴
	var navH = $('#allNav').height();
	$('#allNav .navi').hide();
	$('#allNavBtn').click(function(){
		if($(this).hasClass('on')){
			$('#allNav .navi').slideUp();
			$(this).removeClass('on');
		}else{
			$('#allNav .navi').slideDown();
			$(this).addClass('on');
		}
		return false;
	});
	$('#allNav .navi_sub').hide();
	$('#allNav .navi > ul > li').eq(0).find(' > a').addClass('active').next().show();
	$('#allNav .navi > ul > li > a').click(function(){
		$('#allNav .navi > ul > li > a').removeClass('active');
		$('#allNav .navi_sub').hide();
		var subDiv=$(this).next();
		$(this).addClass('active').next().show();
		return false;
	});
	$('#allNav .close').click(function(){
		$('#allNav .navi').slideUp();
		$('#allNavBtn').removeClass('on');
		return false;
	});
	
	//좌측메뉴
	var subW = parseInt($('#subNav .navi > ul > li > a').outerWidth(), 10);
	var subNav = parseInt($('#subNav .navi').outerWidth(), 10);
	$('#subNav').width(subW);
	$('#subNav .navi').css('width','auto');
	$('#subNav .navi_sub').hide();
	$('#subNav .navi > ul > li > a').click(function(){
		if(!$('#subNav').hasClass('on')){
			$('#subNav').animate({'width':subNav},250).addClass('on');
		}
		$('#allNav .navi').slideUp();
		$('#subNav .navi').css('width', subNav);
		$('#subNav .navi > ul > li').removeClass('active');
		var subDiv=$(this).next();
		$('#subNav .navi_sub').hide();
		$(this).parent().addClass('active').end().next().show();
		return false;
	});
	$('#subNav .close, #allNavBtn').click(function(){
		$('#subNav').animate({'width':subW},250, function(){
			$('#subNav .navi_sub').hide();
			$('#subNav .navi').css('width','auto');
			$('#subNav').removeClass('on');
		});
		return false;
	});

	$('.navi_sub ul ul').hide();
	$('.navi_sub > ul > li > a').click(function(){
		var subUl=$(this).next();
		if(subUl.is(':visible')){
			$('.navi_sub ul ul:visible').slideUp();
		};
		if(!subUl.is(':visible')){
			$('.navi_sub > ul >li').removeClass('active');
			$(this).parent().addClass('active');
			$('.navi_sub ul ul:visible').slideUp();
			subUl.slideDown();
		}
		if(subUl.is('ul')){
			return false;
		}
	});

	$('body').click(function(e){ //영역외 클릭시
		if($('#allNav .navi').css('display') == 'block'){
			if(!$('#allmn').has(e.target).length){
				$('#allNav .navi').slideUp();
				$('#allNavBtn').removeClass('on');
			}
		}

		if($('#subNav .navi').outerWidth() == subNav){
			if(!$('#subNav').has(e.target).length){
				$('#subNav').animate({'width':subW},250, function(){
					$('#subNav .navi_sub').hide();
					$('#subNav .navi').css('width','auto');
					$('#subNav').removeClass('on');
				});
			}
		}

/*
메뉴공통 2뎁스 서브메뉴슬라이드토글
		if((subUl.is('ul')) && (subUl.is(':visible'))){
			$('.navi_sub ul ul:visible').slideUp();
		};
		if((subUl.is('ul')) && (!subUl.is(':visible'))){
			$('.navi_sub > ul >li > a').removeClass('active');
			$(this).addClass('active');
			$('.navi_sub ul ul:visible').slideUp();
			subUl.slideDown();
		}


		if($('#subNav .sub_mn').css('margin-left') == '0px'){
			if(!$('#subNav').has(e.target).length){
				$('#subNav').animate({'width':'69px'});
				$('#subNav .sub_mn').animate({'marginLeft':'-238px'},300);
			}
		}
*/
		if(!$('#allmn').has(e.target).length || !$('#subNav').has(e.target).length){
		$('.navi_sub ul ul:visible').slideUp();
		}
	});
}

function tab(i, ele){
	$(i+' li').eq(0).addClass('on');
	$(ele+' > div').hide().eq(0).show();
	$(i+' li a').click(function(){
		var tabLink = $(this).attr('href');
		$(i+' li').removeClass('on');
		$(this).parent('li').addClass('on');
		$(ele+' > div').hide();
		$(tabLink).fadeIn();
		return false;
	});
}

//전체체크박스 선택유무
function allchk(ele){
	$(ele).click(function(){
		if($(ele).prop('checked')){
			$(this).parents('.down_list').find('li  input[type=checkbox]').prop('checked', true);
		}else{
			$(this).parents('.down_list').find('li input[type=checkbox]').prop('checked', false);
		}
	});
}


function layer_open(){
	var temp = $('.layer_area');
	var bg = temp.prev().hasClass('block');	//dimmed 레이어를 감지하기 위한 boolean 변수
	temp.fadeIn('fast');
	if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
	else temp.css('left', '0px');
	temp.find('a.close').click(function(e){
		$(this).parents('.layer').fadeOut('fast');
		e.preventDefault();
	});
	/*
	$('.layer .block').click(function(e){	//배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.layer').fadeOut();
		e.preventDefault();
	});
	*/
}

function popup(){
	$('.popup a.close').click(function(e){
		$(this).parents('.popup').fadeOut('fast');
		e.preventDefault();
	});
}