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
  filterSubstr( _str, arr ) {
    var str = _str.trim().toLowerCase();
    var result = [];
    arr.forEach(function(_elem) {
      var elem = _elem.toLowerCase();
      if(elem.indexOf(str) != -1) {
        result.push(_elem);
      }
    });

    result.sort(function(a, b) {
      return (a.toLowerCase().indexOf(str) - b.toLowerCase().indexOf(str));
    });

    return result;
	},

	_fakeLoad: function(elem, ctx, fn) {
		if(!elem || !elem.classList) {
			return;
		}

		var loadingT = Math.round( Math.random() * 1500 ) + 500;
		elem.classList.add('loading');
		
		console.log('!!', loadingT);

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

	// @TODO: add Promise polyfill
	ajax: function(opts) {
		var data = opts.data || null;
		var method = typeof opts.method !== 'undefined' ? opts.method : 'GET';
		var url = opts.url;

		if (!url) return new Promise(function(resolve,reject){reject(Error('No URL provided'))});

		var query = [];
		if (data != null && typeof data == 'object') {
			for (var key in data) {
				if (!data.hasOwnProperty(key)) continue;
				query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			}
			data = query.join('&');

			if ('' == data) data = null;
		}

		// console.log(data);

		return new Promise(function(resolve, reject) {
			// Do the usual XHR stuff
			var req = new XMLHttpRequest();

			if (method == 'POST') {
				req.open(method, url);
			} else {
				req.open(method, url+'?'+data);
			}
			// console.log(url+'?'+data);

			if (method == 'POST') req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			req.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			req.onload = function() {
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
}

w._he = ["Vasile Goldis Western University, Арад, Румыния","Азербайджанский медицинский университет (АМУ), Баку","Азербайджанский международный университет, медицинский факультет, Баку","Алтайский государственный медицинский университет (АГМУ, АГМИ), Барнаул","Амурская государственная медицинская академия (АГМА, БГМИ), Благовещенск","Андижанский государственный медицинский институт (АГМИ), Андижан","Армянский медицинский институт (АМИ), Ереван","Армянско-Российский международный университет \"Мхитар Гош\", Ванадзор","Астраханская государственная медицинская академия (АГМА, АГМИ), Астрахань","Афинский Национальный Каподистрийский Университет, Афины, Греция","Балтийский федеральный университет им. Иммануила Канта, медицинский факультет (БФУ, РГУ), Калининград","Башкирский государственный медицинский университет (БГМУ, БГМИ), Уфа","Белгородский государственный университет, медицинский факультет (БелГУ), Белгород","Белорусский государственный медицинский университет (БГМУ, БМИ, ММИ), Минск","Буковинский государственный медицинский университет (БГМУ, БГМА), Черновцы","Бурятский государственный университет, медицинский факультет (БГУ), Улан-Удэ","Бухарский медицинский институт, Бухара","Вильнюсский университет, медицинский факультет (ВУ, ВГУ), Вильнюс","Винницкий национальный медицинский университет им. Н.И. Пирогова (ВНМУ), Винница","Витебский государственный медицинский университет (ВГМУ, ВГМИ), Витебск","Владивостокский государственный медицинский университет (ВГМУ, ВГМИ), Владивосток","Военно-медицинская академия Бундесвера, Росток","Военно-медицинская академия им. С.М. Кирова (ВМедА, ВМОЛКА, ВМА), Санкт-Петербург","Волгоградский государственный медицинский университет (ВолГМУ), Волгоград","Воронежская государственная медицинская академия им. Н.Н. Бурденко (ВГМА, ВГМИ), Воронеж","Гомельский государственный медицинский университет (ГГМУ, ГГМИ), Гомель","Государственная классическая академия им. Маймонида, факультет социальной медицины (ГКА, ГЕА), Москва","Государственный медицинский университет города Семей (ГМУ города Семей, СГМА, СГМИ), Семипалатинск","Государственный медицинский университет туркменистана (ТГМУ, ТГМИ), Ашхабад","Государственный университет медицины и фармакологии им. Николая Тестемицяну, Кишинёв","Гродненский государственный медицинский университет (ГрГМУ, ГрМАГрМИ), Гродно","Гюмрийский университет \"Прогресс\", Гюмри","Дагестанская государственная медицинская академия (ДГМА, ДГМИ), Махачкала","Дальневосточный государственный медицинский университет (ДВГМУ, ХГМИ), Хабаровск","Днепропетровская государственная медицинская академия  (ДГМА), Днепропетровск","Днепропетровский медицинский институт народной медицины, Днепропетровск","Днепропетровский национальный университет, факультет биологии, экологии и медицины (ДНУ), Днепропетровск","Донецкий государственный медицинский университет им. М. Горького (ДонНМУ), Донецк","Ереванский государственный медицинский университет им. М. Гераци (ЕГМУ), Ереван","Ереванский медицинский институт им. Меграбяна, Ереван","Ереванский медицинский университет им. Святой Терезы, Ереван","Ереванский университет \"Айбусак\", медицинский факультет, Ереван","Западно-Казахстанская государственная медицинская академия им. М. Оспанова (ЗКГМА, АГМА), Актобе","Запорожский государственный медицинский университет (ЗГМУ), Запорожье","Ивановская государственная медицинская академия (ИвГМА, ИГМА), Иваново","Ивано-Франковский государственный медицинский университет (ИФГМУ, ИФГМА, СГМИ), Ивано-Франковск","Ижевская государственная медицинская академия (ИГМА, ИГМИ), Ижевск","Ингушский государственный университет, медицинский факультет (ИнгГУ), Назрань","Институт экологии и медицины, медицинский факультет, Киев","Иркутский государственный медицинский университет (ИГМУ, ИГМИ), Иркутск","Кабардино-Балкарский государственный университет им. Х.М. Бербекова, медицинский факультет (КБГУ), Нальчик","Казанская государственная медицинская академия (КГМА, КГИДУВ), Казань","Казанский государственный медицинский университет (КГМУ, КГМИ), Казань","Казахский национальный медицинский университет им. С.Д. Асфендиярова (КазНМУ), Алма-Ата","Казахстанско-Российский медицинский университет (КРМУ, КМУ, КМИ), Алма-Ата","Карагандинский государственный медицинский университет (КГМУ, КГМА, КГМИ), Караганда","Кемеровская государственная медицинская академия (КемГМА, КемГМИ), Кемерово","Киевский медицинский университет Украинской ассоциации народной медицины (КМУ УАНМ), Киев","Кировская государственная медицинская академия (КГМА, КГМИ), Киров","Кишиневский государственный медицинский университет им. Н.Тестемицану","Красноярский государственный медицинский университет им. проф. В.Ф. Войно-Ясенецкого (КрасГМУ, КрасГМИ, КрасГМА), Красноярск","Крымский государственный медицинский университет им. С.И. Георгиевского (КГМУ, КГМИ), Симферополь","Кубанский государственный медицинский университет (КубГМУ, КубГМА, КубГМИ), Краснодар","Курский государственный медицинский университет (КГМУ, КГМИ), Курск","Кыргызская государственная медицинская академия (КГМА, КГМИ), Бишкек","Кыргызско-Российский славянский университет, медицинский факультет, Бишкек","Латвийский университет, медицинский факультет, Рига","Литовский университет наук о здоровье, медицинская академия, Каунас","Луганский государственный медицинский университет (ЛГМУ, ЛГМИ), Луганск","Львовский национальный медицинский университет им. Данила Галицкого (ЛМИ, ЛНМУ, ЛГМУ, ЛГМИ), Львов","Майкопский государственный технологический университет, медицинский институт (МИ МГТУ), Майкоп","Медицинский институт \"Амирдовлат Амасиаци\", Ванадзор","Медицинский университет Астана (AMU, МУА, КГМА, КМА, КазГМА), Астана","Международный казахско-турецкий университет им. Х.А. Яссави, школа медицины (МКТУ), Туркестан","Мордовский государственный университет им. Н.П. Огарева, медицинский институт (НИ МГУ), Саранск","Московский государственный медико-стоматологический университет (МГМСУ, МГМСИ), Москва","Московский государственный университет им. М.В. Ломоносова, факультет фундаментальной медицины (МГУ), Москва","Мюнхенский университет Людвига-Максимилиана","Нахичеванский государственный университет, медицинский факультет (НГУ), Нахичевань","Национальный медицинский университет им. А.А. Богомольца (НМУ), Киев","Нижегородская государственная медицинская академия (НижГМА, ГМИ), Нижний Новгород","Нижегородский военно-медицинский институт ФПС РФ  при НГМА (НижВМИ), Нижний Новгород","Новгородский государственный университет им. Ярослава Мудрого, институт медицинского образования (ИМО НовГУ), Новгород","Новосибирский государственный медицинский университет (НГМУ, НГМА, НМИ), Новосибирск","Новосибирский государственный университет, медицинский факультет (НГУ), Новосибирск","Обнинский институт атомной энергетики, медицинский факультет (ИАТЭ НИЯУ МИФИ), Обнинск","Одесский национальный медицинский университет (ОНМедУ, ОГМУ), Одесса","Омская государственная медицинская академия (ОмГМА, ОмГМИ), Омск","Оренбургская государственная медицинская академия (ОрГМА, ОрГМИ), Оренбург","Орловский государственный университет, медицинский институт (ОГУ), Орёл","Ошский государственный университет, медицинский институт (ОшГУ), Ош","Пензенский государственный унтверситет, медицинский институт (ПГУ), Пенза","Первый московский государственный медицинский университет им. И.М. Сеченова (1-й МГМУ, ММА), Москва","Первый Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова (ПСПбГМУ, СПбГМУ, 1-й ЛМИ), Санкт-Петербург","Пермская государственная медицинская академия им. акад. Е.А. Вагнера (ПГМА, ПМИ), Пермь","Петрозаводский государственный университет, медицинский факультет (ПетрГУ), Петрозаводск","Приднестровский государственный университет им. Т.Г. Шевченко, медицинский факультет (ПГУ), Тирасполь","Рижский университет им. П. Страдиньша, медицинские факультеты, Рига","Российский национальный исследовательский медицинский университет им. Н.И. Пирогова (РНИМУ, РГМУ,  2-й МОЛГМИ), Москва","Российский университет дружбы народов, медицинский факультет (РУДН), Москва","Российско-Армянский государственный университет, медико-биологический факультет, Ереван","Ростовский государственный медицинский университет (РостГМУ, РостМИ), Ростов-на-Дону","Рязанский государственный медицинский университет им. акад. И.П. Павлова (РГМУ, РМИ), Рязань","Самаркандский государственный медицинский институт  (СамГосМИ), Самарканд","Самарский военно-медицинский институт (СВМИ), Самара","Самарский государственный медицинский университет (СамГМУ, КМИ), Самара","Самарский медицинский институт РЕАВИЗ (СМИ Реавиз), Самара","Санкт-Петербургский государственный педиатрический университет (СПбГПУ, СПбГПМА, ЛПМИ), Санкт-Петербург","Санкт-Петербургский государственный университет, медицинский факультет (СПбГУ, ЛГУ), Санкт-Петербург","Санкт-Петербургский медико-технический институт (СпбМТИ), Санкт-Петербург","Санкт-Петербургский терапевтический институт (СТИ), Санкт-Петербург","Саратовский военно-медицинский институт (СВМИ), Саратов","Саратовский государственный медицинский университет им. В.И. Разумовского (СГМУ, СМИ), Саратов","Северный государственный медицинский университет (СГМУ, АГМА, АГМИ), Архангельск","Северо-восточный федеральный университет им. М.К. Аммосова, медицинский институт (СВФУ, ЯГУ), Якутск","Северо-Западный государственный медицинский университет им. И.И.Мечникова (СЗГМУ, СПбГМА, ЛСГМИ), Санкт-Петербург","Северо-Кавказская государственная гуманитарно-технологическая академия (КЧТИ, КЧГТА, СКГГТА), Черкесск","Северо-Осетинская государственная медицинская академия (СОГМА, СОГМИ), Владикавказ","Сибирский государственный медицинский университет (СГМУ, ТМИ), Томск","Смоленская государственная медицинская академия (СГМА, СГМИ), Смоленск","Ставропольская государственная медицинская академия (СтГМА, СГМИ), Ставрополь","Сумской государственный университет, медицинский институт (СумГУ), Сумы","Сургутский государственный университет, лечебный факультет (СурГУ), Сургут","Таджикский государственный медицинский университет им. Абуали ибн Сино (ТГМУ ТГМИ), Душанбе","Тамбовский государственный университет имени Г.Р. Державина, медицинский институт (ТГУ), Тамбов","Тамбовский государственный университет имени Г.Р. Державина, медицинский институт (ТГУ), Тамбов","Тамбовский государственный университет имени Г.Р. Державина, медицинский институт (ТГУ), Тамбов","Тартуский университет, медицинский факультет, Тарту","Ташкентская медицинская академия (ТашМА, ТашМИ, 1-й ТашМИ, 2-й ТашМИ), Ташкент","Ташкентский педиатрический медицинский институт (ТашПМИ, САМПИ), Ташкент","Тбилисский государственный медицинский университет (ТГМУ), Тбилиси","Тбилисский государственный университет им. Иванэ Джавахишвили, медицинский факультет (ТГУ), Тбилиси","Тверская государственная медицинская академия (ТГМА), Тверь","Тернопольский государственный медицинский университет им. И.Я. Горбачевского (ТГМУ, ТГМА), Тернополь","Томский военно-медицинский институт (ТВМИ), Томск","Тульский государственный университет, медицинский институт (ТулГУ), Тула","Тюменская государственная медицинская академия (ТГМА,ТГМИ), Тюмень","Ужгородский национальный университет, медицинский факультет (УжНУ), Ужгород","Украинская медицинская стоматологическая академия (УМСА), Полтава","Ульяновский государственный университет, медицинский факультет (УлГУ), Ульяновск","Университет Хазар, школа медицины, стоматологии и здравоохранения, Баку","Уральский государственный медицинский университет (УГМУ, УГМА, СГМИ), Екатеринбург","Хакасский государственный университет им. Н.Ф.Катанова, медико-психолого-социальный институт (ХГУ), Абакан","Ханты-Мансийская государственная медицинская академия (ХГМА, ХГМА), Ханты-Мансийск","Харьковский национальный медицинский университет (ХНМУ), Харьков","Харьковский национальный университет им. В.Н. Каразина, медицинский факультет, Харьков","Чеченский государственный университет, медицинский факультет (ЧГУ, ЧИГУ), Грозный","Читинская государственная медицинская академия (ЧГМА, ЧГМИ), Чита","Чувашский государственный университет, медицинский факультет (ЧувГУ), Чебоксары","Южно-Казахстанская государственная фармацевтическая академия (ЮКГФА, ЮКГМА), Шымкент","Южно-Уральский государственный медицинский университет (ЮУГМУ, ЧелГМА, ЧелГМИ), Челябинск","Ярославская государственная медицинская академия (ЯГМА, ЯГМИ), Ярославль"]

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

// End of D:\signup_demo\src\components\uploader.js
})(window);
(function(w){
"use strict";
// File D:\signup_demo\src\js\main.js

w.Data = {
	current: 'main', // current screen

	// creds
	// email: 'e.rozhdestvenskaya@doktornarabote.cc',
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
			}, this), _.bind(function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				w.utils.showErrorMessage();
			}, this));
			
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
			this.main.sendingRequest = true;
			w.utils.ajax( {
				url: '/Account/DoctorRegistrationAjax',
				method: 'POST',
				data: { login: this.email }
			}).then(_.bind(function(response) {
				w.utils.toggleLoad(btn, false);

				var reponseData = JSON.parse(response || '');
				if(reponseData.Data) {
					window.location.href = reponseData.Data;
					return;
				}
				
				this.main.sendingRequest = false;

				this.hasModal = this.email && this.isValidEmail;
				this.typeModal = 'mErrorExistingUser';

				// var user = this.checkUser();
				// if (user && user.password && !this.registration.restoreForm) {
				// 	this.hasModal = !!(this.email && this.isValidEmail && this.testUsers[this.email] && this.testUsers[this.email].password);
				// 	this.typeModal = 'mErrorExistingUser'
				// 	// this.routeHome();
				// 	return true;
				// }

				// this.registration.existingInfo = user || {};
				// this.registration.existingInfo.email = this.email;

				// console.log(this.registration.existingInfo.name);

				// this.current = 'registration2';
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
					window.clearInterval(countdownInterval);
					this.canRequestSmsCode = true;
				}
			}, this), 980);
		},
		initRestore: function(btn) {
			if(this.restore.accountId == '' || this.main.sendingRequest)
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
					if (userAuthMethods.Phone) {
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

			var matching = this.smsCode.toString().match(/^\d{4}$/);
			this.isValidCode = matching && matching.length === 1;
		},
		loginCode: function(btn) {
			if (this.main.sendingRequest)
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
				var reponseData = JSON.parse(response || '');
				if(reponseData.IsSuccess) {
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
					alert('Пароль отправлен на почту ' + this.email);
				}, this), 200);
			}, this), _.bind(function(error) {
				w.utils.toggleLoad(btn, false);
				this.main.sendingRequest = false;
				console.error(error);
				w.utils.showErrorMessage();
			}, this));

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

// End of D:\signup_demo\src\js\main.js
})(window);