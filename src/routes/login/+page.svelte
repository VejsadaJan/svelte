
<!-- src/routes/login/+page.svelte -->

<script>
	import { invalidateAll } from '$app/navigation';
	import { appwrite } from '$lib/appwrite';

	/** @type {string|null} */
	let formError = null;

	/**
	 * @param {Event} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();
		formError = null;

		const form = /** @type {HTMLFormElement} */ (event.target);
		const formData = /** @type Record<string, string | undefined> */ (
			Object.fromEntries(new FormData(form).entries())
		);

		const { email, password } = formData;
		if (!email || !password) {
			formError = 'Please fill out all fields';
			return;
		}

		try {
			await appwrite.account.createEmailPasswordSession(email, password);
			await invalidateAll();
		} catch (e) {
			formError = /** @type {import('appwrite').AppwriteException} */ (e).message;
		}
	}
</script>


<style>

	
form {
  max-width: 400px; 
  margin: 20px auto; 
  padding: 20px; 
  border: 1px solid #ccc; 
  border-radius: 8px; 
  background-color: #f9f9f9; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

label {
  display: block; 
  margin-bottom: 8px; 
  font-weight: bold;
  color: #333; 
}

input {
  width: 100%; 
  padding: 10px; 
  margin-bottom: 15px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  font-size: 14px; 
  box-sizing: border-box;
}

input:focus {
  border-color: #007BFF; 
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  width: 100%; 
  padding: 10px; 
  background-color: #007BFF; 
  color: white;
  border: none; 
  border-radius: 5px;
  font-size: 16px; 
  font-weight: bold;
  cursor: pointer; 
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3; 
}

p {
  color: red; 
  font-size: 14px; 
  margin-top: 10px; 
}


</style>

<form on:submit={handleSubmit}>
	<label  for="email">Email</label>
	<input type="email" id="email" name="email" required />
	<label  for="password">Heslo</label>
	<input
		type="password"
		id="password"
		name="password"
		placeholder="heslo"
		required
		minlength="8"
	/>
	<button type="submit">Přihlásit</button>
	{#if formError}
		<p>{formError}</p>
	{/if}
</form>
