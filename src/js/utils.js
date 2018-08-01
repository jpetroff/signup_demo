w.Components = {};

w.utils = {
  updateDOM: function( fn, ctx ) {
		var methodFn = _.defer;
		if(typeof w.requestAnimationFrame == 'function') {
			methodFn = w.requestAnimationFrame;
		}

		if(!ctx) {
			return methodFn( fn );
		} else {
			return methodFn( _.bind(fn, ctx) );
		}
	},
  scrollTop: function(_val, _animate, _time_ms, cb) {
		var animate = (typeof _animate != 'undefined') ? _animate : true;
		var val = parseInt(_val);

		if(animate == false) {
			w.utils.updateDOM( function() {
				w.scrollTo(0, val);
			});
		} else {
			//with animation
			var from = w.pageYOffset;
			var by = _val - from;
      var time = parseInt(_time_ms) / 1000;

			var currentIteration = 0;

			/**
			 * get total iterations
			 * 60 -> requestAnimationFrame 60/second
			 * second parameter -> time in seconds for the animation
			 **/
			var animIterations = Math.round(60 * time);

			(function scroll() {
				var value = w.utils.easeInCubic(currentIteration, from, by, animIterations);
				w.scrollTo(0, value);
				currentIteration++;
				if (currentIteration < animIterations) {
					requestAnimationFrame(scroll);
				} else if(typeof cb == 'function') {
					cb();
				}
			})();
		}
	},
	easeOutCubic: function(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
	},
	easeInCubic: function(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * Math.pow(currentIteration / totalIterations, 3) + startValue;
	},
	filterSubstr( _str, arr, propertySelector) {
		var str = _str.trim().toLowerCase();
		var result = [];
		arr.forEach(function(_elem) {
			var property = propertySelector ? propertySelector(_elem) : _elem;
			var elem = property.toLowerCase();
			if(elem.indexOf(str) != -1) {
				result.push(_elem);
			}
		});

		result.sort(function(a, b) {
			var aProp = propertySelector ? propertySelector(a) : a;
			var bProp = propertySelector ? propertySelector(b) : b;
			return (aProp.toLowerCase().indexOf(str) - bProp.toLowerCase().indexOf(str));
		});

		return result;
	},

	_fakeLoad: function(elem, ctx, fn) {
		if(!elem || !elem.classList) {
			return;
		}

		var loadingT = Math.round( Math.random() * 1500 ) + 500;
		elem.classList.add('loading');
		
		setTimeout(function() {
			w.requestAnimationFrame(function() { elem.classList.remove('loading')} );
			fn.apply(ctx);
		}, loadingT);
	},

	toggleLoad: function(elem, on = true) {
		if(!elem || !elem.classList) {
			console.dir(elem);
			console.trace();
			return;
		}
		
		elem.classList.toggle('loading', on);
	},

	// TODO: add Promise polyfill
	ajax: function(opts) {
		var data = opts.data || null;
		var method = typeof opts.method !== 'undefined' ? opts.method : 'GET';
		var url = opts.url;
		var contentType = opts.contentType || "application/x-www-form-urlencoded";

		if (!url) return new Promise(function(resolve,reject){reject(Error('No URL provided'))});

		var query = [];
		if (data != null && typeof data == 'object' && (method == 'POST' && contentType === "application/x-www-form-urlencoded" || method !== 'POST')) {
			for (var key in data) {
				if (!data.hasOwnProperty(key))
					continue;

				query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			}
			data = query.join('&');

			if ('' == data) data = null;
		}

		return new Promise(function(resolve, reject) {
			// Do the usual XHR stuff
			var req = new XMLHttpRequest();

			if (method == 'POST') {
				req.open(method, url);
			} else {
				req.open(method, url+'?'+data);
			}

			if (method == 'POST' && contentType !== 'multipart/form-data') {
				req.setRequestHeader("Content-type", contentType);
			}
			
			req.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			req.onreadystatechange = function(e) {
				if (req.readyState == 4) {
					// This is called even on 404 etc
					// so check the status
					if (req.status >= 200 && req.status < 300) {
						// Resolve the promise with the response text
						resolve(req.response);
					} else {
						// Otherwise reject with the status text
						// which will hopefully be a meaningful error
						reject(Error(req.statusText));
					}
				 }
			};

			// Handle network errors
			req.onerror = function() {
				reject(Error("Network Error"));
			};

			// Make the request
			if (method == 'POST' && data) {
				req.send(data);
			} else {
				req. send();
			}

		})
	},

	showErrorMessage: function(msg) {
		alert(msg || 'Что-то пошло не так, пожалуйста, попробуйте позже');
	},
	aspnetDatetimeToUnix: function(value) {
		if (typeof value === 'string') {
			var d = /\/Date\((-?\d*)\)\//.exec(value);
			return (d) ? new Date(+d[1]) : value;
		}

		return null;
	}
}
w._majors = [];
w._he = [];
