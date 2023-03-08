import { usersModule, UsersState } from "./modules/users";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { postsModule, PostsState } from "./modules/posts";
import { CommentsState, commentsModule } from "./modules/comments";

export interface State {
  usersModule: UsersState;
  postsModule: PostsState;
  commentsModule: CommentsState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    usersModule,
    postsModule,
    commentsModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}
