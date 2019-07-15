<template>
  <div class="col-12 col-sm-12 col-md-4">
    <div class="app-box">
      <div class="app-box-header"
           :style="`background-image: url('${post.thumbnail}')`">
        <div class="app-box-title">
          <p>News, Technology, Bootcamp</p>
        </div>
      </div>
      <div class="app-box-body">
        <div class="app-box-body-date app-bg-card">{{ getDate() }}</div>
        <h3 class="block-with-text">{{ post.title }}</h3>
        <p class="text-muted">{{ post.description }}</p>
      </div>
      <div class="app-box-footer">
        <span class="text-uppercase">Read More</span>
        <i class="fa fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LaramabCardItem",
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      getDate() {
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let current_datetime = new Date()
        let formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + ", " + current_datetime.getFullYear()
        return formatted_date;
      }
    }
  }
</script>

<style scoped>

</style>
