w.Data = {
	current: 'main', // current screen

	// creds
	// email: 'e.rozhdestvenskaya@doktornarabote.cc',
	email: '',
	isValidEmail: false,
	isExistingAccount: false,
	isSocialAuth: false, // false or id:['vk', 'fb']
	smsCode: '',
	password: '',
	phone: '',
	isValidPhone: false,
	diplomaCode: '',
	diplomaDate: '',
	isValidCode: false,
	hasModal: false,
	typeModal: 'mChooseEdu', // < reg | existing | eduselect >

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
		suggestReg: false,
		socialReg: false,
		restoreForm: false,
		existingInfo: {},
		state: 0, // < 0 | 1>

		// personal
		fsurname: '',
		fname: '',
		fmiddlename: '',
		fbirthyear: '',
		fsex: '',

		// education
		fhigheredu: '',
		fmajor: '',
		fdocument: '',
		fgraduatoinyear: '',

		// work
		foccupation: '',
		fjobtitle: '',
		fspecialty: '',

		// personal 2
		fphone: '',
		fsocialapps: [],
		fnewpass: '',

	},
	restore: {
		// accData: {
		//   name: '',
		//   code: '1234',
		//   name: 'Володина Ольга Александровна',
		//   pic: '/img/userpic.jpeg',
		//   app: ['vk']
		// },
		accData: {},
		accountId: '',
		validAccount: false,
		error: false,
		state: 0, // 0 - запрос идентификатора, 1 - пароль на почту или соц. сеть, 2 - телефон, 3 - диплом
		form: 'https://docs.google.com/forms/d/e/1FAIpQLSdQppOFU75_mrrfzUtfR-sFexdB1J7M0ic9LQ1KdAWrWssGcA/viewform'
	},

	testUsers: {
		'exist@dnr.cc': {
			password: '123',
			name: 'Константинопольский Константин Константинович',
			pic: '/img/no_photo.jpeg',
			diploma: ['АБ 99999', '10.07.2017']
		},
		'exist_phone@dnr.cc': {
			password: '123',
			phone: '9647025299',
			code: '1234',
			name: 'Петров Александр Иванович',
			pic: '/img/userpic2.png',
			diploma: ['АБ 99999', '10.07.2017']
		},
		'exist_vk@dnr.cc': {
			password: '123',
			code: '1234',
			name: 'Константинопольский Александр Иванович',
			app: ['vk'],
			pic: '/img/userpic2.png',
			diploma: ['АБ 99999', '10.07.2017']
		},
		'9647025299': 'exist_phone@dnr.cc'
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
				return this.restore.state = 0;
			}
			this._route('main');
		},
		// unflagError(key) {
		// 	console.log(key);
		// 	this.$set(this, key, null);
		// },
		routeHome: function() {
			this._route('main');
		},
		routeSocial: function(app) {
			this.social.app = app;
			this.social.prev = this.current;

			if(this.social.app == 'vk') this.email = 'exist_vk@dnr.cc';
			if(this.social.app == 'fb') this.email = 'new@dnr.cc';
			this.isValidEmail = true;

			this._route('social');
		},
		routeFeed: function() {
			this._route('feed');
			setTimeout(function() {
				alert('Вы успешно авторизовались на сайте');
			}, 200);
		},
		checkLogin: function(btn) {
			if (!this.email || !this.password || !this.isValidEmail || this.main.sendingRequest) {
				return;
			}

			var body = {
				Email: this.email,
				Password: this.password
			};

			w.utils.toggleLoad(btn, true);
			this.main.sendingRequest = true;
			w.utils.ajax({
				url: '/Account/LogonAjax',
				method: 'POST',
				data: body
			}).then(_.bind(function(response){
				var reponseData = JSON.parse(response) || {};
				if(reponseData.RedirectURL) {
					window.location.href = reponseData.RedirectURL;

				} else {
					w.utils.toggleLoad(btn, false);
					this.main.sendingRequest = false;

					this.main.isErrorPass = reponseData.Error;
					this.main.validLogin = false;
					this.typeModal = 'mErrorNewUser';
					this.hasModal = true;
				}
			}, this), function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				w.utils.showErrorMessage();
			});
			
			// w.utils._fakeLoad(btn, this, function() {
			// 	if(btn && btn.classList) { btn.classList.remove('loading')}
			// 	var user = this.checkUser();

			// 	console.log(user);

			// 	if( user && user.password && this.password == user.password ) {
			// 		this.routeFeed();
			// 	} else if (user && user.password && this.password != user.password ) {
			// 		this.main.isErrorPass = 'wrongpass';
			// 		this.main.validLogin = false;
			// 		setTimeout(_.bind(function(){this.main.suggestRestoreAccess = true;}, this), 250);
			// 	} else if ( this.email && !(user && user.password) ) {
			// 		this.typeModal = 'mErrorNewUser';
			// 		this.hasModal = true;
			// 	} else if ( this.phone && !user) {
			// 		this.main.isErrorLogin = 'unknownnumber';
			// 		this.main.validLogin = false;
			// 		setTimeout(_.bind(function(){this.main.suggestRestoreAccess = true;}, this), 250);
			// 	}
			// });

		},
		onSocialNext: function() {
			// 0 – new user, 1 – signed up user
			var user = this.checkUser();

			console.log(user);

			var isExisting = (user && user.password);

			if ( !isExisting && this.social.prev == 'main') {
				// новый пользователь при входе в аккаунт

				this.routeRegStepOne();
				this.registration.suggestReg = true;
				this.registration.socialReg = true;
			} else if ( !isExisting && this.social.prev == 'registration1') {
				// новый пользователь при регистрации

				this.routeRegStepOne();
				this.registration.suggestReg = false;
				this.registration.socialReg = true;
			} else if(isExisting) {
				// существующий пользователь, логиним

				this.routeFeed();
			}
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
				_email = this.testUsers[this.phone];
			} else {
				return undefined;
			}
			var result = this.testUsers[_email];

			if(!result) {
				this.testUsers[this.email] = {
					password: ''
				}
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
			if(!this.isValidEmail) return;

			// w.utils._fakeLoad(btn, this, function() {
			// 	var user = this.checkUser();

			// 	if (user && user.password && !this.registration.restoreForm) {
			// 		this.hasModal = !!(this.email && this.isValidEmail && this.testUsers[this.email] && this.testUsers[this.email].password);
			// 		this.typeModal = 'mErrorExistingUser'
			// 		// this.routeHome();
			// 		return true;
			// 	}

			// 	this.registration.existingInfo = user || {};
			// 	this.registration.existingInfo.email = this.email;

			// 	console.log(this.registration.existingInfo.name);

			// 	this.current = 'registration2';
			// })

			w.utils.toggleLoad(btn, true);
			w.utils.ajax( {
				url: '',
				method: 'GET',
				data: {}
			}).then(_.bind(function() {
				w.utils.toggleLoad(btn, false);
				var user = this.checkUser();
				if (user && user.password && !this.registration.restoreForm) {
					this.hasModal = !!(this.email && this.isValidEmail && this.testUsers[this.email] && this.testUsers[this.email].password);
					this.typeModal = 'mErrorExistingUser'
					// this.routeHome();
					return true;
				}

				this.registration.existingInfo = user || {};
				this.registration.existingInfo.email = this.email;

				console.log(this.registration.existingInfo.name);

				this.current = 'registration2';
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
		initRestore: function(btn) {
			if(this.restore.accountId == '' || this.main.sendingRequest)
				return;
			
			this.main.sendingRequest = true;
			w.utils.toggleLoad(btn, true);
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
					if(userAuthMethods) {
						// this.restore.accData = user;
						// this.restore.accData.pic = user.pic || '/img/no_photo.jpeg';
	
						if (userAuthMethods.HasPhone) {
							/* via mobile */
							this.restore.state = 2;
						} else {
							this.restore.accData.app = userAuthMethods.AuthProviders || [];

							/* via sc/email */
							this.restore.state = 1;
						}
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
			}, this), function(error) {
				this.main.sendingRequest = false;
				w.utils.showErrorMessage();
			});

			// w.utils._fakeLoad(btn, this, function() {
			// 	var user = this.checkUser();

			// 	if( user && user.password ) {
			// 		this.restore.accData = user;
			// 		this.restore.accData.pic = user.pic || '/img/no_photo.jpeg';

			// 		if( this.phone && this.isValidPhone && this.testUsers[this.phone]) {
			// 			this.email = this.testUsers[this.phone];
			// 			this.isValidEmail = true;
			// 		}

			// 		if( user.phone ) {

			// 			this.restore.state = 2;

			// 		} else if ( user.socialApp ) {

			// 			this.restore.state = 3;

			// 		} else {

			// 			this.restore.state = 1;
			// 		}


			// 	} else {
			// 		// нет такого пользователя
			// 		this.restore.validAccount = false;
			// 		this.restore.error = 'unknownrestore';
			// 	}
			// });
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

			console.log(this.restore.validAccount);
		},
		checkSmsCode: function () {
			if(this.smsCode == '') return;
			this.smsCode = parseInt(this.smsCode);

			if(this.smsCode == NaN) this.smsCode = '';

			console.log(this.smsCode);

			if(this.smsCode == this.restore.accData.code) {
				this.isValidCode = true;
			} else {
				this.isValidCode = false;
			}
		},
		loginCode: function(btn) {
			// w.utils._fakeLoad(btn, this, function() {
			// 	if(this.isValidCode) {
			// 		this.routeFeed();
			// 	}
			// });

			w.utils.toggleLoad(btn, true);
			w.utils.ajax({
				url: '',
				method: 'GET',
				data: {}
			}).then(_.bind(function(response) {
				if(this.isValidCode) {
						this.routeFeed();
					}
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
			console.log(window.innerHeight);
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
		retryPass: function() {
			this.clearModals();
			this.routeHome();
			return true;
		},
		focusSelectEdu: function() {
			console.log(window.innerHeight);
		},
		sortEduList: function() {
			this.$refs['mErrorNewUserList'] && this.$refs['mErrorNewUserList'].scrollTo(0,0);

			if(this.registration.fhigheredu != '') {
				this.registration.suggestedEduItems = w.utils.filterSubstr(this.registration.fhigheredu, w._he);
			} else {
				this.registration.suggestedEduItems = w._he;
			}
		},
		applySelectedEdu: function( elem, item ) {
			// this.registration._transitionSelectEdu = true;
			console.log('apply');
			// elem.dataset.selected = true;
			this.registration.fhigheredu = item;
			setTimeout(_.bind(function() { this.registration._transitionSelectEdu = false; this.hasModal = false;}, this), 300);
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
					Email: this.email
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
					alert('Пароль отправлен на почту ' + this.email);
				}, this), 200);
			}, this), function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				console.error(error);
				w.utils.showErrorMessage();
			});

			// w.utils._fakeLoad(btn, this, function() {
			// 	this.password = '';
			// 	this.routeHome();
			// 	setTimeout(_.bind(function() {
			// 		alert('Пароль отправлен на почту ' + this.email);
			// 	}, this), 200);
			// })
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
