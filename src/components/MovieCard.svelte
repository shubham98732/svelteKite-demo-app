<script lang="ts">
	export let movie: MovieType;
	type MovieType = {
		movie: string;
		title: string;
		poster_path: string;
		release_date: string;
		id: number;
	};
</script>

<div class="movie-card">
	<nav>
		<a href={'/about/' + movie.id}>
			<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
		</a>
	</nav>
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 45vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
	}
	.description {
		height: 5vh;
	}
	p {
		font-size: 0.7rem;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
