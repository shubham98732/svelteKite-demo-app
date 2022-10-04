<script lang="ts">
	import { onMount } from 'svelte';
	import MovieCard from '../components/MovieCard.svelte';
	import dbItemsStore from '../store/PopularMovie';
	import SearchMovie from '../components/SearchMoview.svelte';
	import global from '../global.css';
	import SearchMoview from '../components/SearchMoview.svelte';
	let popular: any[];
	let handleData: [] = [];

	onMount(async () => {
		return await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=a3aa978e217b25a609db980141fde95c&language=en-US&page=1'
		)
			.then((res) => res.json())
			.then((data) => {
				handleData = data.results;
			})
			.catch((err) => console.log(err));
	});

	$: dbItemsStore.set(handleData);

	dbItemsStore.subscribe((data) => {
		popular = data;
	});
</script>

<main>
	<SearchMovie />
	<h3>Popular Movies</h3>
	<div class="popular-movies">
		{#each popular as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</main>

<style>
	h3 {
		padding: 0 1rem;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-row-gap: 1.8rem;
	}
</style>
