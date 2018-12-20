<template>



 <v-form v-model="valid">
 <img src="../assets/candreg.png">
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
        v-model="partyname"
        :rules="partynameRules"
        :counter="10"
        label="Party name:"
        required
      ></v-text-field>

      <v-text-field
        v-model="location"
        :rules="locationRules"
        :counter="10"
        label="Party location:"
        required
      ></v-text-field>

       <v-btn color="success">Candidate Register</v-btn>
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
