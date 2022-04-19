<script>
  import ReportItem from "./ReportItem.svelte";
  export let data = [];
  let notices = [];
  let warnings = [];
  let errors = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.type === "notice") {
      notices.push(element);
    }
    if (element.type === "warning") {
      warnings.push(element);
    }
    if (element.type === "error") {
      errors.push(element);
    }
  }
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
    <span>Notices</span>
  </li>
  <li
    on:click={handleClick(1)}
    class={`${
      activeTabValue === 1 ? "bg-warning text-white" : "bg-white dark:bg-coal"
    } py-3 flex-grow text-center `}
  >
    <span>Warnings</span>
  </li>
  <li
    on:click={handleClick(2)}
    class={`${
      activeTabValue === 2 ? "bg-danger text-white" : "bg-white dark:bg-coal"
    } py-3 flex-grow text-center `}
  >
    <span>Errors</span>
  </li>
</ul>
{#if activeTabValue == 0}
  <div class="min-h-content bg-white dark:bg-coal p-5">
    {#if notices.length > 0}
      <div class="py-1">
        {#each notices as notice, i}
          <ReportItem data={notice} index={i + 1} />
        {/each}
      </div>
    {:else}
      <h1 class="text-center">No Notices in Report</h1>
    {/if}
  </div>
{/if}
{#if activeTabValue == 1}
  <div class="min-h-content bg-white dark:bg-coal p-5">
    {#if warnings.length > 0}
      <div class="py-1">
        {#each warnings as warning, i}
          <ReportItem data={warning} index={i + 1} />
        {/each}
      </div>
    {:else}
      <h1 class="text-center">No Warnings in Report</h1>
    {/if}
  </div>
{/if}
{#if activeTabValue == 2}
  <div class="min-h-content bg-white dark:bg-coal p-5">
    {#if errors.length > 0}
      <div class="py-1">
        {#each errors as error, i}
          <ReportItem data={error} index={i + 1} />
        {/each}
      </div>
    {:else}
      <h1 class="text-center">No Errors in Report</h1>
    {/if}
  </div>
{/if}
