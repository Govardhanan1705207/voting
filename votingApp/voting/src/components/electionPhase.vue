<template>
<v-app id="inspire">
    <div>
      <v-alert
        :value="true"
        type="success"
      >
        This is a success alert.
      </v-alert>
  
      <v-alert
        :value="true"
        type="info"
      >
        This is a info alert.
      </v-alert>
  
      <v-alert
        :value="true"
        type="warning"
      >
        This is a warning alert.
      </v-alert>
  
      <v-alert
        :value="true"
        type="error"
      >
        This is a error alert.
      </v-alert>
    </div>
  </v-app>
  </template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
