
/**
 * IMPORTS Database
*/

import { Client, Databases, Query, ID } from "appwrite";



/* FETCH APPwrite */
export async function fetchCards() {



	const response = await databases.listDocuments(
		'6743087b003027b1764f', // databaseId
		'6744bcd5001fa49686f7', // collectionId
		[ 		
		
			Query.select(["title", "content", "$id"])
			
		] // queries (optional)
	);
	
	//console.log(response.documents);
	
	const cards = response.documents;

	return cards;
  
}

function createNewCard(container, card) {
	const newCard = document.createElement('li');
	newCard.className = 'card animate__animated animate__tada animate__faster';
	newCard.setAttribute('id', `${card.$id}`); 	// Nastavení jedinečného ID z Appwrite
	
	
	//newCard.setAttribute('id', 'card-' + card.id);

	newCard.innerHTML = `
		<h3 class="card-title">${card.title}</h3>
		<p class="card-content">${card.content}</p>
		<a href="?action=delete&id=${card.$id}" class="delete-button">✕</a>
			
	`;
	// novo vytvoreny element pridam do rodica
	container.prepend(newCard);
    // console.log('hotovo 👍');
}


// zavolá fetchcards po přihlášení
$: loggedIn && fetchCards();














