<script>
  import Button from "$lib/components/Button.svelte";
  import { alert } from "$lib/stores/alert";
  import Loading from "$lib/Loading.svelte";
  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = "mUxo4Cy";
  let loading = false;
  let results = null;
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
  <div
    class="w-full bg-white dark:bg-coal text-coal dark:text-white flex justify-center items-center my-5 rounded-md"
  >
    Got results
  </div>
{/if}
