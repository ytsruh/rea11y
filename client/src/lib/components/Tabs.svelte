<script>
  export let items = [];
  export let activeTabValue = 1;
  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<ul
  class="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap
  list-none border-b-0 pl-0"
>
  {#each items as item}
    <li
      on:click={handleClick(item.value)}
      class={`${
        activeTabValue === item.value ? "bg-primary text-white" : "bg-white dark:bg-coal"
      } py-3 flex-grow text-center `}
    >
      <span>{item.label}</span>
    </li>
  {/each}
</ul>
{#each items as item}
  {#if activeTabValue == item.value}
    <div class="min-h-content bg-white dark:bg-coal p-5">
      <svelte:component this={item.component} />
    </div>
  {/if}
{/each}
