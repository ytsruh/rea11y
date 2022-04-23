<script>
  import ResultsCard from "$lib/tests/ResultsCard.svelte";
  export let results = [];
  export let notes = [];
  export let activeTabValue = 0;
  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<ul
  class="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap
  list-none border-b-0 pl-0"
>
  <li
    on:click={handleClick(0)}
    class={`${
      activeTabValue === 0 ? "bg-primary text-white" : "bg-white dark:bg-coal"
    } py-3 flex-grow text-center `}
  >
    <span>Results</span>
  </li>
  <li
    on:click={handleClick(1)}
    class={`${
      activeTabValue === 1 ? "bg-primary text-white" : "bg-white dark:bg-coal"
    } py-3 flex-grow text-center `}
  >
    <span>Notes</span>
  </li>
</ul>
{#if activeTabValue == 0}
  <div class="min-h-content bg-white dark:bg-coal p-5">
    {#if results.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center py-3">
        {#each results as result}
          <ResultsCard data={result} />
        {/each}
      </div>
    {:else}
      <h1 class="text-center">No Results</h1>
    {/if}
  </div>
{/if}
{#if activeTabValue == 1}
  <div class="min-h-content bg-white dark:bg-coal p-5">
    {#if notes.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center py-3">
        {#each notes as note}
          Note Card
        {/each}
      </div>
    {:else}
      <h1 class="text-center">No Notes</h1>
    {/if}
  </div>
{/if}
