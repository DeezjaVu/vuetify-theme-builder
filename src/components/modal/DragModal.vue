<template>
  <!-- DragModal content -->
  <span class="drag-modal" :ref="(vn) => (modalElement = vn)"></span>
  <slot></slot>
</template>

<script setup>
  import { onBeforeUnmount, onMounted, ref } from "vue";

  const props = defineProps({
    /**
     * Used as `id` in localStorage, which then allows the position of the modal to be restored when the page is reloaded.
     *
     * When this prop is not set, the default value is `"drag-modal"`.     *
     * This may cause issues when using the same modal component (with default id) on multiple pages.
     *
     * However, when using the same modal component acrros multiple pages with the same `modal-id` value,
     * their position will be the same across pages.
     *
     * @type {string}
     * @default "drag-modal"
     */
    modalId: {
      type: String,
      required: true,
      default: "drag-modal"
    }
  });

  const emit = defineEmits(["modal:drag-start", "modal:drag-move", "modal:drag-end"]);

  const modalElement = ref(null);

  // v-overlay-content element
  const dragElement = ref(null);
  // v-toolbar or v-card-item element
  const clickElement = ref(null);

  // mouse x and y offsets
  const offsetX = ref(0);
  const offsetY = ref(0);

  // drag element margin (default is 24px)
  const marginX = ref(24);
  const marginY = ref(24);

  // window scroll position
  const scrollX = ref(0);
  const scrollY = ref(0);

  let isDragging = false;

  // TODO: DragModal ::: fix modal going offscreen when window is resized.
  // FIXME: DragModal ::: implement mobile positioning (absolute top left).

  onMounted(() => {
    console.log("DragModal ::: onMounted");
    // console.log(" - props tag: ", props.tag);
    // console.log(" - props modal-id: ", props.modalId);
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;

    console.log(" - modalElement: ", modalElement);

    // let qs = "span[id=" + props.modalId + "]";
    // let spanElement = document.querySelector(qs);
    let spanElement = modalElement.value;
    console.log(" - spanElement: ", spanElement);

    // find the active overlay element in the DOM and set it as the dragElement variable.
    let overlay = (dragElement.value = spanElement.parentElement.parentElement);
    console.log(" - dragElement: ", overlay);

    if (overlay !== null || overlay !== undefined) {
      // Get the margin value of the v-dialog-overlay (dragged) element.
      let compStyle = window.getComputedStyle(overlay);
      // console.log(" - compStyle: ", compStyle);

      let mx = (marginX.value = Number(compStyle.marginLeft.split("px")[0]));
      let my = (marginY.value = Number(compStyle.marginTop.split("px")[0]));
      console.log(" - marginX: ", mx);
      console.log(" - marginY: ", my);
    } else {
      console.warn("[DragModal] overlay is null or undefined");
    }

    try {
      let ls = localStorage.getItem("modalLocation");
      // console.log(" - ls: ", ls);
      if (ls === null || ls === undefined || ls.length === 0) {
        console.warn("[DragModal] LocalStorage (modalLocation) is null or undefined or empty");
        ls = localStorage.setItem("modalLocation", JSON.stringify([]));
      }
      let storageObject = JSON.parse(localStorage.getItem("modalLocation"));
      let modalObject = storageObject.find((entry) => entry.name === props.modalId);
      // console.log(" - modalObject: ", modalObject);
      if (modalObject) {
        let modalX = modalObject.left - marginX.value + "px";
        let modalY = modalObject.top - marginY.value + scrollY.value + "px";
        // console.log(" - modalX: ", modalX);
        // console.log(" - modalY: ", modalY);
        // position the modal dialog using the stored values.
        if (dragElement.value) {
          dragElement.value.style.left = modalX;
          dragElement.value.style.top = modalY;
        }
      }
    } catch (err) {
      // console.warn(error);
      console.error(err);
    }

    let toolbar = (clickElement.value = spanElement.nextElementSibling);
    // console.log(" - clickElement: ", toolbar);
    // prevent text selection in toolbar title
    toolbar.classList.add("no-select");

    // add mouse event listeners
    addListeners();
  });

  onBeforeUnmount(() => {
    // console.log("DragModal ::: onBeforeUnmount");
    removeListeners();
  });

  /**
   * Adds the event listeners to the clickElement to drag the modal.
   * This includes:
   * - mousedown: starts dragging the modal
   * - mousemove: moves the modal to the current mouse position
   * - mouseup: stops dragging the modal
   * - mouseout: stops dragging the modal when the mouse leaves the element
   * - mouseleave: stops dragging the modal when the mouse leaves the element
   */
  function addListeners() {
    // console.log("DragModal ::: addListeners");
    clickElement.value.addEventListener("mousedown", clickElementDownHandler);
    clickElement.value.addEventListener("mousemove", clickElementMoveHandler);
    clickElement.value.addEventListener("mouseup", clickElementUpHandler);
    clickElement.value.addEventListener("mouseout", clickElementOutHandler);
    clickElement.value.addEventListener("mouseleave", clickElementOutHandler);
  }

  /**
   * Removes all event listeners from the clickElement.
   * This is a counterpart to `addListeners()` and should be called when the component is unmounted.
   */
  function removeListeners() {
    // console.log("DragModal ::: removeListeners");
    clickElement.value.removeEventListener("mousedown", clickElementDownHandler);
    clickElement.value.removeEventListener("mousemove", clickElementMoveHandler);
    clickElement.value.removeEventListener("mouseup", clickElementUpHandler);
    clickElement.value.removeEventListener("mouseout", clickElementOutHandler);
    clickElement.value.removeEventListener("mouseleave", clickElementOutHandler);
  }

  /**
   * Handles the mousedown event on the `clickElement`.
   * Calculates the x and y offset of the mouse from the top left of the `dragElement`.
   * Sets isDragging to true.
   * @param {MouseEvent} evt
   */
  function clickElementDownHandler(evt) {
    // console.log("DragModal ::: clickElementDownHandler");
    evt.preventDefault();
    let rect = dragElement.value.getBoundingClientRect();
    // console.log(" - evnt: ", evt);
    // console.log(" - dragElement rect: ", rect);
    // Save new mouse x, y offset, overwrite old mouse offset.
    // This is used to calculate the new position of the modal when the mouse moves,
    // as using the offsetX and offsetY properties is unreliable during movement.
    offsetX.value = evt.clientX - rect.left;
    offsetY.value = evt.clientY - rect.top;
    // console.log(" - calculated offsetX: ", offsetX.value, " - calculated offsetY: ", offsetY.value);
    isDragging = true;
    //
    emit("modal:drag-start");
  }

  /**
   * Handles the mousemove event on the `clickElement`.
   * Updates the position of the `dragElement` based on the current mouse position and previously calculated offsets.
   * Prevents the modal from going offscreen by setting boundaries for the x and y positions.
   * @param {MouseEvent} event - The mousemove event.
   */
  function clickElementMoveHandler(evt) {
    // console.log("DragModal ::: clickElementMoveHandler");
    if (isDragging) {
      let x = evt.clientX - offsetX.value - marginX.value;
      let y = evt.clientY - offsetY.value - marginY.value;
      // console.log(" - x: ", x, " - y: ", y);

      // prevent the modal from going offscreen
      // TODO: DragModal ::: implement check for modal going offscreen when window is resized.
      if (x > -marginX.value + 4) dragElement.value.style.left = x + "px";
      if (y > -marginY.value + 4) dragElement.value.style.top = y + scrollY.value + "px";

      let rect = dragElement.value.getBoundingClientRect();
      // console.log(" - rect: ", rect);
      emit("modal:drag-move", { left: rect.left, top: rect.top });
    }
  }

  /**
   * Handles the mouseup event on the `clickElement`.
   * Stores the location of the `dragElement` in local storage,
   * using the modal ID as the key.
   *
   * Sets `isDragging` to false to stop dragging the modal.
   * @param {MouseEvent} event - The mouseup event.
   */
  function clickElementUpHandler(event) {
    // console.log("DragModal ::: clickElementUpHandler");
    if (isDragging) {
      // store the location in local storage
      let rect = dragElement.value.getBoundingClientRect();
      // console.log(" - rect: ", rect);

      let l = rect.left;
      let t = rect.top;
      // save location in local storage
      saveLocation(l, t);
      emit("modal:drag-end", { left: l, top: t });
    }
    isDragging = false;
  }

  /**
   * Handles the mouseout event on the `clickElement`.
   * Sets `isDragging` to false to stop dragging the modal.
   * @param {MouseEvent} event - The mouseout event.
   */
  function clickElementOutHandler(event) {
    // console.log("DragModal ::: clickElementOutHandler");
    if (isDragging) {
      let rect = dragElement.value.getBoundingClientRect();
      // console.log(" - rect: ", rect);
      emit("modal:drag-end", { left: rect.left, top: rect.top });
    }
    isDragging = false;
  }

  /**
   * Saves the location of the modal dialog in local storage.
   * The location is stored as an object with the modal ID as the key,
   * and the left and top positions as properties of the object.
   * If the object does not already exist in local storage, it is created.
   * @param {Number} posX - The x position of the modal dialog.
   * @param {Number} posY - The y position of the modal dialog.
   */
  function saveLocation(posX, posY) {
    // console.log("DragModal ::: saveLocation");
    let ls = localStorage.getItem("modalLocation");
    // console.log(" - localStorage modalLocation: ", ls);
    let storageObject = JSON.parse(ls);
    // console.log(" - storageObject: ", storageObject);
    // console.log(" - type of storageObject: ", typeof storageObject);

    if (storageObject === null || storageObject === undefined || !storageObject.length) {
      console.warn("[DragModal] localStorage (modalLocation) is null or undefined or empty");
      storageObject = [];
    }
    let modalObject = storageObject.find((entry) => entry.name === props.modalId);
    // console.log(" - modalObject: ", modalObject);
    if (modalObject) {
      modalObject.left = posX;
      modalObject.top = posY;
    } else {
      storageObject.push({ name: props.modalId, left: posX, top: posY });
    }
    localStorage.setItem("modalLocation", JSON.stringify(storageObject));
  }
</script>

<style>
  /* .no-select .v-toolbar-title,
  .no-select .v-card-title,
  .no-select .v-card-subtitle {
  } */

  .no-select {
    cursor: default !important;
    :hover {
      cursor: move !important;
    }
    .v-toolbar-title,
    .v-card-title,
    .v-card-subtitle {
      cursor: default !important;
      pointer-events: none;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
  }

  span.drag-modal {
    /* visibility: hidden; */
    pointer-events: none;
    margin: 0 !important;
    padding: 0 !important;
    /* position: absolute; */
  }
</style>
