<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { alert } from "$lib/stores/alert";
  import PageHeader from "$lib/PageHeader.svelte";
  import Loading from "$lib/Loading.svelte";
  const user = JSON.parse(sessionStorage.getItem("user"));
  const url = `${import.meta.env.VITE_BASE_URL}/account`;
  let loading = true;
  let accountName = "";
  let name = "";
  let userName = "";

  async function handleSubmit() {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `token ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountName,
          name,
          userName,
        }),
      });
      const data = await res.json();
      alert.set({ variant: "bg-primary", message: "Account successfully updated" });
      goto("/app");
    } catch (err) {
      console.log(err);
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  }

  onMount(async () => {
    try {
      const res = await fetch(url, {
        headers: { Authorization: `token ${user.token}` },
      });
      const data = await res.json();
      accountName = data.body.accountName;
      userName = data.body.username;
      name = data.body.name;
      loading = false;
    } catch (err) {
      console.log(err);
      alert.set({ variant: "bg-danger", message: "Something went wrong, please try again" });
      goto("/app");
    }
  });
</script>

<div>
  {#if loading}
    <Loading />
  {:else}
    <PageHeader>Account & Profile</PageHeader>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
      <div class="bg-white dark:bg-coal px-10 py-5">
        <h2 class="text-center text-2xl py-5">Update details</h2>
        <form class="py-5" on:submit|preventDefault={handleSubmit}>
          <div class="flex justify-center py-3">
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
          <div class="flex justify-center py-3">
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
          <div class="flex justify-center py-3">
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
          <div class="flex">
            <button
              type="submit"
              class="inline-block px-6 py-2.5 bg-coal dark:bg-primary text-white uppercase rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}
</div>
