<script>
  import Button from "$lib/components/Button.svelte";
  import { alert } from "$lib/stores/alert";
  import Loading from "$lib/Loading.svelte";
  import ReportsTab from "$lib/reports/ReportsTab.svelte";
  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = "mUxo4Cy";
  let loading = false;
  let results = null;
  let notices = [];
  let warnings = [];
  let errors = [];
  let testUrl = "";
  async function runTest() {
    const url = `${apiURL}/api/fullTest?key=${apiKey}`;
    loading = true;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: testUrl }),
      });
      const response = await res.json();
      loading = false;
      results = response.data;
      for (let i = 0; i < results.issues.length; i++) {
        const element = results.issues[i];
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
    } catch (err) {
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      loading = false;
    }
  }
</script>

<div
  class="w-full bg-white dark:bg-coal text-coal dark:text-white flex justify-center items-center rounded-md"
>
  <div class="text-center w-4/5 py-5">
    <input
      type="text"
      class="bg-transparent text-3xl text-center placeholder:text-secondary placeholder:dark:text-secondary
      focus:outline-none w-full border-b py-1"
      placeholder="Enter test url..."
      bind:value={testUrl}
    />
    <div class="py-6">
      <Button on:click={runTest}>Run Test</Button>
    </div>
  </div>
</div>

{#if loading}
  <Loading />
{/if}

{#if results}
  <!-- <div
    class="w-full bg-white dark:bg-coal text-coal dark:text-white flex justify-center items-center my-5 rounded-md"
  > -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-4 w-100 my-5 w-full bg-white dark:bg-coal text-coal dark:text-white rounded-md"
  >
    <div class="text-center flex flex-col place-content-center">
      <h2 class="text-xl py-2 mt-5 md:mt-0">Page Title : {results.documentTitle}</h2>
    </div>
    <div class="w-full flex flex-col items-center text-center px-5">
      <div class="bg-secondary text-black rounded-md p-2 m-2 w-full">
        Total Issues : {notices.length + warnings.length + errors.length}
      </div>
      <div class="bg-primary text-white rounded-md p-2 m-2 w-full">Notices : {notices.length}</div>
      <div class="bg-warning text-white rounded-md p-2 m-2 w-full">Warnings : {warnings.length}</div>
      <div class="bg-danger text-white rounded-md p-2 m-2 w-full">Errors : {errors.length}</div>
    </div>
  </div>
  <div class="w-100 my-5">
    <ReportsTab data={results.issues} />
  </div>
{/if}
