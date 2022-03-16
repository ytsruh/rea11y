<script>
  import Loading from "$lib/Loading.svelte";
  import IoIosConstruct from "svelte-icons/io/IoIosConstruct.svelte";
  import TestResults from "$lib/TestResults.svelte";
  let testUrl;
  let loading = false;
  let error = false;
  let results = false;

  async function runTest() {
    try {
      results = false;
      error = false;
      loading = true;
      const res = await fetch("http://localhost:7071/api/quickTest", {
        method: "POST",
        body: JSON.stringify({
          url: testUrl,
        }),
      });
      const json = await res.json();
      loading = false;
      results = json;
    } catch (err) {
      loading = false;
      error = err;
      console.log(err);
    }
  }
</script>

<svelte:head>
  <title>Quick Test | Re-a11y</title>
  <meta
    name="description"
    content="Perform a quick test by enterting any url. We will perform a scan and return the major errors on the page so you can work to address them."
  />
</svelte:head>

<section class="flex justify-center bg-primary dark:bg-neutral-900 text-white">
  <div class="basis-9/12 lg:basis-6/12 my-10">
    <h1 class="text-5xl my-5">Run a Quick Test</h1>
    <p class="text-xl my-3">
      Enter any valid url to perform a quick scan. A quick scan will only show errors & issues that should be
      fixed as a matter of urgency.
    </p>
    <div class="my-10">
      <div class="flex grow border-2 rounded-md border-white">
        <button class="flex items-center justify-center px-4 bg-primary text-white">
          <div class="search-icon inline-flex mx-2 ">
            <IoIosConstruct />
          </div>
        </button>
        <input
          type="text"
          class="px-4 py-2 w-full text-coal dark:text-white dark:bg-coal "
          placeholder="Enter url..."
          bind:value={testUrl}
        />
      </div>
      <div class="flex py-5 justify-center">
        <button class="bg-coal dark:bg-primary text-white rounded-md px-5 py-3" on:click={runTest}
          >Run Test</button
        >
      </div>
    </div>
  </div>
</section>

{#if results}
  <section class="dark:bg-coal">
    <TestResults {results} />
  </section>
{:else}
  <section class="flex flex-col place-content-center h-96 dark:bg-coal">
    {#if loading}
      <Loading />
    {:else if error}
      <div class="text-center">
        <h3 class="text-2xl py-5">An Error has Occured</h3>
        <h4 class="text-xl">Please try again & ensure you have entered a valid url</h4>
      </div>
    {:else}
      <div class="text-center">
        <h3 class="text-2xl py-5">Enter a url in the search box above to perform a test</h3>
      </div>
    {/if}
  </section>
{/if}

<style>
  .search-icon {
    width: 32px;
    height: 32px;
  }
</style>
