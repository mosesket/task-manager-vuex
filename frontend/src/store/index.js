import Vuex from "vuex";

import state from "./state";
// import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default new Vuex.Store({
  state,
  // getters,
  mutations,
  actions,
});
