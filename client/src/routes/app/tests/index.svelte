<script>
  import { onMount } from "svelte";
  import { get } from "$lib/api.svelte";
  import { goto } from "$app/navigation";
  import CreateTest from "$lib/tests/CreateTest.svelte";
  import Loading from "$lib/Loading.svelte";
  import ImgCard from "$lib/components/ImgCard.svelte";
  import { functions } from "$lib/helpers.js";
  let loading = true;
  const baseURL = import.meta.env.VITE_AZURE_STORAGE_URL;
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
  {#if loading}
    <div class="my-10"><Loading /></div>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2 2xl:grid-cols-4 gap-4">
      {#if data.length > 0}
        {#each data as test}
          <ImgCard
            header={`Created by: ${test.createdBy.name ? test.createdBy.name : test.createdBy.username}`}
            title={test.title}
            img={test.image ? baseURL + test.image : "https://via.placeholder.com/150?text=Placeholder"}
            link={`/app/tests/${test._id}`}
            footer={`Last Tested : ${
              test.lastTested ? functions.dayjs(test.lastTested).format("D MMM YY") : `Not Tested Yet`
            }`}
          />
        {/each}
      {/if}
    </div>
  {/if}
</div>
