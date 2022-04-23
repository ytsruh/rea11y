<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { get } from "$lib/api.svelte";
  import { functions } from "$lib/helpers.js";
  import Loading from "$lib/Loading.svelte";
  import ReportsTab from "$lib/reports/ReportsTab.svelte";
  const id = $page.params.id;
  let loading = true;
  let data = {};

  onMount(async () => {
    try {
      const response = await get(`/report/${id}`);
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
  <div class="grid grid-cols-1 md:grid-cols-2 w-100 mx-5">
    <div class="text-center flex flex-col place-content-center">
      <h1 class="text-3xl py-2 ">{data.summary.pageUrl}</h1>
      <h2 class="text-xl py-2">Page Title : {data.summary.documentTitle}</h2>
      <h3 class="text-xl py-2">Date Tested : {functions.dayjs(data.summary.updatedAt).format("D MMM YY")}</h3>
    </div>
    <div class="w-full flex flex-col items-center text-center">
      <div class="bg-secondary text-black rounded-md p-2 m-2 w-full">
        Total Issues : {data.summary.allIssues}
      </div>
      <div class="bg-primary text-white rounded-md p-2 m-2 w-full">Notices : {data.summary.notice}</div>
      <div class="bg-warning text-white rounded-md p-2 m-2 w-full">Warnings : {data.summary.warning}</div>
      <div class="bg-danger text-white rounded-md p-2 m-2 w-full">Errors : {data.summary.error}</div>
    </div>
  </div>
  <div class="w-100 my-5">
    <ReportsTab data={data.report.data.issues} />
  </div>
{:else}
  <div class="my-10">
    <div class="text-center text-xl">
      <span class="text-danger">Error : </span>This is not a valid report or something has gone wrong
    </div>
  </div>
{/if}
