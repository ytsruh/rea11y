<script>
  import { slide } from "svelte/transition";
  import IoIosArrowDropdownCircle from "svelte-icons/io/IoIosArrowDropdownCircle.svelte";
  import IoIosCheckmarkCircle from "svelte-icons/io/IoIosCheckmarkCircle.svelte";
  export let sections = [];

  const expand = (section) => {
    sections = sections.map((s) => {
      s.active = false;
      if (s.id === section.id) {
        s.active = true;
      }
      return s;
    });
  };
</script>

{#each sections as section}
  <div class="m-10">
    <div class="flex flex-row" on:click={() => expand(section)}>
      <h3 class="text-2xl border-b-2 border-primary w-full">{section.title}</h3>
      <div class="icon inline-flex mx-2 text-primary">
        {#if !section.active}
          <IoIosArrowDropdownCircle />
        {:else}
          <IoIosCheckmarkCircle />
        {/if}
      </div>
    </div>

    {#if section.active}
      <div class="py-5" transition:slide>
        <p>{section.content}</p>
      </div>
    {/if}
  </div>
{/each}

<style>
  .icon {
    width: 48px;
    height: 48px;
  }
</style>
