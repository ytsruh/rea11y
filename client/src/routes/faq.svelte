<script>
  import Jumbotron from "$lib/Jumbotron.svelte";
  import Accordian from "$lib/Accordian.svelte";
  import data from "$lib/faq.json";
</script>

<svelte:head>
  <title>Frequently Asked Questions | Re-a11y</title>
  <meta
    name="description"
    content="Accessibility is complicated. This is our attempt to make it easier. We try to answer some of the most common question about accessibility and how to design great & inclusive digital experiences."
  />
</svelte:head>

<Jumbotron img="img/faqheader.jpg">
  <h2 class="text-4xl text-white dark:text-primary my-4">Frequently Asked Questions</h2>
  <h4 class="text-xl text-white my-6">
    Accessibility is complicated. This is our attempt to make it <span class="line-through">easy</span> easier
  </h4>
</Jumbotron>

<section class="flex justify-center">
  <div class="w-full lg:w-3/4 p-5 md:p-10 lg:p-20">
    <Accordian sections={data} />
  </div>
</section>
