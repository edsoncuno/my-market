<script lang="ts">
	import { cartItems, addToCart, removeFromCart } from '../cart';
	import { get } from 'svelte/store';

	export let product: Product;

	let cart = get(cartItems);
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cardProduct = cart[cartItemIndex];
	cartItems.subscribe((newCardValue) => {
		cart = newCardValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cardProduct = cart[cartItemIndex];
	});
</script>

<div class="card">
	<header class="card-header"><h2>{product.name}</h2></header>
	<div class="card-body">
		{#if cardProduct !== undefined}
			<div class="card-item">Quantuty: <strong>{cardProduct.quantity}</strong></div>
		{/if}
		<div class="card-item">Price: ${product.price}</div>
	</div>
	<footer class="card-footer">
		<button
			class="button-primary"
			on:click={() => {
				return addToCart(product.id);
			}}>Add</button
		>
		<button
			class="button-error"
			on:click={() => {
				return removeFromCart(product.id);
			}}>Remove</button
		>
	</footer>
</div>

<style>
	.card {
		display: inline-block;
		background-color: aquamarine;
		border: 1px red solid;
		padding: 0rem;
		margin: 0;
	}
	.card .card-header {
		color: white;
	}
</style>
