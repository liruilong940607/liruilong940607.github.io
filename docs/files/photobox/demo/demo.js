//-------------------------------------------------------------------------------------
//
// THIS FILE IS NOT A PART OF THE PLUGIN, IT'S ONLY FOR THE DEMO
//
//-------------------------------------------------------------------------------------
!(function(){
    'use strict';

	var dir = "./photos_small/";
	var fileextension = ".JPG";
	var gallery = $('#gallery');
	// console.log($.find("a:contains(" + fileextension + ")"))

	var list = [
		'2020年的出游？.JPG',
		'老孟家在七楼.JPG',
		'帆船俱乐部！.JPG',
		'好像是世博园.JPG',
		'新年好啊.JPG',
		'哈哈哈帐篷很大的样子.JPG',
		'幸福三缺一.JPG',
		'老爸与荷花.JPG',
		'两口子.JPG',
		'过年嘛.JPG',
		'帅就一个字.JPG',
		'颐和园？.JPG',
		'照相使我快乐.JPG',
		'领证那场在北京.JPG',
		'哈哈哈老爸经典姿势.JPG',
		'高高兴兴和和美美.JPG',
		'一家四口人了.JPG',
		'经典头像.JPG',
		'需要照两张.JPG',
		'又一次送机.JPG',
		'工具人老爸之背包侠.JPG',
		'小时候呢.JPG',
		'典礼结束之后的照相环节.JPG',
		'一个字帅！.JPG',
		'黄河之水？？.JPG',
		'老爸与向日葵.JPG',
		'遛弯儿.JPG',
		'这美颜开太大了吧.JPG',
		'OMG看着好厉害.JPG',
		'两口子2.JPG',
		'照相2.JPG',
		'Yeah.JPG',
		'奇怪田野.JPG',
		'谁家大院借我歇一会.JPG',
		'这是香山吗？.JPG',
		'这又是两口子的出游.JPG',
		'吃就一个字.JPG',
		'全家的御用摄影师.JPG',
		'老北京冰糖葫芦.JPG',
		'哈哈哈这个太老爸了.JPG',
		'嘿嘿嘿.JPG',
		'一家人的硕士毕业典礼.JPG',
		'第一次见亲家？.JPG',
		'姥姥姥爷的几十大寿？.JPG',
		'还有大姑哈哈.JPG',
		'这应该是我小学的时候吧.JPG',
		'发大水了.JPG',
		'城里人果然是有很多烦恼的样子.JPG',
		'进城了.JPG',
		'哈哈哈小时候的一家人.JPG',
		'电工的一面.JPG',
		'指点江山.JPG',
		'照相！.JPG',
		'小时候的春游.JPG',
	]

	var loadedIndex = 1;

	for (var filename of list) {
		// var filename = this.href.split('/').reverse()[0]
		var img = document.createElement('img');
		
		// lazy show the photos one by one
		img.onload = function(e){
			img.onload = null;
			
			var link = document.createElement('a');
			var li = document.createElement('li');
				
			link.href = this.largeUrl;

			link.appendChild(this);
			li.appendChild(link);
			gallery[0].appendChild(li);
		
			setTimeout( function(){ 
				$(li).addClass('loaded');
			}, 50 * loadedIndex++);
		};
		
		img['largeUrl'] = dir.replace("photos_small", "photos_large") + filename;
		img.src = dir + filename;
		img.title = decodeURIComponent(
			filename.replace(fileextension, "").replace("/", ""));
	};

	// finally, initialize photobox on all retrieved images
	$('#gallery').photobox('a', { thumbs:true, loop:false }, callback);
	// using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
	setTimeout(window._photobox.history.load, 2000);
	function callback(){
		console.log('callback for loaded content:', this);
	}

})();