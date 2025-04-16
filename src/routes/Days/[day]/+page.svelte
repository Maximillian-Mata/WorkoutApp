<script lang="ts">
   import {page} from '$app/stores';
   import { onMount } from 'svelte';
   import { DayName, jsonStore, Categories } from '$lib/json';

   function GetPageName(){
    const segments = $page.url.pathname.split('/').filter(Boolean);
    return segments[1]
   }
   export let name = GetPageName()
   DayName.update(item => name)

   export let data: { csvData: { Name: string; Day: string; Category: string, Compound: string; Complements: string }[] };

   const RelevantData = data.csvData.filter(ex => ex.Day == name)
   
   let Selected: any[] = []

   function AddExercises(){
    jsonStore.update(items =>[])
    for (let index = 0; index < Selected.length; index++) {
        const element = Selected[index];
        if (element){
            jsonStore.update(items => [
                ...items, {Name: RelevantData[index].Name, Category: RelevantData[index].Category}
            ])
        }
    }
   }

   //Hard Code - try for dynamic later

   let categories: string[] = []
   function SetCategories(){
    if(name == "Push"){
        categories = ["Chest", "Shoulder", "Tricep"]
        Categories.update(items => categories)
    }
    else if(name == "Pull"){
        categories = ["Back", 'Lats', "Rear Delts", "Biceps", "Trap"]
        Categories.update(items => categories)
    }
    else{
        categories = ["Quad", "Hamstring", "Calves", "Glutes"]
        Categories.update(items => categories)
    }
   }
   SetCategories();
</script>

    <main class="container-fluid">
        <h1>This is a {name} day</h1>
{#each categories as cat}
    <details name=cat>
        <summary><h3>{cat}</h3></summary>
        <fieldset>
            {#each RelevantData as row, index}
            {#if row.Category == cat}
            <label>
                <input type="checkbox" name = row.Name bind:checked={Selected[index]}/>
                {row.Name}
            </label>
            {/if}
            {/each}
        </fieldset>
    </details>
{/each}


<!--
<h2>Selected Workout</h2>
    <ul>
        {#each $jsonStore as row}
            <li>{row.Name}: {row.Category}</li>
        {/each}
    </ul>
-->
<a href="/Results"><button on:click={AddExercises}>Submit</button></a>

</main>

<style>
    main{
        margin-bottom: 3%;
    }
    fieldset{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>