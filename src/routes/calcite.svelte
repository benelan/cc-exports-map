<script>
  import { setAssetPath } from "@esri/calcite-components/dist/components";
  import "@esri/calcite-components/dist/components/calcite-button.js";
  import "@esri/calcite-components/dist/calcite/calcite.css";
  setAssetPath(
    "https://unpkg.com/@esri/calcite-components/dist/calcite/assets"
  );

  /**
   * Using dynamic imports is how we have been doing it
   * Uncomment onMount block below and comment the imports above for a working example
   * */


  // import { onMount } from 'svelte';
  // onMount(async () => {
  //   import("@esri/calcite-components/dist/components").then(
  //     ({ setAssetPath }) =>
  //       setAssetPath(
  //         "https://unpkg.com/@esri/calcite-components/dist/calcite/assets"
  //       )
  //   );
  //   import("@esri/calcite-components/dist/calcite/calcite.css");
  //   import("@esri/calcite-components/dist/components/calcite-button.js");
  // });
</script>

<main>
  <calcite-button>Test</calcite-button>
</main>
