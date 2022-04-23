<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { get, put, remove, upload, runtest } from "$lib/api.svelte";
  import Button from "$lib/components/Button.svelte";
  import Loading from "$lib/Loading.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import TestTabs from "$lib/tests/TestTabs.svelte";
  const id = $page.params.id;
  let loading = true;
  let data = {};
  let inputField;
  let imgFile;
  const baseURL = import.meta.env.VITE_AZURE_STORAGE_URL;
  onMount(async () => {
    try {
      const response = await get(`/test/${id}`);
      data = response;
      loading = false;
    } catch (err) {
      goto("/app");
    }
  });

  function uploadImage() {
    try {
      if (imgFile && imgFile[0]) {
        loading = true;
        const formData = new FormData();
        formData.append("imgFile", imgFile[0]);
        upload(`/test/${id}/image`, formData);
      }
    } catch (err) {
      goto("/app");
    }
  }

  function startTest() {
    loading = true;
    runtest(`/test/${id}/run`);
  }

  function handleUpdate() {
    loading = true;
    put(`/test/${id}`, data);
  }

  function handleDelete() {
    loading = true;
    remove(`/test/${id}`);
  }
</script>

{#if loading}
  <Loading />
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex justify-center items-center h-full">
      <div class="text-center text-coal px-6 md:px-12 w-full">
        <textarea
          rows="1"
          class="resize-y bg-transparent text-4xl text-center font-bold w-full focus:outline-none dark:text-white"
          bind:value={data.title}
        />
        <h2 class="text-xl py-3 dark:text-white">{data.url}</h2>
        <h5 class="text-md py-3 dark:text-white">
          Created by: <span class="text-sm">{data.createdBy.name}</span>
        </h5>
        <div class="flex justify-center py-5">
          <Button
            class="border-2 border-midGrey text-midGrey mx-2"
            on:click={() => {
              inputField.click();
            }}>Change Image</Button
          >
          <input
            style="display:none"
            type="file"
            bind:this={inputField}
            bind:files={imgFile}
            on:change={uploadImage}
          />
          <Button on:click={handleUpdate} class="mx-2 bg-primary text-white">Update</Button>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center order-first md:order-2">
      <img
        src={data.image ? baseURL + data.image : "https://via.placeholder.com/150"}
        class="h-48 md:h-64 w-full md:max-w-sm"
        alt=""
      />
    </div>
  </div>

  <div class="py-2 sm:my-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
    <Button class="bg-coal text-white" link="/app/tests">Back to Tests</Button>
    <Button on:click={startTest}>Run Test Now</Button>
    <Modal
      buttonText="Delete"
      submitText="Delete?"
      submitFunction={handleDelete}
      modalTitle="Are you sure you want to delete?"
      class="bg-danger text-white"
    >
      <p>Confirm you wish to delete. Once done, this cannot be reversed.</p>
    </Modal>
  </div>
  <hr class="border-coal" />
  <div class="py-5">
    <TestTabs results={data.reports} />
  </div>
{/if}

<style>
  input[type="file"] {
    display: none;
  }
</style>
