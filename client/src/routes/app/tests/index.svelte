<script>
  import { onMount } from "svelte";
  import { get } from "$lib/api.svelte";
  import { goto } from "$app/navigation";
  import CreateTest from "$lib/tests/CreateTest.svelte";
  import Loading from "$lib/Loading.svelte";
  import ImgCard from "$lib/components/ImgCard.svelte";
  let loading = true;
  let data = [];
  onMount(async () => {
    try {
      const response = await get("/test");
      data = response;
      loading = false;
    } catch (err) {
      goto("/app");
    }
  });
</script>

<div>
  <CreateTest />
  {#if data}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2 2xl:grid-cols-4 gap-4">
      {#each data as test}
        <ImgCard
          header={`Created by: ${test.createdBy.name ? test.createdBy.name : test.createdBy.username}`}
          title={test.title}
          link={`/app/tests/${test._id}`}
          footer={`Last Tested : ${test.lastTested ? test.lastTested : `Not Tested Yet`}`}
        />
      {/each}
    </div>
  {:else}
    <div class="my-10"><Loading /></div>
  {/if}
</div>
