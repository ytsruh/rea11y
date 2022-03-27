<script>
  import { alert } from "$lib/stores/alert";
  import Button from "$lib/components/Button.svelte";
  let data = { title: "Page Title", url: "www.refinitiv.com/en", createdBy: "Chris Hurst" };

  async function createNote() {
    alert.set({ variant: "bg-warning", message: "Apologies. Notes are not yet available" });
  }
</script>

<div
  class="relative overflow-hidden bg-no-repeat bg-cover h-64"
  style="
    background-position: 50%;
    background-image: url('https://via.placeholder.com/150?text=Rea11y');
  "
>
  <div
    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
    style="background-color: rgba(0, 0, 0, 0.75)"
  >
    <div class="flex justify-center items-center h-full">
      <div class="text-center text-white px-6 md:px-12">
        <div>
          <input
            type="text"
            class="bg-transparent text-5xl text-center font-bold focus:outline-none dark:text-primary"
            bind:value={data.title}
          />
        </div>
        <h2 class="text-xl py-3">{data.url}</h2>
        <h5 class="text-md py-3">Created by: <span class="text-sm">{data.createdBy}</span></h5>
        <div class="flex justify-center py-5">
          <div><Button class="border-2 border-midGrey text-midGrey">Change Image</Button></div>
          <div><Button>Update</Button></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="flex justify-between lg:justify-evenly py-2">
  <Button class="bg-coal text-white" link="/app/tests">Back to Tests</Button>
  <Button>Run Test Now</Button>
  <Button class="bg-warning text-white" on:click={createNote}>Create Note</Button>
</div>
<hr class="border-coal" />
<div>
  <h2 class="text-3xl text-center py-5">Results</h2>
</div>
