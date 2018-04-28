<template>
  <div class="con_head">
    <router-link v-repeat="listItem in menuList" to="listItem.src">{{listItem.text}}</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['menuList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con_head{
  margin:90px auto;
  height:100px;
  background-color:#1abc9c;
}

</style>
