<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { get, put, upload } from "$lib/api.svelte";
  import Loading from "$lib/Loading.svelte";
  import Button from "$lib/components/Button.svelte";
  let loading = true;
  let accountName = "";
  let name = "";
  let userName = "";
  let imgFile;

  async function handleSubmit() {
    try {
      await put("/account", {
        accountName,
        name,
        userName,
      });
    } catch (err) {
      goto("/app");
    }
  }

  async function uploadImage() {
    try {
      if (imgFile && imgFile[0]) {
        loading = true;
        const formData = new FormData();
        formData.append("imgFile", imgFile[0]);
        upload("/account/profile", formData);
      }
    } catch (err) {
      console.log(err);
    }
  }

  onMount(async () => {
    try {
      const data = await get("/account");
      accountName = data.body.accountName;
      userName = data.body.username;
      name = data.body.name;
      loading = false;
    } catch (err) {
      goto("/app");
    }
  });
</script>

<div>
  {#if loading}
    <Loading />
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
      <div class="bg-white dark:bg-coal px-10 py-5">
        <h2 class="text-center text-2xl py-5">Update details</h2>
        <form class="py-5" on:submit|preventDefault={handleSubmit}>
          <div class="flex justify-center py-1">
            <div class="mb-3 w-full">
              <label for="username" class="form-label inline-block mb-2 text-coal dark:text-white text-lg"
                >Username</label
              >
              <input
                type="text"
                bind:value={userName}
                class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
                id="username"
                disabled
              />
            </div>
          </div>
          <div class="flex justify-center py-1">
            <div class="mb-3 w-full">
              <label for="name" class="form-label inline-block mb-2 text-coal dark:text-white text-lg"
                >Name</label
              >
              <input
                type="text"
                bind:value={name}
                class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
                id="name"
                placeholder="Update your name"
              />
            </div>
          </div>
          <div class="flex justify-center py-1">
            <div class="mb-3 w-full">
              <label for="username" class="form-label inline-block mb-2 text-coal dark:text-white text-lg"
                >Account Name</label
              >
              <input
                type="text"
                bind:value={accountName}
                class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
                id="username"
                placeholder="Update your name"
              />
            </div>
          </div>
          <div class="py-3">
            <Button class="bg-primary text-white" on:click={handleSubmit}>Update</Button>
          </div>
        </form>
      </div>
      <div class="bg-white dark:bg-coal px-10 py-5 text-center grid">
        <div class="upload-btn-wrapper self-center">
          <div class="py-3">
            <img
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              class="rounded-full w-32 h-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <input type="file" name="imageFile" bind:files={imgFile} />
          </div>
          {#if imgFile}
            awaiting upload
          {/if}
          <div class="py-3">
            <Button on:click={uploadImage}>Upload image</Button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
  }
  .upload-btn-wrapper input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
</style>
