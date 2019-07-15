<template>
  <div class="container">
    <div class="row">
      <div class="col margin-top">
        <h1>Tools</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group row">
          <div class="col-md-3">
            <label>Primary Color</label>
            <input type="color" v-model="color1" class="form-control"/>
          </div>
          <div class="col-md-3">
            <label>Secondary Color</label>
            <input type="color" v-model="color2" class="form-control"/>
          </div>
          <div class="col-md-3">
            <label>Degree</label>
            <input type="number" v-model="degree" class="form-control"/>
          </div>
          <div class="col-md-3">
            <label>Simple Text</label>
            <input type="text" v-model="txtDemo" class="form-control"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="custom"
             :style="`background: linear-gradient(${degree}deg, ${color1} 0%, ${color2} 100%); height: 30vh;`">
          <h3>{{ txtDemo }}</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <pre v-highlightjs>
          <code class="css">
background: linear-gradient({{degree}}deg, {{ color1 }} 0%, {{color2}} 100%)
background: linear-gradient({{degree}}deg, {{ color1 }} 0%, {{color2}} 100%)
background: linear-gradient({{degree}}deg, {{ color1 }} 0%, {{color2}} 100%)
background: linear-gradient({{degree}}deg, {{ color1 }} 0%, {{color2}} 100%)
          </code>
        </pre>
        <pre>
            <code>
            </code>
          </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        color1: '#7e7de6',
        color2: '#4098ff',
        degree: 90,
        txtDemo: 'Welcome to Laratools'
      }
    }
  }
</script>

<style scoped>
  .custom {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .hljs {
    padding: 0px 25px;
  }

  pre {
    font-size: 100%;
  }
</style>
