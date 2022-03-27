<script>
  import { goto } from "$app/navigation";
  import { user } from "$lib/stores/auth";
  import { alert } from "$lib/stores/alert";
  import Alert from "$lib/components/Alert.svelte";
  import Loading from "$lib/Loading.svelte";
  let username = "";
  let password = "";
  let submitting = false;
  const url = `${import.meta.env.VITE_BASE_URL}/auth/login`;
  async function handleOnSubmit() {
    try {
      submitting = true;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
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
      const data = await response.json();
      $user = data;
      //sessionStorage.setItem("user", JSON.stringify(data));
      goto("/app");
    } catch (err) {
      submitting = false;
      if (err.message === "Unauthorized") {
        $alert = {
          show: true,
          message: "Error : Incorrect username or password. Please try again",
          variant: "bg-danger",
        };
      } else {
        $alert = {
          show: true,
          message: "Error : Something went wrong, please try to enter you email & password again.",
          variant: "bg-danger",
        };
      }
    }
  }
</script>

<svelte:head>
  <title>Login | Re-a11y</title>
  <meta name="description" content="Login to Rea11y to create & manage accessibility testing projects." />
</svelte:head>

<section>
  <Alert />
  <div class="grid place-items-center pt-28">
    {#if submitting}
      <div class="w-100 md:w-1/2 py-5">
        <Loading />
      </div>
    {:else}
      <div class="w-100 md:w-1/2 py-5 bg-primary dark:bg-coal">
        <h1 class="text-center py-5 text-5xl text-white dark:text-primary">Login</h1>
        <form on:submit|preventDefault={handleOnSubmit}>
          <div class="flex justify-center p-3">
            <div class="mb-3 w-96">
              <label for="username" class="form-label inline-block mb-2 text-white text-lg">Username</label>
              <input
                type="email"
                bind:value={username}
                class="block w-full px-3 py-1.5 rounded m-0 border-2 dark:border-2 dark:border-white dark:bg-coal"
                id="username"
                placeholder="Enter email address / username"
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
          <div class="flex space-x-2 justify-center">
            <button
              type="submit"
              class="inline-block px-6 py-2.5 bg-coal dark:bg-primary text-white uppercase rounded"
            >
              Login
            </button>
          </div>
        </form>
        <div class="text-center">
          <div class="flex justify-center">
            <hr class="border-2 border-white my-5 w-full mx-5 lg:mx-0 lg:w-1/2" />
          </div>
          <h3 class="text-white text-xl">
            Need an account? Register <a href="/register" class="text-coal dark:text-primary">here</a>
          </h3>
        </div>
      </div>
    {/if}
  </div>
</section>
