<script>
  import Button from "$lib/components/Button.svelte";
  import { alert } from "$lib/stores/alert";
  import * as helpers from "$lib/helpers";
  import { post } from "$lib/api.svelte";
  let title = "";
  let url = "";

  async function handleSubmit() {
    //Check fields are not empty
    if (title === "" || url === "") {
      alert.set({ variant: "bg-danger", message: "Missing information. Title and URL are needed" });
      return;
    }
    //Check url field is a valid url
    if (!helpers.functions.validURL(url)) {
      alert.set({ variant: "bg-danger", message: "URL is not valid" });
      return;
    }
    //Post data
    try {
      await post("/test", {
        title,
        url,
      });
    } catch (err) {
      goto("/app");
    }
  }
</script>

<div class="my-3 px-2 bg-white dark:bg-coal">
  <h2 class="text-2xl text-coal dark:text-white p-3">Create new test</h2>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
    <div class="md:col-span-5 p-3">
      <div class="mb-3 w-full">
        <label for="title" class="form-label inline-block mb-2 text-coal dark:text-white text-lg">Title</label
        >
        <input
          type="text"
          bind:value={title}
          class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
          id="title"
        />
      </div>
    </div>
    <div class="md:col-span-5 p-3">
      <div class="mb-3 w-full">
        <label for="url" class="form-label inline-block mb-2 text-coal dark:text-white text-lg">URL</label>
        <input
          type="text"
          bind:value={url}
          class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
          id="url"
        />
      </div>
    </div>
    <div class="md:col-span-2 flex items-center">
      <Button class="bg-primary text-white w-full" on:click={handleSubmit}>Create</Button>
    </div>
  </div>
</div>
