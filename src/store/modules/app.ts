const app = {
  state: {
    configs: {},
  },

  mutations: {
    SET_CONFIGS: (state: any, configs: any) => {
      state.configs = configs;
    }
  },
  actions: {
    setConfigs({ commit }: any, configs: any) {
      commit('SET_CONFIGS', configs);
    }
  }
};

export default app;
