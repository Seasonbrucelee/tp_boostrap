<template>
 <div>
   <h1>Test</h1>
   <navbar></navbar>
 </div>

</template>

<script>
import Navbar from './Navbar.vue'

export default{
  name: 'HelloWorld',
  components:{
    'navbar' : Navbar
  }
}
</script>

<style scoped>
  
</style>
