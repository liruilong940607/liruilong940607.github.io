//-------------------------------------------------------------------------------------
//
// THIS FILE IS NOT A PART OF THE PLUGIN, IT'S ONLY FOR THE DEMO
//
//-------------------------------------------------------------------------------------
!(function(){
    'use strict';

	var dir = "https://people.eecs.berkeley.edu/~ruilongli/photobox/photos_small/";
	var fileextension = ".JPG";
	var gallery = $('#gallery');
	// console.log($.find("a:contains(" + fileextension + ")"))

	$.ajax({
		url: dir,
	})
	.done(function (data){
		var loadedIndex = 1;

		$(data).find("a:contains(" + fileextension + ")").each(function () {
			var filename = this.href.split('/').reverse()[0]
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
		});

		// finally, initialize photobox on all retrieved images
		$('#gallery').photobox('a', { thumbs:true, loop:false }, callback);
		// using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
		setTimeout(window._photobox.history.load, 2000);
		function callback(){
			console.log('callback for loaded content:', this);
		};
	});
})();