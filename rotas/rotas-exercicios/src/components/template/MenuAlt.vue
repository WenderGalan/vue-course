<template>
  <nav class="menu">
    <ul>
      <router-link
        tag="li"
        to="/"
        active-class="active"
        exact
      ><a>Home</a></router-link>
      <router-link
        tag="li"
        to="/usuario"
        active-class="active"
      ><a>User</a></router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

</style>