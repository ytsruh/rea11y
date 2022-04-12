<script>
  import { alert } from "$lib/stores/alert";
  import Button from "$lib/components/Button.svelte";
  import Chip from "$lib/components/Chip.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
  import TabResults from "$lib/tests/TabResults.svelte";
  import TabNotes from "$lib/tests/TabNotes.svelte";

  function handleDelete() {
    console.log("Deleted");
  }

  let data = { title: "Page Title", url: "www.refinitiv.com/en", createdBy: "Chris Hurst" };
  // List of tab items with labels, values and assigned components
  let items = [
    { label: "Results", value: 1, component: TabResults },
    { label: "Notes", value: 2, component: TabNotes },
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="flex justify-center items-center h-full">
    <div class="text-center text-coal px-6 md:px-12">
      <div>
        <input
          type="text"
          class="bg-transparent text-5xl text-center font-bold focus:outline-none dark:text-white"
          bind:value={data.title}
        />
      </div>
      <h2 class="text-xl py-3 dark:text-white">{data.url}</h2>
      <h5 class="text-md py-3 dark:text-white">Created by: <span class="text-sm">{data.createdBy}</span></h5>
      <div class="flex justify-center py-5">
        <Button class="border-2 border-midGrey text-midGrey mx-2">Change Image</Button>
        <Button class="mx-2 bg-primary text-white">Update</Button>
      </div>
      <div class="flex justify-center py-3">
        <Chip>Project Name</Chip>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap justify-center order-first md:order-2">
    <img src="https://via.placeholder.com/150" class="h-48 md:h-64 w-full md:max-w-sm" alt="" />
  </div>
</div>

<!-- <div class="flex flex-wrap justify-between lg:justify-evenly py-2"> -->
<div class="py-2 sm:my-5 grid grid-cols-1 sm:grid-cols-4 gap-4">
  <Button class="bg-coal text-white" link="/app/tests">Back to Tests</Button>
  <Button>Run Test Now</Button>
  <Modal buttonText="Add to Project" modalTitle="Add to Project" class="bg-warning text-white" />
  <Modal
    buttonText="Delete"
    submitText="Delete?"
    submitFunction={handleDelete}
    modalTitle="Are you sure you want to delete?"
    class="bg-danger text-white"
  >
    <p>Confirm you wish to delete. Once done, this cannot be reversed.</p>
  </Modal>
</div>
<hr class="border-coal" />
<div class="py-5">
  <Tabs {items} />
</div>
