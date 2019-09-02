<template>
  <div class="home">
    <Search @show="hide = true" class="search"/>
    <Info @show="hide = false" v-if="hide"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Info from '@/components/Info.vue'

export default {
  name: 'home',
  components: {
    Search,
    Info
  },
  data() {
    return {
      hide: false
    }
  }
}
</script>

<style lang="scss">
  .home {
    padding: 20px 10px 0;
  }
  .search {
    margin-bottom: 30px;
  }
</style>