<template lang="html">
  <label class="app-field upload-field" v-bind:class="{loaded: (name && name != ''), focus: (name && name != '' && type == 'file'), 'avatar-layout': (type == 'avatar')}" v-on:click="$emit('click')">
    <span class="app-field__caption">
      {{ dynamicLabel }}
      <span class="subscript" v-if="subscript">{{ subscript }}</span>
    </span>
    <span class="app-field__input" v-html="content" v-bind:style="styleObject"></span>

    <div class="upload-field__icon">
      <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Canvas" fill="none">
      <g id="plus">
      <circle id="Ellipse" cx="16" cy="16" r="16" fill="#E3E3E3"/>
      <rect id="Rectangle 2" width="2" height="16" transform="translate(15 8)" fill="white"/>
      <rect id="Rectangle" width="16" height="2" transform="translate(8 15)" fill="white"/>
      </g>
      </g>
      </svg>
    </div>

    <input class="upload-field__hidden-input"
      v-bind:id="[id]"
      type="file"
      v-on:change="onUpload($event.target)">
  </label>
</template>

<script>
w.Components['uploader'] = {
  props: ['type', 'label', 'id', 'accept', 'subscript'],
  template: "<%= template %>",
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
</script>

<style lang="less">
.upload-field {
  position: relative;

  &__hidden-input {
    position: absolute;
    visibility: 0;
    width: 0px;
    height: 0px;
    left: -999999px;

  }

  &__icon {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 17px;
    right: 12px;
  }

  .app-field__input {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }

  .app-field__caption {
    transition: none !important;
  }
}

.upload-field.loaded .upload-field__icon {
  display:none;
}

.avatar-layout {
  display: flex;
  flex-direction: row-reverse;
  border: none;
  padding: 0;

  .app-field__caption {
    flex-grow: 1;


    position: static;
    width: auto;
    height: auto;
    padding-left: 20px;

    .subscript {
      display: inline-block;
      font-size: 14px;
      line-height: 16px;
      margin-top: 8px;
    }
  }

  .upload-field__icon {
    top: 25px;
    left: 25px;

  }

  .app-field__input {
    flex-shrink: 0;
    width: 82px;
    height: 82px;
    flex-grow: 0;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}

</style>
