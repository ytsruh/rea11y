<script>
  export let data;
  import { functions } from "$lib/helpers.js";
  import Button from "$lib/components/Button.svelte";
</script>

<div class="flex justify-center bg-white dark:bg-coal">
  <div class="block shadow-lg max-w-sm text-center border dark:border-darkGrey">
    <div class="p-6">
      <h5 class="text-xl font-medium mb-2">Date : {functions.dayjs(data.updatedAt).format("D MMM YY")}</h5>
      <div class="grid grid-cols-3 gap-4 justify-around py-3">
        <div class="bg-danger text-white py-3 px-5 rounded-md">
          <h5 class="text-3xl">{data.error ? data.error : 0}</h5>
          <p>Errors</p>
        </div>
        <div class="bg-warning text-white py-3 px-5 rounded-md">
          <h5 class="text-3xl">{data.warning ? data.warning : 0}</h5>
          <p>Warnings</p>
        </div>
        <div class="bg-primary text-white py-3 px-5 rounded-md">
          <h5 class="text-3xl">{data.notice ? data.notice : 0}</h5>
          <p>Notices</p>
        </div>
      </div>
    </div>
    <div class="py-5 border-t border-midGrey"><Button link={"/app/reports/" + data._id}>View</Button></div>
  </div>
</div>
