<template lang="html">
  <label class="app-field" v-bind:class="[ activeClass, placeClass, errorClass ]" v-on:click="$emit('click')">
    <span class="app-field__caption">{{ dynamicLabel }}</span>

    <input v-if="!textarea" class="app-field__input"
      v-bind:id="[id]"
      v-bind:name="[id]"
      v-bind:type="type"
      v-bind:value="value"
      v-on:focus="focus = true; $emit('input', $event.target.value)"
      v-on:blur="focus = false"
      v-on:input="$emit('input', $event.target.value); unflagError()">

    <textarea v-if="!!textarea" rows="3" class="app-field__input_multiline"
      v-bind:id="[id]"
      v-bind:name="[id]"
      v-on:focus="focus = true"
      v-on:blur="focus = false"
      v-on:input="$emit('input', $event.target.value)"
      v-bind:style="fixIphone"
    >{{ value }}</textarea>
  </label>
</template>

<script>
w.Components['field'] = {
  template: "<%= template %>",
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
</script>

<style lang="less">
textarea::-webkit-input-placeholder { text-indent: 0px; }
.app-field {
  // height: 56px;
  padding: 29px 12px 9px 12px;
  box-sizing: border-box;
  display: block;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  position: relative;
  cursor: text;


  &__caption {
    font-size: 18px;
    position: absolute;
    top: 20px;
    height: 24px;
    line-height: 24px;
    opacity: 0.5;
    display: inline-block;
    transition: all 0.2s ease;
    letter-spacing: 0.2px;
  }

  &__input {
    border: none;
    font-size: 18px;
    line-height: 24px;
    height: 24px;
    display: block;
    width: 100%;
    outline: none;
    box-shadow: none;
    padding: 0 !important;
    vertical-align: top;
    background: transparent;

    &_multiline {
      font-size: 18px;
      line-height: 24px;
      border: none;
      display: block;
      width: 100%;
      outline: none;
      box-shadow: none;
      padding: 0 !important;
      vertical-align: top;
      background: transparent;
      margin: 0;
      border-radius: 0 !important;
      -webkit-appearance:none;
      -webkit-border-radius:0px;
      flex-direction: row;

    }
  }

  &.focus &__caption {
    font-size: 14px;
    line-height: 18px;
    height: 18px;
    display: inline-block;
    top: 11px;
  }

  &.top {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.bottom {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-top: none;
  }

  &.middle {
    border-radius: 0;
    border-top: none;
  }

  &.has-icon {
    padding-left: 56px;

    .social-icon {
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: 32px 32px;
      background-color: transparent;
      position: absolute;
      top: 16px;
      left: 12px;

      &_fb {
        background-image: url('/img/index_fb.png');

        @media
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi) {
          background-image: url('/img/index_fb@2x.png');
        }
      }

      &_vk {
        background-image: url('/img/index_vk.png');

        @media
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi) {
          background-image: url('/img/index_vk@2x.png');
        }
      }
    }
  }
}

.app-field_error {
  .app-field__caption {
    color: #FF1F00;
    opacity: 1;
  }
  .app-field__input {
    color: #FF1F00;
    transition: color 0.2s ease;
  }
}
</style>
