<script>
  import Button from "$lib/components/Button.svelte";
  import { clickOutside } from "$lib/clickOutside.js";
  let visible = false;
  let clazz;
  export { clazz as class };
  export let buttonText = "Launch";
  export let modalTitle = "Modal Title";
  export let submitText = "Submit";
  export let submitFunction = null;
  function toggleModal() {
    visible = !visible;
  }
  function close() {
    visible = false;
  }
</script>

<Button class={`${clazz || "bg-primary text-white"}`} on:click={toggleModal}>{buttonText}</Button>

{#if visible}
  <!-- Modal -->
  <div class="modal-bg fixed z-20 py-48 px-10 left-0 top-0 w-full h-full">
    <div
      class="z-40 bg-white dark:bg-coal text-coal dark:text-white flex flex-col w-100 md:w-4/6 lg:w-1/2 mx-auto"
      use:clickOutside
      on:click_outside={close}
    >
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
      >
        <h5 class="text-xl font-medium ">{modalTitle}</h5>
      </div>
      <div class="modal-body relative p-4">
        <slot />
      </div>
      <div class="flex flex-shrink-0 flex-wrap gap-4 items-center justify-end p-4 border-t border-gray-200">
        <Button class={`${clazz || "bg-primary text-white"}`} on:click={submitFunction}>{submitText}</Button>
        <Button class="bg-secondary text-coal" on:click={toggleModal}>Cancel</Button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-bg {
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
  }
</style>
