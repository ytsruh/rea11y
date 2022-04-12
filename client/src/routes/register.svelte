<script>
  import { goto } from "$app/navigation";
  import { alert } from "$lib/stores/alert";
  import Alert from "$lib/components/Alert.svelte";
  import Loading from "$lib/Loading.svelte";
  let accountName = "";
  let name = "";
  let username = "";
  let password = "";
  let confirmPassword = "";
  let submitting = false;
  const url = `${import.meta.env.VITE_BASE_URL}/auth/create`;

  async function handleOnSubmit() {
    try {
      submitting = true;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountName,
          name,
          username,
          password,
          confirmPassword,
        }),
      });
      //Check for ok response
      if (!response.ok) {
        //Throw error if not ok
        if (response.status === 401) {
          throw Error("Unauthorized");
        } else {
          throw Error("Server error");
        }
      }
      // Clear submitting, store data & redirect
      submitting = false;
      goto("/login");
    } catch (err) {
      submitting = false;
      $alert = {
        show: true,
        message: "Error : Something went wrong, please try again.",
        variant: "bg-danger",
      };
    }
  }
</script>

<svelte:head>
  <title>Register for an account | Re-a11y</title>
  <meta
    name="description"
    content="Create a free account to start using accessibility testing project management software"
  />
</svelte:head>

<section>
  <Alert />
  <div class="grid place-items-center py-20">
    {#if submitting}
      <div class="w-100 md:w-1/2 py-5">
        <Loading />
      </div>
    {:else}
      <div class="w-100 md:w-1/2 py-5 bg-primary dark:bg-coal rounded-md">
        <h1 class="text-center py-5 text-5xl text-white dark:text-primary">Register</h1>
        <form on:submit|preventDefault={handleOnSubmit}>
          <div class="flex justify-center p-3">
            <div class="mb-3 w-96">
              <label for="accountName" class="form-label inline-block mb-2 text-white text-lg">
                Account Name
              </label>
              <input
                type="accountName"
                bind:value={accountName}
                class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
                id="accountName"
                placeholder="Enter Account Name"
              />
            </div>
          </div>
          <div class="flex justify-center p-3">
            <div class="mb-3 w-96">
              <label for="name" class="form-label inline-block mb-2 text-white text-lg">Name</label>
              <input
                type="text"
                bind:value={name}
                class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div class="flex justify-center p-3">
            <div class="mb-3 w-96">
              <label for="email" class="form-label inline-block mb-2 text-white text-lg">Email</label>
              <input
                type="email"
                bind:value={username}
                class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
                id="email"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div class="flex justify-center p-3">
            <div class="mb-3 w-96">
              <label for="password" class="form-label inline-block mb-2 text-white text-lg">Password</label>
              <input
                type="password"
                bind:value={password}
                class="block w-full px-3 py-1.5 rounded m-0 dark:border-2 dark:border-white dark:bg-coal"
                id="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div class="flex justify-center p-3">
            <div class="mb-3 w-96">
              <label for="confirmPassword" class="form-label inline-block mb-2 text-white text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                bind:value={confirmPassword}
                class="block w-full px-3 py-1.5 rounded m-0 dark:border-2 dark:border-white dark:bg-coal"
                id="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div class="flex space-x-2 justify-center">
            <button
              type="submit"
              class="inline-block px-6 py-2.5 bg-coal dark:bg-primary text-white uppercase rounded"
            >
              Register
            </button>
          </div>
        </form>

        <div class="text-center">
          <div class="flex justify-center">
            <hr class="border-2 border-white my-5 w-full mx-5 lg:mx-0 lg:w-1/2" />
          </div>
          <h3 class="text-white text-xl">
            Already have an account? Login <a href="/login" class="text-coal dark:text-primary">here</a>
          </h3>
        </div>
      </div>
    {/if}
  </div>
</section>
