<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import detail from '../../../store/MovieDetail';
	let popular: popularType;
	let handleData: {} = {};
	type popularType = {
		backdrop_path: string;
		title: string;
		overview: string;
		release_date: string;
		runtime: string;
		budget: number;
	};

	onMount(async () => {
		let id = $page.url.pathname.split('/').pop();
		await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=a3aa978e217b25a609db980141fde95c&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => {
				handleData = data;
			})
			.catch((err) => console.log(err));
	});

	$: detail.set(handleData);

	detail.subscribe((data) => {
		popular = data;
	});

	$: console.log(popular);

	// console.log('..........', $page.url.pathname.split('/').pop());
</script>

{#if popular.title !== undefined}
	<div class="movie-details">
		<div class="img-container">
			<img
				src={'https://image.tmdb.org/t/p/original' + popular.backdrop_path}
				alt={popular.title}
			/>
		</div>
		<div class="txt-container">
			<h1>{popular.title}</h1>
			<p class="overview">{popular.overview}</p>
			<p>
				<span>Release Date:</span>
				{popular.release_date} <br />
				<span>Budget:</span>
				{popular.budget} <br />
				<span>Runtime:</span>
				{popular.runtime}min
			</p>
		</div>
	</div>
{:else}
	<h1>Loading...</h1>
{/if}

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
