w.Components = {};

Vue.use(VueTouch);

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
  }
}
