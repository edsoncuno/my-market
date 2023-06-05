<script lang="ts">
	import ProductCard from './ProductCard.svelte';

	const products: Product[] = [
		{ id: '1', name: 'Coffe', price: 5 },
		{ id: '2', name: 'Sunglasses', price: 10 },
		{ id: '3', name: 'Water Bootle', price: 15 }
	];
	
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#each products as product}
	<ProductCard product={product}/>
{/each}