<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store/store";
import UserCard from "../components/UserCard.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const users = computed(() => store.getters.getUsers);

    return { users };
  },
  components: {
    UserCard,
  },
});
</script>

<template>
  <div class="users-page">
    <template v-for="user of users" :key="user.id">
      <UserCard :userName="user.name" :userId="user.id" />
    </template>
  </div>
</template>

<style scoped>
.users-page {
  flex-direction: column;
}
</style>
