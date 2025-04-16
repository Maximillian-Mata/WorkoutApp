<script lang="ts">
	export let data: { csvData: { Name: string; Day: string; Category: string, Compound: string; Complements: string }[] };
    console.log(data)
</script>



<slot />
