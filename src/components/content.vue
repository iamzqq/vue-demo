<template>
    <div class="content" :class="{'active':show}">
        <button :class="{'b-close':show,'b-menu':!show}" @click="handleClick"></button>
        <div class="con_head">
          <div class="menu-wrap">
            <router-link  to="/article">article</router-link>
            <router-link  to="/demo">demo</router-link>
            <router-link  to="/home">home</router-link>
          </div>
        </div>
        <transition name="slideFade">
          <router-view></router-view>
        </transition>

    </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleClick () {
      let _show = this.show = !this.show
      this.$emit('isLogFn', _show)
    }
  }
}
</script>
<style scoped>
  .slideFade-enter-active,
  .slideFade-leave-active{
    left:10px
  }
 .slideFade-enter-active,
 .slideFade-leave-active{
   transition:all .5s cubic-bezier(0.66, 0.1, 0.38, 1.45);
   width :100%;
   position :absolute;
   top :0;
   left :0;
   opacity :1;
 }
  .slideFade-enter{
    transform :translateX(100%);
    opacity :0;
  }
  .slideFade-leave-active{
    transform: translateX(-100%);
    opacity: 0;
  }

  .content{
    overflow: auto;
    transition: transform .5s;
    box-shadow: 0 0 100px 5px rgba(0,0,0,.3);
    transform-origin: 200px center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /*background-color: #1abc9c;*/
    background-color: #edeef0;
  }
  .content.active{
    transform: scale(.9) translateX(200px);
  }
  .con_head{
    margin: 0px auto;
    height: 100px;
    background-color: #1abc9c;
    text-align: center;
    padding-top: 50px;
  }
  .con_head .menu-wrap{
    max-width: 1000px;
    margin:0px auto;
    height:100px;
    line-height: 100px;
    background-color: #fff;
  }
  .con_head .menu-wrap a{
    display: inline-block;
    width:80px;
    /*height:80px;*/
    text-decoration: none;
    color: #000;
    margin-right:100px;
  }
  .b-close, .b-menu {
    width: 25px;
    height: 25px;
    position: absolute;
  }
  button {
    border: none;
    outline: none;
    box-shadow: none;
    background: none;
    cursor: pointer;
  }
  .b-close:after, .b-close:before, .b-menu:after, .b-menu:before{
    content: " ";
    position: absolute;
    background-color: #fff;
    display: block;
    width: 100%;
    height: 3px;
    left: 3px;
    top: 13px;
    border-radius: 3px;
    transition: all .5s cubic-bezier(.66,.1,.38,1.45);
    transform-origin: 50% 50%;
  }
  .b-menu:before {
    transform: translateY(-6px);
  }
  .b-close:before {
    transform: rotate(45deg) translateY(0);
  }
  .b-close:after {
    box-shadow: 0 0 0 0 #fff;
    transform: rotate(135deg) translateY(0);
  }
  .b-menu:after {
    box-shadow: 0 6px 0 0 #fff;
  }
</style>
