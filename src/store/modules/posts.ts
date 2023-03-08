import { Module } from "vuex";
import { postsApi } from "../../services/post-api";
import Post from "../../types/post";
import { State } from "../store";

export interface PostsState {
  posts: Post[];
}

export const postsModule: Module<PostsState, State> = {
  actions: {
    async fetchPostsByUserId({ commit }, userId) {
      await postsApi
        .getPostsByUserId(userId)
        .then((posts) => commit("setPosts", posts));
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  state: (): PostsState => ({
    posts: [],
  }),
  getters: {},
};
