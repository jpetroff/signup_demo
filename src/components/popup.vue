<template lang="html">

    <div class="popup-backdrop" v-show="isOpen">
      <div class="popup-content">
        <slot></slot>
      </div>
    </div>

</template>

<script>
w.Components['popup'] = {
  template: "<%= template %>",
  props: ['isOpen'],
  data: function () {
    return {

    }
  },

}

Vue.component('popup', w.Components['popup']);
</script>

<style lang="less">
.popup-transition-enter, .popup-transition-leave-to {
  opacity: 0;

  .content {
    top: 30px;
  }
}

.popup-transition-enter-active,
.popup-transition-leave-active {
  transition: all .3s ease;
}
.popup {
  &-backdrop {
    background: rgba(0,0,0,0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 99999;
    // transition: opacity 0.2s ease-in-out;
  }

  &-content {
    position: absolute;
    // left: 8px;
    // right: 8px;
    // bottom: 8px;
    left: 0;
    right: 0;
    bottom: 0;
    transition: top 0.2s ease-in-out;
    padding: 20px;
    background: white;
    // border-radius: 6px;

    .account-description {
      margin-bottom: 36px;
    }

    p {
      font-size: 18px;
      line-height: 24px;
      text-align: center;

      // &._has-overflow-block {
      //   font-size:0;
      //   line-height:1.333;
      // }

      &.main-p {
        color: #323232;
      }

      &.subscript-p {
        font-size: 16px;
        line-height: 20px;
        opacity: 0.5;
      }

      span.reg-text {font-size: 18px;}
      span.text-overflow {
        display: inline-block;
        overflow: hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        max-width:100%;
        vertical-align:bottom;
        font-size: 18px;
        height: 24px;
      }
    }

    .message {
      margin: 56px 0;
      font-weight: 500;
      letter-spacing: -0.1px;
    }

    .header {
      margin-bottom: 12px;
      margin-top: 16px;
      font-weight: normal;
      // text-align: center;
      font-size: 18px;
      line-height: 24px;
    }

    .btn-text {
      margin-top: 0;
      color: #969696;
    }

    .btn-next {
      margin-top: 16px;
    }
  }


}
</style>
