import { Module } from "vuex";
import { usersApi } from "../../services/user-api";
import User from "../../types/user";
import { State } from "../store";

export interface UsersState {
  users: User[];
}

export const usersModule: Module<UsersState, State> = {
  actions: {
    async fetchUsers(context) {
      await usersApi
        .getUsers()
        .then((users) => context.commit("setUsers", users));
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  state: (): UsersState => ({
    users: [],
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUserById: (state) => (id: number) => {
      return state.users.find((user) => user.id === id);
    },
  },
};
