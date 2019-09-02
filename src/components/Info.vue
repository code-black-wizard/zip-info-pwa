<template>
  <div>
    <div class="box">
      <p class="subtitle is-6">{{getInfoZip['post code']}}</p>
      <p class="title is-4">{{getInfoZip.places[0]['place name']}}</p>
      <p class="subtitle is-6">State: {{getInfoZip.places[0].state}} ({{getInfoZip.places[0]['state abbreviation']}})</p>
      <p class="subtitle is-6">Latitude: {{getInfoZip.places[0].latitude}}</p>
      <p class="subtitle is-6">Longitude: {{getInfoZip.places[0].longitude}}</p>
    </div>
    <a href="#" @click.prevent="clearData" class="button is-light is-medium is-fullwidth">Clear</a>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    clearData() {
      this.$emit('show');
      this.$store.commit('clearData')
    }
  },
  computed: {
    getInfoZip() {
      return this.$store.state.zipInfo
    }
  }
}
</script>

<style scoped lang="scss">
</style>