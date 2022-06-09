<template>
  <div class="container">
    <div class="mt-3">
      <AddTodoItemCard @add-item="handleAddItem"/>
    </div>
  </div>
</template>

<script>
import AddTodoItemCard from "@/components/AddTodoItemCard";

export default {
  name: "OverviewPage",
  components: {AddTodoItemCard},
  data() {
    return {
      items: []
    }
  },
  methods: {
    handleAddItem(item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>

</style>