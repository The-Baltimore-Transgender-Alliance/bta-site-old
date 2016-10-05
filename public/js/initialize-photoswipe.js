var pswpElement = $('.pswp')[0];
var options = {};

var galleryElements = $('.gallery-images');

_.forEach(galleryElements, e => {
	var imgs = $(e).find('img.gallery-image');
	_.forEach(imgs, (img, i) => {
		options.index = i;
		$(img).click(() => {
			var items = parseThumbnails(imgs);
			var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		});
	});
});

var parseThumbnails = function (imgs) {
	var width = $(document).width();
	var height = $(document).height();
	var items = _.map(imgs, img => {
		var dims = fitImage($(img).attr('lrg-w'), $(img).attr('lrg-h'), width, height);
		return {
			src: $(img).attr('lrg'),
			w: dims.w,
			h: dims.h,
		};
	});
	return items;
};

var fitImage = function (w, h, docW, docH) {
	var obj = {};
	var marginTop = 100;
	var marginBot = 100;
	var maxWidth = docW - marginBot;
	var maxHeight = docW - marginTop;
	var ratio;
	// var ratio = maxWidth / maxHeight;
	// var imgRatio = w / h;
	if (w <= maxWidth && h <= maxHeight) {
		obj.w = w;
		obj.h = h;
	} else if (w <= maxWidth && h > maxHeight) {
		ratio = maxHeight / h;
		obj.w = w * ratio;
		obj.h = maxHeight;
	} else if (w > maxWidth && h <= maxHeight) {
		ratio = maxWidth / w;
		obj.w = maxWidth;
		obj.h = h * ratio;
	} else if (w > maxWidth && h > maxHeight) {
		var wRatio = maxWidth / w;
		var hRatio = maxHeight / h;
		if (wRatio >= hRatio) {
			obj.w = maxWidth;
			obj.h = h * wRatio;
		} else {
			obj.w = w * hRatio;
			obj.h = maxHeight;
		}
	}
	return obj;
};


// build items array
// var items = [
//     {
//         src: 'https://placekitten.com/600/400',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'https://placekitten.com/1200/900',
//         w: 1200,
//         h: 900
//     }
// ];

// define options (if needed)
// var options = {
//     // optionName: 'option value'
//     // for example:
//     index: 0 // start at first slide
// };

// Initializes and opens PhotoSwipe
// var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
// gallery.init();

// var initializePhotoSwipeGallery = function(urls, index) {
//
// };
