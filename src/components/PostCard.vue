<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "../store/store";

export default defineComponent({
  props: {
    body: String,
    title: String,
    id: Number,
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const userId = route.params.userId;

    const aboutUser = store.getters.getUserById(+userId);

    const URL = `/posts/${userId}/comments/${props.id}`;

    return { aboutUser, router, URL };
  },
});
</script>

<template>
  <div class="card col" @click="router.push(URL)">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Author: {{ aboutUser.name }}
      </h6>
      <p class="card-text">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 10px;
  background-color: #485159;
  color: aliceblue;
  cursor: pointer;
}
.card:hover {
  background-color: #394147;
}
</style>
