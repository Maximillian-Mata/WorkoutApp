<script lang="ts">
    import { jsonStore } from "$lib/json";  
    import { DayName, Categories } from "$lib/json";
</script>

<div class="container-fluid">
    <h1>Here is your workout</h1>
    {#if $DayName}
    <h2>{$DayName} Day</h2>
    {/if}
    <div class="grouped">
    {#each $Categories as cat}
        
            <div class="cat">
                <h3>{cat}</h3>
                <ul>
                    {#each $jsonStore as row}
                        {#if row.Category == cat}
                        <li>{row.Name}</li>
                        {/if}
    
                    {/each}
                </ul>
            </div>
                
    {/each}
</div>
</div>
<style>
    .cat{
        max-width: max-content;
    }
    .grouped{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        border: 2px dashed grey;
        padding: 3%;
    }
</style>
