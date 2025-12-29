<script lang="ts" setup>
import { useModal } from "../composables/useModal";

const { isOpen } = useModal();
</script>

<template>
  <div v-if="isOpen" class="wrapper">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  min-width: 300px;
  min-height: 200px;
  background-color: black;
}
</style>
