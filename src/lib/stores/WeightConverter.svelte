<script>
   import { weight, asPounds } from "./store";
   import Increment from "./Increment.svelte";
   import Decrement from "./Decrement.svelte";
   import Double from "./Double.svelte";
   import Reset from "./Reset.svelte";
</script>

<div>
   <h2 class="text-2xl font-bold py-8">Weight converter</h2>
   <div class="flex justify-around pb-8">
      <div class="flex flex-col items-center p-8 rounded border border-dashed">
         <span>Weight in kilograms:</span>
         <h3 class="text-3xl font-bold">
            {$weight}kg
         </h3>
      </div>
      <div class="flex flex-col items-center p-8 rounded border border-dashed">
         <span>Weight in pounds:</span>
         <h3 class="text-3xl font-bold">
            {$asPounds.toFixed(1)}lbs
         </h3>
      </div>
   </div>
   <div class="flex gap-4 justify-center pb-8">
      <Increment />
      <Decrement />
      <Double />
      <Reset />
   </div>
</div>