import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const lifecycle = window.appStarter.createVueAppLifecycle({
  Vue,
  appOptions: () => {
    return {
      render: h => h(App)
    };
  },
  store: {
    asyncStore: window.appStarter.asyncStore,
    reducer: {
      appNavStore: function cStore(state, action) {
        switch (action.type) {
          case "NAV_NAME":
            return { ...state, name: action.name };
          default:
            return { name: 1 };
        }
      }
    }
  }
});

export const bootstrap = lifecycle.bootstrap;
export const mount = lifecycle.mount;
export const unmount = lifecycle.unmount;
