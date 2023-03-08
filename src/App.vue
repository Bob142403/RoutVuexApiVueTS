<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "./store/store";

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch("fetchUsers");
  },
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
