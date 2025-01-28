
<!-- src/routes/+page.svelte -->

<script>


	import { invalidateAll } from '$app/navigation';
	import { appwrite } from '$lib/appwrite.js';
	
	// import database 
	import { Client, Databases, Query, ID } from "appwrite";

	export let data;

	console.log (data);

	$: loggedIn = !!data.account;
	
	//$: loggedIn = !!data.databases;

	async function logout() {
		await appwrite.account.deleteSession('current');
		await invalidateAll();
	}


</script>



<style>

	p {
	font-size: 18px; 
	font-weight: bold; 
	color: #333; 
	margin-bottom: 10px; 
	}

	button {
	background-color: #007BFF; 
	color: white; 
	border: none; 
	border-radius: 5px; 
	padding: 10px 20px; 
	cursor: pointer; 
	font-size: 14px; 
	transition: background-color 0.3s ease;
	}

	button:hover {
	background-color: #0056b3; 
	}

</style>




<h1>ToDo APP pomocí Svetle</h1>

{#if loggedIn}
	
	<p>Ahoj {data.account?.name}</p>
	<p>Tvůj e-mail je {data.account?.email} </p>
	<!-- <p>ID účtu : {data.account?.$id}</p> -->
	
	<button on:click={logout}>Odhásit</button>

	<!-- tady bude kod po přihlášení  -->

	
	
	<script>

		//console.log (data);
		

	</script>	



{:else}
	
	<button on:click={() => (window.location.href = '/login')}>Přihlásit</button>
	<button on:click={() => (window.location.href = '/signup')}>Zaregistrovat</button>

	
{/if}


<p>Dokumentace Svetle <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> </p>
