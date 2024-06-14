<script lang="ts">
  import "./app.css"
  import AsyncPosts from "./lib/posts/AsyncPosts.svelte";
  import TodoList from "./lib/todos/TodoList.svelte";
  import WeightConverter from "./lib/stores/WeightConverter.svelte";
</script>

<main class="container mx-auto px-8 w-1/2 flex flex-col item-center">
  <TodoList />
  <AsyncPosts />
  <WeightConverter />
</main>