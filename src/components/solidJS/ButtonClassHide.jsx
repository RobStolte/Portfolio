import { createSignal } from "solid-js";

function HideClassButton({ name, classname }) {
  const [isActive, setIsActive] = createSignal(false);

  const toggleCategory = () => {
    const elements = document.querySelectorAll(`.${classname}`);
    elements.forEach(element => {
      element.classList.toggle('hidden');
    });
    setIsActive(!isActive());
    hideLastVisibleLine();
  };

  const hideLastVisibleLine = () => {
    const elements = Array.from(document.querySelectorAll('.education__time'));
    const visibleElements = elements.filter(element => element.offsetParent !== null);
    // Add your code here to hide the line of the last visible element
  };

  return (
    <div class={`button_custom_container ${isActive() ? 'toggled_active' : ''}`}>
      <button data-classname={classname} class="button_custom" onClick={toggleCategory}>
        {name}
      </button>
    </div>
  );
}

export default HideClassButton;