import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PostsPage from "./pages/PostsPage.vue";
import UsersPage from "./pages/UsersPage.vue";
import CommentsPage from "./pages/CommentsPage.vue";

import { store, key } from "./store/store";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: UsersPage },
  {
    name: "posts",
    path: "/posts/:userId",
    component: PostsPage,
  },
  { path: "/posts/:userId/comments/:postId", component: CommentsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store, key);
app.use(router);

app.mount("#app");
