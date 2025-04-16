<!-- src/routes/+layout.svelte -->
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
>
<script lang="ts">
	import { jsonStore } from '$lib/json';
	import { onMount } from 'svelte';

	// On mount, we could load or initialize with empty data
	onMount(() => {
		// For now, it's an empty store
		jsonStore.set([]);
	});
</script>

<slot />
