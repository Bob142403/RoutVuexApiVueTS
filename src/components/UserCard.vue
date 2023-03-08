<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: { userName: String, userId: Number },
  setup(props) {
    const URL = `/posts/${props.userId}`;
    const router = useRouter();

    return { URL, router };
  },
});
</script>

<template>
  <div class="card" @click="router.push(URL)">
    <div class="card-body">{{ userName }}</div>
  </div>
</template>

<style scoped>
.card {
  margin: 10px;
  cursor: pointer;
  background-color: #485159;
  color: aliceblue;
}
.card:hover {
  background-color: #394147;
}
</style>
