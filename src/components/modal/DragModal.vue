<template>
  <!-- DragModal content -->
  <span class="drag-modal" :id="modalId"></span>
  <slot></slot>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "DragModal",
    methods: {
      // Add methods here
    },
    created() {
      console.log("DragModal ::: created");
    }
  });
</script>

<script setup>
  import { getCurrentInstance, onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";

  const props = defineProps({
    tag: {
      type: String,
      required: true
    },
    modalId: {
      type: String,
      required: true,
      default: "drag-modal"
    }
  });

  const emits = defineEmits(["drag-start", "dragging", "drag-end"]);

  const instance = getCurrentInstance();
  console.log(" - instance: ", instance);

  const uuid = ref(instance.uid);

  const tags = [
    { name: "v-toolbar", el: "div.v-overlay-container div.v-overlay.v-overlay--active div.v-overlay__content div.v-card header.v-toolbar" },
    { name: "v-card-item", el: "div.v-overlay-container div.v-overlay.v-overlay--active div.v-card-item" }
  ];

  // v-overlay-content element
  const dragElement = ref(null);
  // v-toolbar or v-card-item element
  const clickElement = ref(null);

  // mouse x and y offsets
  const offsetX = ref(0);
  const offsetY = ref(0);

  const marginX = ref(24);
  const marginY = ref(24);

  let isDragging = false;

  // TODO: DragModal ::: fix modal going offscreen when window is resized.

  onMounted(() => {
    console.log("DragModal ::: onMounted");
    console.log(" - props tag: ", props.tag);
    console.log(" - props modal-id: ", props.modalId);

    // let dragModal = document.querySelector("span.drag-modal");
    let qs = "span[id=" + props.modalId + "]";
    let dragModal = document.querySelector(qs);
    console.log(" - dragModal: ", dragModal);

    let overlay = (dragElement.value = dragModal.parentElement.parentElement);
    console.log(" - dragElement: ", overlay);

    let overlayRect = overlay.getBoundingClientRect();
    console.log(" - overlayRect: ", overlayRect);

    let compStyle = window.getComputedStyle(overlay);
    let mx = (marginX.value = Number(compStyle.marginLeft.split("px")[0]));
    let my = (marginY.value = Number(compStyle.marginTop.split("px")[0]));
    console.log(" - marginX: ", mx);
    console.log(" - marginY: ", my);

    // let q = tags.find((t) => t.name === props.tag);
    // console.log(" - q: ", q);

    // find the active overlay element in the DOM and set it as the dragElement variable.
    // TODO: fix modal drag element margin/padding offset messing up positioning.
    // dragElement.value.style.margin = "24px 24px 24px 24px";
    try {
      let ls = JSON.parse(localStorage.getItem("modalLocation"));
      console.log(" - ls: ", ls);
      dragElement.value.style.left = ls.left - marginX.value + "px";
      dragElement.value.style.top = ls.top - marginY.value + "px";
    } catch (error) {
      // console.warn(error);
      console.error(error);
    }

    // let toolbar = (clickElement.value = document.querySelector(
    //   "div.v-overlay-container div.v-overlay.v-overlay--active div.v-overlay__content div.v-card header.v-toolbar"
    // ));
    let toolbar = (clickElement.value = dragModal.nextElementSibling);
    console.log(" - clickElement: ", toolbar);
    // toolbar.setAttribute("selectstart", false);
    let toolbarRect = toolbar.getBoundingClientRect();
    console.log(" - toolbarRect: ", toolbarRect);
    //
    addListeners();
  });

  onBeforeUnmount(() => {
    console.log("DragModal ::: onBeforeUnmount");
    removeListeners();
  });

  onUnmounted(() => {
    console.log("DragModal ::: onUnmounted");
    removeListeners();
  });

  function addListeners() {
    console.log("DragModal ::: addListeners");
    clickElement.value.addEventListener("mousedown", clickElementDownHandler);
    clickElement.value.addEventListener("mousemove", clickElementMoveHandler);
    clickElement.value.addEventListener("mouseup", clickElementUpHandler);
    clickElement.value.addEventListener("mouseout", clickElementOutHandler);
    clickElement.value.addEventListener("mouseleave", clickElementOutHandler);
  }
  function removeListeners() {
    console.log("DragModal ::: addListeners");
    clickElement.value.removeEventListener("mousedown", clickElementDownHandler);
    clickElement.value.removeEventListener("mousemove", clickElementMoveHandler);
    clickElement.value.removeEventListener("mouseup", clickElementUpHandler);
    clickElement.value.removeEventListener("mouseout", clickElementOutHandler);
    clickElement.value.removeEventListener("mouseleave", clickElementOutHandler);
  }

  function clickElementDownHandler(evt) {
    console.log("DragModal ::: clickElementDownHandler");
    let rect = dragElement.value.getBoundingClientRect();
    console.log(" - evnt: ", evt);
    console.log(" - rect: ", rect);

    offsetX.value = evt.clientX - rect.left;
    offsetY.value = evt.clientY - rect.top;
    console.log(" - clientX: ", evt.clientX, " - clientY: ", evt.clientY);
    console.log(" - offsetX: ", offsetX.value, " - offsetY: ", offsetY.value);
    isDragging = true;
  }

  function clickElementMoveHandler(event) {
    console.log("DragModal ::: clickElementMoveHandler");
    if (isDragging) {
      let x = event.clientX - offsetX.value - marginX.value;
      let y = event.clientY - offsetY.value - marginY.value;
      dragElement.value.style.left = x + "px";
      dragElement.value.style.top = y + "px";
    }
  }

  function clickElementUpHandler(event) {
    console.log("DragModal ::: clickElementUpHandler");
    // store the location in local storage
    let rect = dragElement.value.getBoundingClientRect();
    console.log(" - rect: ", rect);

    let l = rect.left;
    let t = rect.top;
    // save location in local storage
    localStorage.setItem("modalLocation", JSON.stringify({ left: l, top: t }));
    isDragging = false;
    // removeListeners();
  }

  function clickElementOutHandler(event) {
    console.log("DragModal ::: clickElementOutHandler");
    isDragging = false;
  }
</script>

<style>
  .v-toolbar-title {
    pointer-events: none;
  }
  span.drag-modal {
    /* visibility: hidden; */
    pointer-events: none;
    margin: 0 !important;
    padding: 0 !important;
    position: absolute;
  }
</style>
