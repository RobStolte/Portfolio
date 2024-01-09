<script>
  export let name;
  export let classname;
  let isActive = false;

  const toggleCategory = () => {
    const elements = document.querySelectorAll(`.${classname}`);
    elements.forEach(element => {
      element.classList.toggle('hidden');
    });
    isActive = !isActive;
    hideLastVisibleLine();
  };

  const hideLastVisibleLine = () => {
    const elements = Array.from(document.querySelectorAll('.education__time'));
    const visibleElements = elements.filter(element => element.offsetParent !== null);
    // Add your code here to hide the line of the last visible element
  };
</script>

<div class="button_custom_container" class:toggled_active={isActive}>
  <button data-classname={classname} class="button_custom" on:click={toggleCategory}>
    {name}
  </button>
</div>