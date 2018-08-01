(function(w){
"use strict";
// File D:\signup_demo\src\js\utils.js

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

// End of D:\signup_demo\src\js\utils.js
})(window);
(function(w){
"use strict";
// File D:\signup_demo\src\components\account.js

w.Components['account-info'] = {
	template: "<div class=account-description><div class=\"personal-info test\" v-if=\"(name != undefined &amp;&amp; name != null &amp;&amp; name != \'\')\"><div class=userpic v-bind:style=\"{backgroundImage: \'url(\\\'\'+pic+\'\\\')\'}\"></div><div class=name v-html=\"name &amp;&amp; name.split(\' \').join(\'<br/>\')\"></div></div><div v-if=email><div class=label-header>Почта</div><span class=text-overflow>{{email}}</span></div><div v-if=phone><div class=label-header>Телефон</div><span class=text-overflow>{{phone}}</span></div></div>",
	props: ['name', 'email', 'phone', 'pic']
}

Vue.component('account-info', w.Components['account-info']);

// End of D:\signup_demo\src\components\account.js
})(window);
(function(w){
"use strict";
// File D:\signup_demo\src\components\btn.js

w.Components['btn'] = {
  template: "<label v-bind:for=focusId class=btn v-on:click=onClick><slot></slot></label>",
  props: ['focusId', 'text'],
  methods: {
    onClick: function() {
      this.$emit('click');
    }
  }
}

Vue.component('btn', w.Components['btn']);

// End of D:\signup_demo\src\components\btn.js
})(window);
(function(w){
"use strict";
// File D:\signup_demo\src\components\field.js

w.Components['field'] = {
	template: "<label class=app-field v-bind:class=\"[ activeClass, placeClass, errorClass ]\" v-on:click=\"$emit(\'click\')\"><span class=app-field__caption>{{ dynamicLabel }}</span> <input v-if=!textarea class=app-field__input v-bind:id=[id] v-bind:name=[id] v-bind:type=type v-bind:value=value v-on:focus=setfocus($event.target.value) v-on:blur=unfocus v-on:input=\"$emit(\'input\', $event.target.value)\" v-on:change=\"$emit(\'input\', $event.target.value)\" v-bind:readonly=readonly v-bind:tabindex=tabindex> <textarea v-if=!!textarea rows=3 class=app-field__input_multiline v-bind:id=[id] v-bind:name=[id] v-on:focus=setfocus($event.target.value) v-on:blur=unfocus v-on:input=\"$emit(\'input\', $event.target.value)\" v-bind:style=fixIphone>{{ value }}</textarea></label>",
	props: ['value', 'label', 'place', 'type', 'id',  'error', 'textarea', 'readonly', 'focusId', 'tabindex'],
	model: {
		prop: 'value',
		event: 'input'
	},
	data: function() {
		return {
			focus: false,
			type: 'text',
			errorClass: '',
			errorType: this.error,
			dynamicLabel: this.label,
			styleObjTextarea: {}
		}
	},
	watch: {
		'error': function(val) {
			this.errorType = val;
			this.$nextTick(function() { this.dynLabel(); });
		}
	},
	computed: {
		activeClass: function() {
			if (this.focus || this.value && this.value.length != 0) {
				return 'focus';
			} else {
				return '';
			}
		},
		placeClass: function() {
			return ['top', 'bottom', 'middle', 'single'].indexOf(this.place) != -1 ? this.place : 'single';

		},
		fixIphone: function() {
			if(navigator.userAgent.indexOf('iPhone') != -1) {
				return { marginLeft: '-3px'};
			}

			return {};
		}
	},
	methods: {
		unflagError: function() {

			this.errorType = null;
			this.error = '';
			this.dynLabel();
		},
		dynLabel: function() {

			if (this.errorType && w.Data.formErrors[this.errorType]) {
				this.errorClass = 'app-field_error';
				this.dynamicLabel = w.Data.formErrors[this.errorType];
			} else {
				this.errorClass = '';
				this.dynamicLabel = this.label;
			}
		},
		unfocus: function( val ) {
			this.focus = false;
		},
		setfocus: function( val ) {
			this.focus = true;
			window.requestAnimationFrame(function() {
					window.Data.p.focusViewportHeight = window.innerHeight;
			});
			this.$emit('input', val);
		}
	}
};

Vue.component('field', w.Components['field']);

// End of D:\signup_demo\src\components\field.js
})(window);
(function(w){
"use strict";
// File D:\signup_demo\src\components\popup.js

w.Components['popup'] = {
	template: "<transition name=popup-transition><div class=popup-backdrop v-show=isOpen><div class=popup-content><slot></slot></div></div></transition>",
	props: ['isOpen'],
	data: function () {
		return {

		}
	},

}

Vue.component('popup', w.Components['popup']);

// End of D:\signup_demo\src\components\popup.js
})(window);
(function(w){
"use strict";
// File D:\signup_demo\src\components\uploader.js

w.Components['uploader'] = {
  props: ['type', 'label', 'labelLoading', 'labelDone', 'labelError', 'id', 'accept', 'subscript', 'displayValue', 'src', 'accept'],
  template: "<label class=\"app-field upload-field\" v-bind:class=\"{loading: isLoading, loaded: (!isLoading &amp;&amp; (displayValue &amp;&amp; displayValue !== \'\' || src &amp;&amp; src !==\'\')), focus: (displayValue &amp;&amp; displayValue != \'\' &amp;&amp; type == \'file\'), \'avatar-layout\': (type == \'avatar\')}\" v-on:click=\"$emit(\'click\')\"><span class=app-field__caption>{{ dynamicLabel }} <span class=subscript v-if=subscript>{{ subscript }}</span> </span><span class=app-field__input v-html=\"type == \'avatar\' ? \'\' : content\" v-bind:style=styleObject></span><div class=upload-field__icon><svg width=32 height=32 viewBox=\"0 0 32 32\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><g id=Canvas fill=none><g id=plus><circle id=Ellipse cx=16 cy=16 r=16 fill=#E3E3E3></circle><rect id=\"Rectangle 2\" width=2 height=16 transform=\"translate(15 8)\" fill=white></rect><rect id=Rectangle width=16 height=2 transform=\"translate(8 15)\" fill=white></rect></g></g></svg></div><div class=upload-field__loading><div class=spinner></div></div><input class=upload-field__hidden-input v-bind:id=[id] type=file v-bind:accept=accept v-on:change=onUpload($event.target)></label>",
  data: function() {
    return {
      content: this.displayValue,
      type: 'file', // < file | avatar >
      errorClass: '',
      errorType: this.error,
      dynamicLabel: this.label,
      styleObject: {},
      name: null,
			src: '',
			isLoading: false,
			accept: ''
    }
  },
  watch: {
		'src': function(val) {
			this.src = val;
      this.styleObject = {
        backgroundImage: 'url("' + this.src + '")'
      };
		},
		'displayValue': function(val) {
			this.content = val;
		}
	},
  methods: {
    onUpload: function(elem) {
      // console.dir(elem);

      // if(!elem.files[0]) return;

      // this.name = elem.files[0].name;

      // if(this.type == "file") {
      //   this.uploadDiploma(elem);
      // } else if (this.type == "avatar") {
      //   this.uploadAvatar(elem);
      // }

			// this.$emit('upload', elem.files[0].name);
			this.dynamicLabel = this.labelLoading;
			this.isLoading = true;
			this.$emit('change', elem, _.bind(function(success) {
				this.isLoading = false;
				if(success == true) {
					this.dynamicLabel = this.labelDone;
				} else {
					this.dynamicLabel = this.labelError;
				}
			}, this));
    }
  }

}

Vue.component('uploader', w.Components['uploader']);

// End of D:\signup_demo\src\components\uploader.js
})(window);
(function(w){
"use strict";
// File D:\signup_demo\src\js\main.js

w.Data = {
	current: 'main', // current screen

	// creds
	email: '',
	isValidEmail: false,
	isExistingAccount: false,
	isSocialAuth: false, // false or id:['vk', 'fb']
	smsCode: '',
	canRequestSmsCode: true,
	smsCodeCountdown: 0,
	countdownInterval: null,
	codeSessionId: '',
	password: '',
	phone: '',
	isValidPhone: false,
	diplomaCode: '',
	diplomaDate: '',
	isValidCode: false,
	hasModal: false,
	typeModal: 'mErrorNewUser', // < reg | existing | eduselect >
	imageTypes: 'image/*',
	imageAndPdfsTypes: 'image/*,.pdf',
	
	p: {
		focusViewportHeight: window.innerHeight
	},

	main: {
		loginField: '',
		isErrorPass: false,
		validLogin: false,
		isErrorLogin: false,
		suggestRestoreAccess: false,
		sendingRequest: false
	},
	social: {
		prev: '', // 0 - registration, 1 - login
		app: 'vk' // ['vk', 'fb']
	},
	registration: {
		suggestedEduItems: window._he,
		_transitionSelectEdu: false,
		suggestedMajorItems: window._he,
		_transitionSelectMajor: false,
		suggestReg: false,
		socialReg: false,
		restoreForm: false,
		existingInfo: {},
		state: 0, // < 0 | 1>
		avatarSrc: null,
		// personal
		fsurname: '',
		fname: '',
		fmiddlename: '',
		fbirthyear: '',
		fsex: '',

		// education
		defaultEdu: { Id: -1, Name: '' },
		defaultMajor: { Id: -1, Name: '' },
		fhigheredu: { Id: -1, Name: '' },
		fmajor: { Id: -1, Name: '' },
		fdocument: '',
		fgraduationyear: '',
		hasDiploma: false,

		// work
		foccupation: '',
		fjobtitle: '',
		fspecialty: '',

		// personal 2
		fphone: '',
		fsocialapps: [],
		foldpass: '',
		fnewpass: '',

	},
	restore: {
		accData: {},
		accountId: '',
		validAccount: false,
		error: false,
		state: 0, // 0 - запрос идентификатора, 1 - пароль на почту или соц. сеть, 2 - телефон, 3 - диплом
		form: 'https://docs.google.com/forms/d/e/1FAIpQLSdQppOFU75_mrrfzUtfR-sFexdB1J7M0ic9LQ1KdAWrWssGcA/viewform'
	},

	appNames: {
		'vk': 'Вконтакте',
		'fb': 'Фэйсбук'
	},

	formErrors: {
		'wrongpass': 'Неверный пароль',
		'unknownnumber': 'Номер не зарегистрирован',
		'unknownrestore': 'Профиль не найден'
	}
}

w.App = new Vue({
	data: w.Data,
	mounted: function() {
		if (this.current === 'registration2') {
			w.utils.ajax({
				url: '/Doctor/FirstAjax',
				method: 'GET',
				data: {
					fromWaitPage: false
				}
			}).then(_.bind(function (response) {
				this.main.sendingRequest = false;

				var responseData = JSON.parse(response) || {};
				if (!responseData.ViewModel) {
					if (responseData.RedirectUrl) {
						window.location.href = responseData.RedirectUrl;
					} else {
						w.utils.showErrorMessage();
					}
				} else {
					var viewModel = responseData.ViewModel;

					this.registration.fsurname = viewModel.LastName;
					this.registration.fname = viewModel.FirstName;
					this.registration.fmiddlename = viewModel.Patronymic;
					this.registration.fspecialty = viewModel.AboutMe;
					this.registration.foccupation = viewModel.WorkOrganization;
					this.registration.fjobtitle = viewModel.WorkPosition;

					w._he = viewModel.AllUniversities.Options;
					this.registration.suggestedEduItems = w._he;
					var selectedUniversity = this.registration.suggestedEduItems.filter(function (e) {
						return e.Id === viewModel.UniversityId;
					});

					if (selectedUniversity[0]) {
						this.registration.fhigheredu = selectedUniversity[0];
					}

					w._majors = viewModel.AllSpecialties.Options;
					this.registration.suggestedMajorItems = w._majors;
					var selectedMajor = this.registration.suggestedMajorItems.filter(function (e) {
						return e.Id === viewModel.SpecialityId;
					});

					if (selectedMajor[0]) {
						this.registration.fmajor = selectedMajor[0];
					}

					var graduatedAt = w.utils.aspnetDatetimeToUnix(viewModel.GraduatedAt);
					if (graduatedAt || graduatedAt === 0) {
						this.registration.fgraduationyear = new Date(graduatedAt).getFullYear().toString();
					} else {
						this.registration.fgraduationyear = '';
					}
					
					this.registration.hasDiploma = viewModel.CountDiploma > 0;
					this.email = viewModel.Email;
					this.registration.foldpass = viewModel.Password;
					this.registration.fnewpass = viewModel.Password.toString();
					this.registration.avatarSrc = viewModel.AvatarUrl;
					this.registration.fphone = viewModel.MobilePhone;
				}
			}, this), _.bind(function (error) {
				this.main.sendingRequest = false;
				w.utils.showErrorMessage();
			}, this));
		}
	},
	computed: {
		restoreText: function() {
			if (this.main.isErrorPass == 'wrongpass') {
				return 'Я не помню пароль';
			} else {
				return 'Я не могу войти';
			}
		}
	},
	methods: {
		_route: function( cb, scroll = true ) {
			if(scroll) {
				window.scrollTo(0, 0);
			}

			if(typeof cb == 'function') {
				cb();
			} else if( typeof cb == 'string') {
				this.current = cb;
			}
		},
		cleanSlate: function() {
			this.email = '';
			this.isValidEmail = false;
			this.isValidPhone = false;
			this.isExistingAccount = false;
			this.isSocialAuth = false;
			this.phone = '';
			this.passwd = '';
		},
		clearModals: function() {
			this.hasModal = false;
		},
		headerBack: function() {
			if(this.current == 'restore' && this.restore.state != 0) {
				this.restore.state = 0;
			} else if (this.current === 'registration2') {
				this.registration.state = 0;
			}
			else {
				this._route('main');
			}
		},
		routeHome: function() {
			this._route('main');
		},
		routeSocial: function(app) {
			try {
				/* External dependency */
				window.location.href = window.AuthProviders.getProviders()[app];
			} catch (error)
			{
				console.error(error);
			}
		},
		routeFeed: function() {
			
		},
		checkLogin: function(btn) {
			if (!this.main.validLogin || this.main.sendingRequest) {
				return;
			}

			var body = {
				Email: this.email || this.phone,
				Password: this.password
			};

			w.utils.toggleLoad(btn, true);
			this.main.sendingRequest = true;
			w.utils.ajax({
				url: '/Account/LogonAjax',
				method: 'POST',
				data: body
			}).then(_.bind(function(response){
				var responseData = JSON.parse(response) || {};
				if (responseData.RedirectURL) {
					window.location.href = responseData.RedirectURL;
				} else {
					w.utils.toggleLoad(btn, false);
					this.main.sendingRequest = false;

					this.main.isErrorPass = responseData.Error;
					this.main.validLogin = false;
					this.typeModal = 'mErrorNewUser';
					this.hasModal = true;
				}
			}, this), _.bind(function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				w.utils.showErrorMessage();
			}, this));

		},
		onSocialNext: function() {
			
		},
		validateEmail: function(val) {
			// return this.isValidEmail = (val.indexOf('@') != -1);
			// var val = val.toLowerCase();
			this.email = val.toLowerCase();
			return this.isValidEmail = /[^\.@]+@[^\.@]+\.[^\.@]+/i.test(val);
		},
		validatePhone: function(val) {
			var _val = val.trim();
			_val = _val.replace(/[- \(\)]/g, '');

			return this.isValidPhone = /^(\+7|8)?[0-9]{10}$/i.test(_val);
		},
		checkUser: function() {
			var _email = '';

			if (this.email && this.isValidEmail) {
				_email = this.email;
			} else if (this.phone && this.isValidPhone) {
				this.phone = this.phone.replace(/^(\+7|8)/, '');
			} else {
				return undefined;
			}

			return result;
		},
		routeRegStepOne: function( erase ) {
			this.registration.socialReg = false;
			this.registration.suggestReg = false;

			var erase = !!(erase);
			if(erase) this.cleanSlate();

			this.clearModals();

			this._route('registration1');
		},
		routeRegStepTwo: function(btn) {
			if(!this.isValidEmail || this.main.sendingRequest)
				return;

			w.utils.toggleLoad(btn, true);
			this.main.sendingRequest = true;
			w.utils.ajax( {
				url: '/Account/DoctorRegistrationAjax',
				method: 'POST',
				data: { login: this.email }
			}).then(_.bind(function(response) {
				w.utils.toggleLoad(btn, false);

				var responseData = JSON.parse(response || '');
				if (responseData.Data) {
					window.location.href = responseData.Data;
					return;
				}

				this.main.sendingRequest = false;

				this.hasModal = this.email && this.isValidEmail;
				this.typeModal = 'mErrorExistingUser';
			}, this), _.bind(function (error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				console.error(error);
				w.utils.showErrorMessage();
			}, this));
		},
		cantLogin: function(ev) {
			this.clearModals();
			this._route('restore');
		},
		restorePassFocus: function() {
			if(this.current == 'main') return 'main-screen-email';
			if(this.current == 'restore') return 'registration-1-screen-email'
		},
		startSmsCodeCountdown: function() {
			window.clearInterval(this.countdownInterval);
			this.smsCodeCountdown = 45;
			this.countdownInterval = window.setInterval(_.bind(function () {
				this.smsCodeCountdown -= 1;
				if (this.smsCodeCountdown <= 0) {
					window.clearInterval(this.countdownInterval);
					this.canRequestSmsCode = true;
				}
			}, this), 980);
		},
		initRestore: function(btn) {
			if(this.restore.accountId == '' || this.main.sendingRequest || !this.restore.validAccount)
				return;
			
			this.main.sendingRequest = true;
			w.utils.toggleLoad(btn, true);
			this.canRequestSmsCode = false;
			w.utils.ajax({
				url: '/Account/FindUser',
				method: 'GET',
				data: {
					term: this.restore.accountId
				}
			}).then(_.bind(function(response){
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;

				var responseData = JSON.parse(response);
				if (responseData.Data) {
					var userAuthMethods = responseData.Data;
					this.restore.accData.email = userAuthMethods.Email;
					this.restore.accData.phone = userAuthMethods.Phone;
					this.codeSessionId = userAuthMethods.CodeSessionId;
					if (userAuthMethods.Phone && this.codeSessionId) {
						/* via mobile */
						this.restore.state = 2;
						this.startSmsCodeCountdown();
					} else {
						this.restore.accData.app = userAuthMethods.AuthProviders || [];

						/* via sc/email */
						this.restore.state = 1;
					}
				}
				else if (responseData.Error) {
					// нет такого пользователя
					this.restore.validAccount = false;
					this.restore.error = 'unknownrestore';
				}
				else {
					console.log(responseData.Error);
					w.utils.showErrorMessage();
				}
			}, this), _.bind(function(error) {
				this.main.sendingRequest = false;
				w.utils.showErrorMessage();
			}, this));
		},
		validateRestoreField: function() {
			this.restore.error = '';
			if( this.validateEmail(this.restore.accountId) ) {
				this.phone = '';
				this.isValidPhone = false;
				this.email = this.restore.accountId;
				this.isValidEmail = true;
			} else if( this.validatePhone(this.restore.accountId) ) {
				this.email = '';
				this.isValidEmail = false;
				this.phone = this.restore.accountId;
				this.isValidPhone = true;
			}

			if(
				(this.email != '' && this.isValidEmail) ||
				(this.phone != '' && this.isValidPhone)
			) {
				this.restore.validAccount = true;
			} else {
				this.restore.validAccount = false;
			}
		},
		checkSmsCode: function () {
			if(this.smsCode == '') return;

			var matching = this.smsCode.toString().match(/^\d{4}$/);
			this.isValidCode = matching && matching.length === 1;
		},
		loginCode: function(btn) {
			if (this.main.sendingRequest || !this.isValidCode)
				return;

			w.utils.toggleLoad(btn, true);
			this.main.sendingRequest = true;
			w.utils.ajax({
				url: '/Account/ValidateCode',
				method: 'POST',
				data: {
					code: this.smsCode,
					codeSessionId: this.codeSessionId
				}
			}).then(_.bind(function(response) {
				var responseData = JSON.parse(response || '');
				if(responseData.IsSuccess) {
					window.location.href = '/';
					return;
				}
				
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;

				w.utils.showErrorMessage('Проверьте код подтверждения');
			}, this), _.bind(function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				w.utils.showErrorMessage();
			}, this));
		},
		tryDiploma: function() {
			this.restore.state = 3;
		},
		checkDiploma: function() {
			if(this.diplomaCode && this.diplomaDate && this.phone) {

				if(this.diplomaCode == this.restore.accData.diploma[0] && this.diplomaDate == this.restore.accData.diploma[1]) {
					this.routeHome();
				}

			}
		},
		validateLogin: function( clearPassErr ) {
			if( this.validateEmail(this.main.loginField) ) {
				this.phone = '';
				this.isValidPhone = false;
				this.email = this.main.loginField;
				this.isValidEmail = true;
			} else if( this.validatePhone(this.main.loginField) ) {
				this.email = '';
				this.isValidEmail = false;
				this.phone = this.main.loginField;
				this.isValidPhone = true;
			}

			if(
				(this.email != '' && this.isValidEmail && this.password != '') ||
				(this.phone != '' && this.isValidPhone && this.password != '')
			) {
				this.main.validLogin = true;
			} else {
				this.main.validLogin = false;
			}

			if(clearPassErr) {
				this.main.isErrorPass = '';
			}

			return true;
		},
		scrollLogin: function() {
			// var top = this.$refs.signInBlock.offsetTop;
			// w.utils.scrollTop(top + 16, false, 250);
		},
		restoreForm: function() {
			this.registration.restoreForm = true;
			this.routeRegStepTwo();
		},
		openEduSelect: function() {
			this.hasModal = true;
			this.typeModal = 'mChooseEdu';
			return true;
		},
		openMajorSelect: function () {
			this.hasModal = true;
			this.typeModal = 'mChooseMajor';
			return true;
		},
		retryPass: function() {
			this.clearModals();
			this.routeHome();
			return true;
		},
		focusSelectEdu: function() {
		},
		sortEduList: function () {
			this.$refs['mErrorNewUserList'] && this.$refs['mErrorNewUserList'].scrollTo(0, 0);

			if (this.registration.fhigheredu.Name !== '') {
				this.registration.suggestedEduItems = w.utils.filterSubstr(
					this.registration.fhigheredu.Name,
					w._he,
					function (e){ return e.Name; }
				);
			} else {
				this.registration.suggestedEduItems = w._he;
			}
		},
		applySelectedEdu: function (elem, item) {
			// this.registration._transitionSelectEdu = true;
			// elem.dataset.selected = true;
			this.registration.fhigheredu = item;
			setTimeout(_.bind(function () { this.registration._transitionSelectEdu = false; this.hasModal = false; }, this), 300);
		},
		sortMajorList: function () {
			this.$refs['mErrorNewUserList'] && this.$refs['mErrorNewUserList'].scrollTo(0, 0);

			if (this.registration.fmajor.Name !== '') {
				this.registration.suggestedMajorItems = w.utils.filterSubstr(
					this.registration.fmajor.Name,
					w._majors,
					function (e){ return e.Name; }
				);
			} else {
				this.registration.suggestedMajorItems = w._majors;
			}
		},
		applySelectedMajor: function (elem, item) {
			// this.registration._transitionSelectEdu = true;
			// elem.dataset.selected = true;
			this.registration.fmajor = item;
			setTimeout(_.bind(function () { this.registration._transitionSelectEdu = false; this.hasModal = false; }, this), 300);
		},
		saveRegBlank: function(btn) {
			if (this.main.sendingRequest)
				return;

			var graduationYearMatching = this.registration.fgraduationyear.match(/^\d{4}$/);
			if (!graduationYearMatching || graduationYearMatching.length === 0) {
				w.utils.showErrorMessage("Некорректный год окончания ВУЗа.");
				return;
			}

			var graduationYear = +graduationYearMatching[0];
			if (graduationYear > new Date().getFullYear() || graduationYear < 1900) {
				w.utils.showErrorMessage("Некорректный год окончания ВУЗа.");
				return;
			}

			this.main.sendingRequest = true;
			w.utils.toggleLoad(btn, true);

			var body = {
				LastName: this.registration.fsurname,
				FirstName: this.registration.fname,
				Patronymic: this.registration.fmiddlename,
				AboutMe: this.registration.fspecialty,
				WorkOrganization: this.registration.foccupation,
				WorkPosition: this.registration.fjobtitle,
				DontWork: false,
				NotDoctor: false,
				UniversityId: this.registration.fhigheredu.Id === -1 ? null : this.registration.fhigheredu.Id,
				SpecialityId: this.registration.fmajor.Id === -1 ? null : this.registration.fmajor.Id,
				GraduatedAt: new Date(graduationYear, 6, 1).toISOString(),
				NewPassword: this.registration.fnewpass && this.registration.foldpass !== this.registration.fnewpass ? this.registration.fnewpass : null,
				MobilePhone: this.registration.fphone
			};

			w.utils.ajax({
				url: '/Doctor/FirstAjax',
				method: 'POST',
				data: body
			}).then(_.bind(function(response){
				this.main.sendingRequest = false;
				w.utils.toggleLoad(btn, false);

				var responseData = JSON.parse(response) || {};
				if (!responseData.ViewModel) {
					if (responseData.RedirectUrl) {
						window.location.href = responseData.RedirectUrl;
					} else {
						w.utils.showErrorMessage();
					}
				} else {
					var viewModel = responseData.ViewModel;
				}
			}, this), _.bind(function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				console.error(error);
				w.utils.showErrorMessage();
			}, this));
		},
		requestPassbyEmail: function(btn) {
			if (this.main.sendingRequest)
				return;

			this.main.sendingRequest = true;
			w.utils.toggleLoad(btn, true);
			w.utils.ajax({
				url: '/Account/GetNewCodeAjax',
				method: 'POST',
				data: {
					Email: this.restore.accountId
				}
			}).then(_.bind(function(response){
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;

				var responseData = JSON.parse(response || '');

				if (!responseData || !responseData.Success) {
					console.error(response);
					w.utils.showErrorMessage();
					return;
				}

				this.password = '';
				this.routeHome();

				setTimeout(_.bind(function() {
					alert('Пароль отправлен на почту');
				}, this), 200);
			}, this), _.bind(function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				console.error(error);
				w.utils.showErrorMessage();
			}, this));
		},
		uploadDiploma: function(input, cb) {
			if (input.files.length === 0) {
				return;
			}
			
			this.registration.fdocument = input.files[0].name;

			var body = new FormData();
			body.append(input.files[0].name, input.files[0]);
			
			w.utils.ajax({
				url: '/Diploma/Upload',
				method: 'POST',
				contentType: 'multipart/form-data',
				data: body
			}).then(function(response){
				cb(true);
			}, function(error) {
				console.error(error);
				cb(false);
			});
		},
		uploadAvatar: function(input, cb) {
			if (input.files.length === 0) {
				return;
			}
			
			var body = new FormData();
			body.append(input.files[0].name, input.files[0]);
			
			w.utils.ajax({
			  url: '/FileUpload.ashx?TypeID=2&ID=0',
			  method: 'POST',
			  contentType: 'multipart/form-data',
			  data: body
			}).then(_.bind(function (response) {
				this.registration.avatarSrc = response;
				cb(true);
			}, this), function(error) {
				console.error(error);
				cb(false);
			});
		}
	},
	watch: {
		'email': function() {
			this.main.loginField = this.email;
			this.restore.accountId = this.email;
		},
		'phone': function() {
			this.main.loginField = this.phone;
			this.restore.accountId = this.phone;
		}
	}
});

App.$mount('#app');

// End of D:\signup_demo\src\js\main.js
})(window);