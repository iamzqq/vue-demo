<template>
    <ul :class="{ 'articleList--Active': !show }">
      <li style="transition-delay: 0.2s;">
        <a href="javascript:;">vue2.0一起在懵逼的海洋里越陷越深（一） </a>
      </li>
      <li style="transition-delay: 0.3s;">
        <a href="javascript:;">vue2.0一起在懵逼的海洋里越陷越深（二） </a>
      </li>
      <li style="transition-delay: 0.4s;">
        <a href="javascript:;">vue2.0一起在懵逼的海洋里越陷越深（三） </a>
      </li>
      <li style="transition-delay: 0.5s;">
        <a href="javascript:;">vue2.0一起在懵逼的海洋里越陷越深（四） </a>
      </li>
      <li style="transition-delay: 0.6s;">
        <a href="javascript:;">vue2.0一起在懵逼的海洋里越陷越深（五） </a>
      </li>
      <li style="transition-delay: 0.7s;">
        <a href="javascript:;">vue2.0一起在懵逼的海洋里越陷越深（六） </a>
      </li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    width:180px;
    background-color: #1abc9c;
    list-style-type: none;
    padding: 10px;
    overflow: hidden;
  }

  li{
    width: 160px;
    display: block;
    padding:10px;
    background-color: hsla(0,0%,100%,.1);
    transform: translateX(-200px);
    transition: transform .3s cubic-bezier(.66,.1,.38,1.45) .2s;
  }

  .articleList--Active li {
    transform: translateX(0);
  }
  a {
    text-align: left;
    font-size:14px;
    color: #fff;
    text-decoration: none;
  }

</style>
