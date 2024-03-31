/* eslint-disable no-unused-vars */
import { login, logout, as_admin, myInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
    is_admin: false,
    userInfo: undefined,
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },

  SET_CHARATER: (state, is_admin) => {
    state.is_admin = is_admin;
  },
  SET_USERINFO: (state, info) => {
    state.userInfo = info;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ name: username.trim(), password: password })
        .then((response) => {
          // const { data } = response
          commit("SET_TOKEN", response.loginId);
          commit("SET_USERINFO", response.userInfo);
          setToken(response.loginId);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user login
  adminLogin({ commit }, token) {
    return new Promise((resolve, reject) => {
      as_admin(token)
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN", data);
          commit("SET_CHARATER", true);
          setToken(data);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // get user info
  async getInfo({ commit, state }) {
    if (state.userInfo === undefined) {
      let data = await myInfo();
      commit("SET_USERINFO", data);
    }
    return state.userInfo;
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken(); // must remove  token  first
          resetRouter();
          commit("RESET_STATE");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
