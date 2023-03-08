<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../store/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const postId = route.params.postId;

    store.dispatch("fetchCommentsByPostId", postId);

    const comments = computed(() => store.state.commentsModule.comments);

    const postInfo = computed(() => store.state.commentsModule.postInfo);

    const userInfo = computed(() => store.state.commentsModule.userInfo);

    return { comments, postInfo, userInfo };
  },
});
</script>

<template>
  <div class="post-with-comment">
    <div class="post-info">
      <h1>{{ postInfo.title }}</h1>
      Author: {{ userInfo.name }}
      <p style="font-weight: bold">{{ postInfo.body }}</p>
    </div>
    <hr style="color: aliceblue" />
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ comment.name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ comment.email }}</h6>
          <p class="card-text">
            {{ comment.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment {
  color: aliceblue;
}

.card {
  margin: 10px;
  background-color: #485159;
  color: aliceblue;
}
.post-with-comment {
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
}
.post-info {
  color: aliceblue;
}
</style>
