import React, {useState, useEffect} from 'react';

import { getDatabase, ref, set, remove, get, child } from "firebase/database";
import firebaseApp from 'firebase-app';

import { useAuth } from 'auth';


const DatabaseContext = React.createContext(null);

export function DatabaseProvider({children}) {

	const {user} = useAuth()

	useEffect(() => { 
		// Handles data loading on sign in and sign out.
		if(user == null) { setMovies([]) } 
		else { getMovies(user.uid) }
	}, [user])

	const db = getDatabase(firebaseApp)
	const [movies, setMovies] = useState([])

	const addMovie = async (userId, movieId, movieName) => {
		const moviesReference = ref(db, 'movies/' + userId +"/"+ movieId)
		try {

			await set(moviesReference, movieName)
		} catch (err) {
			console.error("Error while adding movie")
		}
	}

	const removeMovie = async (userId, movieId) => {
		const movieReference = ref(db, 'movies/' + userId + "/" + movieId);

		try {
			await remove(movieReference)
			await getMovies(user.uid)
		} catch (err) {
			console.error("Error while removing a movie")
		}

	}

	const getMovies = async (userId) => {
		const moviesListURL = 'movies/' + userId;

		try {
			const response = await get(child(ref(db), moviesListURL))
			setMovies(response.val())
		} catch (error) {
			console.error("Error while fetching movies by user")
		}
	}

	const value = { addMovie, removeMovie, getMovies, movies }

	return <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>

}

export function useDatabase() {
	return React.useContext(DatabaseContext)
}
