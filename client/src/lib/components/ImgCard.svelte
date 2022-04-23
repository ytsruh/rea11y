<script>
  import Button from "$lib/components/Button.svelte";
  export let header = null;
  //export let img = "https://via.placeholder.com/150";
  export let img = null;
  export let title = null;
  export let link = null;
  export let footer = null;
</script>

<div class="flex justify-center">
  <div class="block shadow-lg bg-white dark:bg-coal max-w-sm text-center rounded-md">
    <div class="py-3 px-6">{header}</div>
    {#if img}
      <img class="object-cover h-48 w-96" src={img} alt={title} />
    {/if}
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{title}</h5>
      <div class="pt-5 pb-5">
        <Button class="bg-primary text-white" {link}>View</Button>
      </div>
    </div>
    <div class="py-3 px-6 border-t border-lightGray dark:text-white">{footer}</div>
  </div>
</div>
