<script>
   import { weight } from "./store";
</script>

<div>
   <button on:click={weight.increment} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Increment
   </button>
</div>