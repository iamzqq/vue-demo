<template>
  <div id="app">
    <list :show="show"></list>
    <r_content @isLogFn="lisLogFn"></r_content>
  </div>
</template>

<script>
import list from './components/list.vue'
import r_content from './components/content.vue'
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  components: {
    list,
    r_content
  },
  methods: {
    lisLogFn (data) {
      this.show = !data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
