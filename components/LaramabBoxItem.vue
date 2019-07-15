<template>
  <div class="col-12 col-md-3 col-sm-6">
    <div class="app-card">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LaramabBoxItem",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
