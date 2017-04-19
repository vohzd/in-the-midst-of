<template>
	<main>
			<div class="output-messages">
				<h3>in the midst of</h3>
				<span>Double-Click on any two squares to find the difference in date between.</span>
				<span>You can also click/grab to swipe instead of just using the scrollbar.</span>

				<div class="currently-selected">

					<div v-if="selectedDates.length >= 1">
						First date is: {{ selectedDates[0] }}
					</div>

					<div v-if="selectedDates.length >= 2">
						Second date is: {{ selectedDates[1] }}
					</div>

					<div v-if="selectedDates.length > 0">
						<button type="button" name="button" v-on:click="clearAllSelectedDates">Clear</button>
					</div>

				</div>
			</div>
			<div class="scrollable-container dragscroll">
				<div class="scroll-x-container">
					<month-wrapper v-for="n in 14" v-bind:index="(n-1)" class="month-wrapper" />
				</div>
			</div>
	</main>
</template>

<script>

	import { mapGetters }                   from "vuex";
	import $ 																from "jquery";
	import dragscroll                       from "dragscroll";

	import Month from "./components/Month.vue";

	export default {
		name: "app",
		components: {
			"month-wrapper": Month
		},
		computed: {
			...mapGetters([
				"selectedDates"
			])
		},
		methods: {
			clearAllSelectedDates(){
				this.$store.dispatch("clearAllSelectedDates");
			}
		}
	}

</script>

<style>

::-webkit-scrollbar {
	width: 6px;
	height: 6px;
}
::-webkit-scrollbar-button {
	width: 0px;
	height: 0px;
}
::-webkit-scrollbar-thumb {
	background: rgb(135, 140, 200);
	border: none;
	border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
	background: rgb(168, 174, 219);
}
::-webkit-scrollbar-thumb:active {
	background: rgb(148, 159, 207);
}
::-webkit-scrollbar-track {
	background: rgba(0,0,0,0.25);
	border: 0px none #ffffff;
	border-radius: 8px;

}
::-webkit-scrollbar-track:hover {
	background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track:rgb(104, 126, 161)active {
	background: rgba(0,0,0,0.35);
}
::-webkit-scrollbar-corner {
	background: transparent;
}

	html {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Inconsolata', monospace;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 0;
		padding: 0;
		float: left;
		padding: 32px;
		width: 100%;
		overflow: hidden;
	}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
	}

	a {
		color: #42b983;
	}

	.scrollable-container {
		float: left;
		overflow-x: scroll;
		width: calc(100% - 64px);
	}

	.scroll-x-container {
		width: 10000px;
	}

	.month-wrapper {
		display: inline-block;
		width: 700px;
		float: left;
	}

	.output-messages {
		margin-bottom: 64px;
	}


</style>
