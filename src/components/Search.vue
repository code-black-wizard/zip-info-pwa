<template>
  <div>
    <form @submit.prevent="findPlace">
      <div class="field">
        <div class="control">
          <input ref="textfield" v-model="zipcode" class="input is-medium" type="text" placeholder="Enter US Zipcode">
        </div>
        <p v-show="$store.state.errorMessage" class="has-text-centered has-text-danger">Please enter a valid US zipcode</p>
      </div>
      <button class="button is-link is-medium is-fullwidth">Find</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      zipcode: null
    }
  },
  methods: {
    findPlace() {
      this.$store.dispatch('fetchData', {
        zipcode: this.zipcode,
        textfield: this.$refs.textfield
      });
      this.$emit('show');
      this.zipcode = null
    }
  }
}
</script>

<style scoped lang="scss">
.error {
  border: 1px solid red;
}
</style>