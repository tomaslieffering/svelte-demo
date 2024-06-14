<script lang="ts">
   import { fly } from 'svelte/transition';
   import { CircleCheck, Trash2 } from 'lucide-svelte';
   import { createEventDispatcher } from 'svelte';
   
   type Todo = {
      id: number;
      todo: string;
      completed: boolean
   }

   const dispatch = createEventDispatcher();

   const completeTodo = () => {
      dispatch("complete", todo)
   }

   const removeTodo = () => {
      dispatch("remove", todo)
   }

   export let todo: Todo;
</script>

<div transition:fly={{ y: -50, duration: 300 }} class="rounded shadow-lg {todo.completed ? 'bg-slate-100 text-slate-500 line-through' : ''}">
   <div class="flex px-6 py-4 ">
     <div class="font-bold text-md grow">{todo.todo}</div>
     {#if !todo.completed}
         <button on:click={completeTodo} class="transition-all hover:text-green-500">
            <CircleCheck />
         </button>
      {:else}
         <button on:click={removeTodo} class="transition-all hover:text-red-500">
            <Trash2 />
         </button>
     {/if}
   </div>
 </div>