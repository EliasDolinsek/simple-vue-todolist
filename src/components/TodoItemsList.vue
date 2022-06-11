<template>
  <div class="list-group">
    <TodoListItem v-for="item in itemsSortedByDate" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import {mapGetters} from "vuex";

export default {
  name: "TodoItemsList",
  components: {TodoListItem},
  computed: mapGetters(["itemsSortedByDate"])
}
</script>