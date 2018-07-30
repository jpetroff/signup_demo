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
