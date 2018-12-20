<template>

 
  <v-form v-model="valid">
  <img src="../assets/registation.jpg">

      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name:"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail:"
        required
      ></v-text-field>

      <v-text-field
        v-model="mobile"
        :rules="mobileRules"
        :counter="10"
        label="mobile no:"
        required
      ></v-text-field>

      <v-text-field
        v-model="addharid"
        :rules="addharidRules"
        :counter="10"
        label="Addhar id:"
        required
      ></v-text-field>

       <v-text-field
        v-model="creatpassword"
        :rules="creatpasswordRules"
        label="Creat password:"
        required
      ></v-text-field>

       <v-text-field
        v-model="conformpassword"
        :rules="conformpasswordRules"
        label="Conform password:"
        required
      ></v-text-field>

      <v-btn color="success">Register</v-btn>
    <v-btn color="error">cancel</v-btn>

    </v-form>
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
