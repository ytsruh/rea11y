<script>
  import Button from "$lib/components/Button.svelte";
</script>

<div class="flex justify-center bg-white dark:bg-coal">
  <div class="block shadow-lg max-w-sm text-center border dark:border-darkGrey">
    <div class="p-6">
      <h5 class="text-xl font-medium mb-2">Date : 02/04/2022</h5>
      <div class="grid grid-cols-3 gap-4 justify-around py-3">
        <div class="bg-danger text-white py-3 px-5 rounded-md">
          <h5 class="text-3xl">35</h5>
          <p>Errors</p>
        </div>
        <div class="bg-warning text-white py-3 px-5 rounded-md">
          <h5 class="text-3xl">35</h5>
          <p>Warnings</p>
        </div>
        <div class="bg-primary text-white py-3 px-5 rounded-md">
          <h5 class="text-3xl">35</h5>
          <p>Notices</p>
        </div>
      </div>
    </div>
    <div class="py-5 border-t border-midGrey"><Button>View</Button></div>
  </div>
</div>
