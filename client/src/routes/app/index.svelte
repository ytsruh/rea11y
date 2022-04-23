<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { get } from "$lib/api.svelte";
  import Loading from "$lib/Loading.svelte";
  import Button from "$lib/components/Button.svelte";
  let loading = true;
  let data = {};
  onMount(async () => {
    try {
      const response = await get("/dashboard");
      data = response;
      loading = false;
    } catch (err) {
      goto("/app");
    }
  });
</script>

{#if loading}
  <Loading />
{:else if data}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="order-2 md:order-1 flex justify-center">
      <div class="w-96 bg-white dark:bg-coal text-black dark:text-white rounded-md py-5 my-auto text-center">
        <span class="text-5xl py-2">{data.testsCount ? data.testsCount : 0}</span>
        <h5 class="text-xl">Number of Tests</h5>
      </div>
    </div>
    <div class="order-1 md:order-2 text-center">
      <a href="/app/tests">
        <div class="bg-primary text-white w-full p-2 my-2 rounded-md">Create / View Tests</div>
      </a>
      <a href="/app/account">
        <div class="bg-warning text-white w-full p-2 my-2 rounded-md">Account</div>
      </a>
      <a href="/app/settings">
        <div class="bg-white text-black w-full p-2 my-2 rounded-md">Settings</div>
      </a>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#if data.latestTests}
      <div class="bg-white dark:bg-coal dark:text-white my-5 p-2 rounded-md text-center text-xl">
        {#if data.latestTests && data.latestTests.length > 0}
          <h5>5 Most Recent Tests</h5>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <tbody>
                      {#each data.latestTests as test}
                        <tr class="border-y">
                          <td class="px-6 py-4 text-sm">{test.title}</td>
                          <td class="px-6 py-4">
                            <Button link={`/app/tests/${test._id}`}>Go</Button>
                          </td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        {:else}
          <h2 class="text-center">No Tests have been created yet. The 5 most recent will be shown here.</h2>
        {/if}
      </div>
    {/if}
  </div>
{/if}
