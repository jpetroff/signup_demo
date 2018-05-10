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
