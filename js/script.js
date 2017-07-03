$(document).ready(function(){
	$(".downloadImg").click(function(){
		$(".conf-menu").hide();
		html2canvas(document.body, {
			width: 1200
		}).then(function(canvas) {
			$(".sreenshot").append(canvas);
			$('.sreenshot canvas').attr("id","screenCanvas");
			
			$(".conf-menu").show();
			makeIT();
        });
	});
	
	$(".conf-btn.js-application").click(function(){
		$(".popup_application.sucsess").remove();
		$(".conf-menu").hide();
		html2canvas(document.body, {
			width: 1000,
		}).then(function(canvas) {
			$(".sreenshot").append(canvas);
			$('.sreenshot canvas').attr("id","screenCanvas");
			
			
			$(".conf-menu").show();
			showPopup();
        });
	});
});

function showPopup()
{
	//���� �� �������� ������ ���� canvas, �� ����� ���:
	var can = document.getElementById("screenCanvas");
	
	//�������� �������� � base64
	var data = can.toDataURL('image/png').replace(/data:image\/png;base64,/, '');
	
	
	
	//��� ��������� �������� �������� ��������� canvas
	$('.sreenshot canvas').remove();
	
	$(".krovlyaPop .title").html($(".detail-info_item.krovlya .titleProp").html());
	$(".krovlyaPop .val").html($(".detail-info_item.krovlya .colorProp").html());
	
	$(".fasadPop .title").html($(".detail-info_item.fasad .titleProp").html());
	$(".fasadPop .val").html($(".detail-info_item.fasad .colorProp").html());
	
	$(".vodostokPop .title").html($(".detail-info_item.vodostok .titleProp").html());
	$(".vodostokPop .val").html($(".detail-info_item.vodostok .colorProp").html());
	
	$(".zaborPop .title").html($(".detail-info_item.ograjdenie .titleProp").html());
	$(".zaborPop .val").html($(".detail-info_item.ograjdenie .colorProp").html());
	
	//�������� �����
	$('.popup_application').toggleClass('popup-show');
	$('.popup_bg').toggleClass('is-visible');
	$('body').toggleClass('body-popup');
	$(".popup_info .detail-info_list").show();
		
		
	//�������� �������� �� ������
	$.post('saveCPic.php',{data:data}, function(rep){
		
		$(".popup_img img").attr("src","/configurator/screensots/"+rep);
		$( "input[name='form_text_5']" ).val("http://sevstroytorg.com/configurator/screensots/"+rep);
	});
}
	
	
function makeIT()
	{
		//���� �� �������� ������ ���� canvas, �� ����� ���:
		var can = document.getElementById("screenCanvas");
		
		//�������� �������� � base64
		var data = can.toDataURL('image/png').replace(/data:image\/png;base64,/, '');
		
		
		
		//��� ��������� �������� �������� ��������� canvas
		$('.sreenshot canvas').remove();

		//�������� �������� �� ������
		$.post('saveCPic.php',{data:data}, function(rep){
			console.log("saved");
			//window.open("/configurator/screensots/"+rep, '_blank');
			window.location.href = "download.php?file="+rep;
		});
	}