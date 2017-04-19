<template lang="html">

  <div v-on:dblclick="cellClickHandler" v-bind:class="{ 'highlighted-cell': isCellDateInArray }">
        <label class="day-number-label">{{ dayNumber }}</label>
        <label class="day-text-label">{{ identifierAsShortDayLabel }}</label>
  </div>

</template>

<script>

import { mapGetters }         from "vuex";
import $ 											from "jquery";
import moment 								from "moment";


export default {
  computed: {
    ...mapGetters([
      "selectedDates"
    ]),
    identifierAsShortDayLabel(){
      let chopped = this.identifier.split("-");
      let year = chopped[0];
      let month = (Math.floor(chopped[1])) - 1;
      let day = Math.floor(chopped[2]);
      let date = moment().year(year).month(month).date(day).format("dd");
      return date;
    },
    isCellDateInArray(){
      if (this.selectedDates.length === 0) return false;
      else {
        //console.log("does this run again?")
        let result = this.selectedDates.filter((date) => {
          return this.identifier == date;
        });
        if (result.length === 1) return true;
        else return false;
      }
    }
  },
	props: [
		"dayNumber",
    "identifier"
	],
  methods: {
    cellClickHandler(){
      if (this.selectedDates.length === 2) this.$store.dispatch("removeLastIdFromArray");
      this.$store.dispatch("addIdToArray", this.identifier);
    }
  }
}
</script>

<style lang="css">

  .highlighted-cell {
    background: orange !important;
  }

</style>
