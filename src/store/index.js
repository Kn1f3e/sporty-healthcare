import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doctors: [],
    patients: [],
  },
  mutations: {
    setDoctors(state, doctors) {
      state.doctors = doctors;
    },
    setPatients(state, patients) {
      state.patients = patients;
    },
  },
});
