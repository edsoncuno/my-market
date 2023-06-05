// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	class Product {
		id: string
		name: string
		price: number
	}

	class CartItem {
		id: string
		quantity : number
	}
}

export {};
