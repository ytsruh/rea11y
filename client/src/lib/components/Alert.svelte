<script>
  import { alert } from "$lib/stores/alert";
  import { onDestroy } from "svelte";

  export let ms = 3000;
  let visible;
  let timeout;

  const onMessageChange = (message, ms) => {
    clearTimeout(timeout);
    if (!message) {
      // hide Alert if message is empty
      visible = false;
    } else {
      visible = true; // show alert
      // Hide it after ms milliseconds & set alert back to null to stop reappearing
      if (ms > 0) {
        timeout = setTimeout(() => {
          visible = false;
          alert.set(null);
        }, ms);
      }
    }
  };
  $: onMessageChange($alert, ms); // whenever the alert store or the ms props changes run onMessageChange

  onDestroy(() => clearTimeout(timeout)); // make sure we clean-up the timeout
</script>

{#if visible}
  <div class={`${$alert.variant} relative py-3 pl-4 pr-10 text-white rounded-md`} role="alert">
    <p>{$alert.message}</p>
    <span class="absolute inset-y-0 right-0 flex items-center mr-4" on:click={() => (visible = false)}>
      <svg class="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20"
        ><path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        /></svg
      >
    </span>
  </div>
{/if}
