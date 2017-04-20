import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	numDays: null,
	selectedDates: []
};

const mutations = {
	ADD_TO_SELECTED_DATES_ARRAY(state, payload){
		state.selectedDates.push(payload);
	},
	CLEAR_ALL_SELECTED_DATES_FROM_ARRAY(state){
		state.selectedDates = [];
	},
	REMOVE_LAST_ID_FROM_ARRAY(state){
		state.selectedDates.pop();
	},
	STORE_NUM_DAYS(state, payload){
		state.numDays = payload;
	}
};

const actions = {
	addIdToArray({commit}, payload){
		commit("ADD_TO_SELECTED_DATES_ARRAY", payload);
	},
	clearAllSelectedDates({commit}){
		commit("CLEAR_ALL_SELECTED_DATES_FROM_ARRAY");
	},
	removeLastIdFromArray({commit}){
		commit("REMOVE_LAST_ID_FROM_ARRAY");
	},
	storeNumDays({commit}, payload){
		commit("STORE_NUM_DAYS", payload);
	}
	/*
	addIdToArray({ commit, state }, payload){
		console.log("length:: ", state.selectedDates.length);
		if (state.selectedDates.length === 0 || state.selectedDates.length === 1) {
			commit("ADD_TO_SELECTED_DATES", payload);
		}
		else {
			if (state.selectedDates.length === 2) {
				console.log("replacement called..")
				commit("REPLACE_LAST_SELECTED_DATE", payload);
			}
		}
	}
	*/
};
const getters = {
	numDays: state => state.numDays,
	selectedDates: state => state.selectedDates
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
