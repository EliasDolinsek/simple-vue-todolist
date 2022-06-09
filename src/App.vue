<template>
  <nav class="navbar navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Todo List</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>
