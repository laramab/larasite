<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="page-error">
          <h1>
              <span class="fa-stack fa-lg">
                <i class="fa fa-search fa-stack-1x"></i>
                <i class="fa fa-ban fa-stack-2x text-danger"></i>
              </span>
          </h1>
          <h3>Page not found...</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'error'
  }
</script>

<style>
  .page-error {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-error h3 {
    font-family: 'Lobster', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
