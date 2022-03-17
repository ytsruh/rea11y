<script>
  export let results = undefined;
</script>

<div class="container mx-auto py-5">
  {#if results.message}
    <h2 class="text-center dark:text-primary text-5xl py-5">Test Results</h2>
  {/if}
  {#if results.data}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5">
      <div class="p-5 summary-item">
        <h3 class="text-center text-2xl underline">Test URL</h3>
        <p class="text-center text-xl py-3 my-3">{results.data.pageUrl}</p>
      </div>
      <div class="p-5 summary-item">
        <h3 class="text-center text-2xl underline">Page Title</h3>
        <p class="text-center text-xl py-3 my-3">{results.data.documentTitle}</p>
      </div>
      <div class="p-5 summary-item">
        <h3 class="text-center text-2xl underline">Number of Issues</h3>
        <p class="text-center text-xl py-3 my-3">{results.data.issues.length}</p>
      </div>
      <div class="p-5 summary-item">
        <h3 class="text-center text-2xl underline">Overall Result</h3>
        {#if results.data.issues.length <= 10}
          <p class="text-center text-xl bg-primary text-white py-3 my-3 rounded-xl">Pass</p>
        {:else if results.data.issues.length > 10 && results.data.issues.length <= 20}
          <p class="text-center text-xl bg-warning text-white py-3 my-3 rounded-xl">Partial Fail</p>
        {:else}
          <p class="text-center text-xl bg-danger text-white py-3 my-3 rounded-xl">Fail</p>
        {/if}
      </div>
    </div>
    <div class="py-5">
      <h3 class="text-center text-2xl underline">Issues</h3>
      {#each results.data.issues as issue}
        <div class="p-5">
          <h5 class="text-primary">
            Type: <span class="text-coal dark:text-white capitalize">{issue.type}</span>
          </h5>
          <h5 class="text-primary">
            Description: <span class="text-coal dark:text-white">{issue.message}</span>
          </h5>
          <h5 class="text-primary">
            WCAG2 Error Code: <span class="text-coal dark:text-white">{issue.code}</span>
          </h5>
          <h5 class="text-primary">
            HTML Element: <span class="text-coal dark:text-white">{issue.context}</span>
          </h5>
          <h5 class="text-primary">
            CSS Selector: <span class="text-coal dark:text-white">{issue.selector}</span>
          </h5>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .summary-item {
    overflow-wrap: break-word;
  }
</style>
