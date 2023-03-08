import { Module } from "vuex";
import { commentsApi } from "../../services/comment-api";
import { postsApi } from "../../services/post-api";
import Comments from "../../types/comment";
import Post from "../../types/post";
import User from "../../types/user";
import { State } from "../store";

export interface CommentsState {
  comments: Comments[];
  postInfo: Post;
  userInfo: User;
}

export const commentsModule: Module<CommentsState, State> = {
  actions: {
    async fetchCommentsByPostId(ctx, postId) {
      await commentsApi.getCommentsByPostId(postId).then((comments) => {
        ctx.commit("setComments", comments);
      });
      await postsApi.getPostByPostId(postId).then((post) => {
        ctx.commit("setPostInfo", ...post);
      });

      await ctx.commit(
        "setUserInfo",
        ctx.getters.getUserById(ctx.state.postInfo.userId)
      );
    },
  },
  state: {
    comments: [],
    postInfo: { userId: 0, id: 0, title: "", body: "" },
    userInfo: { name: "", id: 0 },
  },
  mutations: {
    setComments(state, comments: Comments[]) {
      state.comments = comments;
    },
    setPostInfo(state, postInfo: Post) {
      state.postInfo = postInfo;
    },
    setUserInfo(state, userInfo: User) {
      state.userInfo = userInfo;
    },
  },
};
