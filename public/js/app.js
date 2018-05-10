(function(w){
"use strict";
// File /Users/jpetrov/Work/signup_demo/src/js/utils.js

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
  }
}

// End of /Users/jpetrov/Work/signup_demo/src/js/utils.js
})(window);
(function(w){
"use strict";
// File /Users/jpetrov/Work/signup_demo/src/components/account.js

w.Components['account-info'] = {
  template: "<div class=account-description><div class=\"personal-info test\" v-if=\"(name != undefined &amp;&amp; name != null &amp;&amp; name != \'\')\"><div class=userpic v-bind:style=\"{backgroundImage: \'url(\\\'\'+pic+\'\\\')\'}\"></div><div class=name v-html=\"name &amp;&amp; name.split(\' \').join(\'<br/>\')\"></div></div><div class=label-header>Почта</div><span class=text-overflow>{{email}}</span></div>",
  props: ['name', 'email', 'phone', 'pic']
}

Vue.component('account-info', w.Components['account-info']);

// End of /Users/jpetrov/Work/signup_demo/src/components/account.js
})(window);
(function(w){
"use strict";
// File /Users/jpetrov/Work/signup_demo/src/components/field.js

w.Components['field'] = {
  template: "<label class=app-field v-bind:class=\"[ activeClass, placeClass, errorClass ]\" v-on:click=\"$emit(\'click\')\"><span class=app-field__caption>{{ dynamicLabel }}</span> <input v-if=!textarea class=app-field__input v-bind:id=[id] v-bind:name=[id] v-bind:type=type v-bind:value=value v-on:focus=\"focus = true; $emit(\'input\', $event.target.value);\" v-on:blur=\"focus = false\" v-on:input=\"$emit(\'input\', $event.target.value); unflagError()\"> <textarea v-if=!!textarea rows=3 class=app-field__input_multiline v-bind:id=[id] v-bind:name=[id] v-on:focus=\"focus = true; $emit(\'input\', $event.target.value);\" v-on:blur=\"focus = false\" v-on:input=\"$emit(\'input\', $event.target.value)\" v-bind:style=fixIphone>{{ value }}</textarea></label>",
  props: ['value', 'label', 'place', 'type', 'id',  'error', 'textarea'],
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
      if (this.focus || this.value.length != 0) {
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
    }
  }
};

Vue.component('field', w.Components['field']);

// End of /Users/jpetrov/Work/signup_demo/src/components/field.js
})(window);
(function(w){
"use strict";
// File /Users/jpetrov/Work/signup_demo/src/components/popup.js

w.Components['popup'] = {
  template: "<div class=popup-backdrop v-show=isOpen><div class=popup-content><slot></slot></div></div>",
  props: ['isOpen'],
  data: function () {
    return {

    }
  },

}

Vue.component('popup', w.Components['popup']);

// End of /Users/jpetrov/Work/signup_demo/src/components/popup.js
})(window);
(function(w){
"use strict";
// File /Users/jpetrov/Work/signup_demo/src/components/uploader.js

w.Components['uploader'] = {
  props: ['type', 'label', 'id', 'accept', 'subscript'],
  template: "<label class=\"app-field upload-field\" v-bind:class=\"{loaded: (name &amp;&amp; name != \'\'), focus: (name &amp;&amp; name != \'\' &amp;&amp; type == \'file\'), \'avatar-layout\': (type == \'avatar\')}\" v-on:click=\"$emit(\'click\')\"><span class=app-field__caption>{{ dynamicLabel }} <span class=subscript v-if=subscript>{{ subscript }}</span> </span><span class=app-field__input v-html=content v-bind:style=styleObject></span><div class=upload-field__icon><svg width=32 height=32 viewBox=\"0 0 32 32\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><g id=Canvas fill=none><g id=plus><circle id=Ellipse cx=16 cy=16 r=16 fill=#E3E3E3></circle><rect id=\"Rectangle 2\" width=2 height=16 transform=\"translate(15 8)\" fill=white></rect><rect id=Rectangle width=16 height=2 transform=\"translate(8 15)\" fill=white></rect></g></g></svg></div><input class=upload-field__hidden-input v-bind:id=[id] type=file v-on:change=onUpload($event.target)></label>",
  data: function() {
    return {
      content: '',
      type: 'file', // < file | avatar >
      errorClass: '',
      errorType: this.error,
      dynamicLabel: this.label,
      styleObject: {},
      name: null
    }
  },
  methods: {
    onUpload: function(elem) {
      console.dir(elem);

      if(!elem.files[0]) return;

      this.name = elem.files[0].name;

      if(this.type == "file") {
        this.content = '' + elem.files[0].name;
      } else if (this.type == "avatar") {
        var reader = new FileReader();

        reader.addEventListener('load', _.bind(function() {
          this.content = '&nbsp;';

          this.styleObject = {
            backgroundImage: 'url("' + reader.result + '")'
          }
        }, this));

        reader.readAsDataURL(elem.files[0]);
      }


      this.$emit('upload', elem.files[0].name);
    }
  }

}

Vue.component('uploader', w.Components['uploader']);

// End of /Users/jpetrov/Work/signup_demo/src/components/uploader.js
})(window);
(function(w){
"use strict";
// File /Users/jpetrov/Work/signup_demo/src/js/main.js

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
  typeModal: '', // < reg | existing >

  main: {
    loginField: '',
    isErrorPass: false,
    validLogin: false,
    suggestRestoreAccess: false
  },
  social: {
    prev: '', // 0 - registration, 1 - login
    app: 'vk' // ['vk', 'fb']
  },
  registration: {
    suggestReg: false,
    socialReg: false,
    restoreForm: false,
    existingInfo: {},

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
    accData: {
      name: '',
      code: '1234',
      name: 'Володина Ольга Александровна',
      pic: '/img/userpic.jpeg',
      app: ['vk']
    },
    state: 1, // 0 - запрос идентификатора, 1 - пароль на почту или соц. сеть, 2 - телефон, 3 - диплом
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
      name: 'Володина Ольга',
      pic: '/img/userpic.jpeg',
      diploma: ['АБ 99999', '10.07.2017']
    },
    'exist_vk@dnr.cc': {
      password: '123',
      code: '1234',
      name: 'Володина Ольга',
      app: ['vk'],
      pic: '/img/userpic.jpeg',
      diploma: ['АБ 99999', '10.07.2017']
    },
    '9647025299': 'exist_phone@dnr.cc'
  },

  appNames: {
    'vk': 'Вконтакте',
    'fb': 'Фэйсбук'
  },

  formErrors: {
    'wrongpass': 'Неверный пароль'
  }
}

w.App = new Vue({
  data: w.Data,
  computed: {},
  methods: {
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
    unflagError(key) {
      console.log(key);
      this.$set(this, key, null);
    },
    routeHome: function() {
      this.current = 'main';
    },
    routeSocial: function(app) {
      this.social.app = app;
      this.social.prev = this.current;

      if(this.social.app == 'vk') this.email = 'exist_vk@dnr.cc';
      if(this.social.app == 'fb') this.email = 'new@dnr.cc';
      this.isValidEmail = true;

      this.current = 'social';
    },
    routeFeed: function() {
      this.current = 'feed';
    },
    checkLogin: function() {
      var user = this.checkUser();

      console.log(user && user.password && this.password != user.password);

      if( user && user.password && this.password == user.password ) {
        this.routeFeed();
      } else if (user && user.password && this.password != user.password ) {
        this.main.isErrorPass = 'wrongpass';
        this.main.validLogin = false;
        setTimeout(_.bind(function(){this.main.suggestRestoreAccess = true;}, this), 750)
      } else if ( this.email && !(user && user.password) ) {
        this.typeModal = 'mErrorNewUser';
        this.hasModal = true;
      }
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
      return this.isValidEmail = (val.indexOf('@') != -1);
    },
    validatePhone: function(val) {
      var _val = val.trim();
      _val = _val.replace(/[- ]/, '');
      return this.isValidPhone = /^(\+7|8)?[0-9]{10}$/i.test(_val);
    },
    checkUser: function() {
      var _email = '';

      if (this.email && this.isValidEmail) {
        _email = this.email;
      } else if (this.phone && this.isValidPhone) {
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
      this.current = 'registration1';
      var erase = !!(erase);

      if(erase) this.cleanSlate();

      this.clearModals();
    },
    routeRegStepTwo: function() {
      if(!this.isValidEmail) return;

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

      this.current = 'registration2'

    },
    cantLogin: function() {
      this.hasModal = false;
      this.initRestore();
      this.current = 'restore';
    },
    initRestore: function() {
      var user = this.checkUser();

      if( user && user.password ) {
        this.restore.accData = user;
        this.restore.accData.pic = user.pic || '/img/no_photo.jpeg';

        if( user.phone ) {

          this.restore.state = 2;

        } else if ( user.socialApp ) {

          this.restore.state = 3;

        } else {

          this.restore.state = 1;
        }


      } else {
        // нет такого пользователя

      }
    },
    checkSmsCode: function (val) {
      val = parseInt(val);
      this.smsCode = val;
      if(this.smsCode == this.restore.accData.code) {
        this.isValidCode = true;
      } else {
        this.isValidCode = false;
      }
    },
    loginCode: function() {
      if(this.isValidCode) {
        this.current = 'feed';
      }
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
    validateLogin: function() {
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

      console.log(this.main.validLogin);
    },
    scrollLogin: function() {
      // var top = this.$refs.signInBlock.offsetTop;
      // w.utils.scrollTop(top + 16, false, 250);
    },
    restoreForm: function() {
      this.registration.restoreForm = true;
      this.routeRegStepTwo();
    }
  },


});

App.$mount('#app');

// End of /Users/jpetrov/Work/signup_demo/src/js/main.js
})(window);