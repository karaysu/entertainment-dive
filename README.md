
## App Info:

- Movie search funtionality

- Login functionality to create wishlist and like movies and review. 


### Create browser plugin to save the progress of each movies/tv series. And save link to where you previously saw.

- Button to save current state of the tv show.
- A form for 
  - tv show name
    - a new entry, or
    - selecting existing continued tv show.
  - season number
  - episode number
  - time where paused (HH:mm:ss)
- Save the form information and the url to continue the same episode from same timestamp again.
  - The plugin need to connect to the server to authenticate the user and save the requested information.

- User needs to be logged in to be able to save the tv show progress. 
  - If not logged in, redirect to a page on separate tab to login and after login the user can close that tab.
  - If not registered, redirect to main create account page.
  
### Dashboard

- All the ongoing tv shows will be displayed in the account dashboard with their current seen status.
- Posters will be displayed for each tv show. Hovering over them will give more information about the progress.
- Clicking on a tv show will redirect them to the website where they left watching previously using the saved paused timestamp.

### Register/Login

Need a server to register and authenticate user logins.
Need a server to store/update user's data. Ability to add new ongoing tv show, update existing or mark completed. Ability to add a tv show as wishlist
  - list of tv shows progress.
    - Ongoing tv show name
    - season number
    - episode number
    - time where last left (optional)


What are the problem we are trying to solve:
- Not remembering where exactly we left watching a series.
- Not remembering the website where we watching the series last time.

What are the things that are complimentory and makes continuing watching easy:
- Automatically starting the video from the saved timestamp.
- Managing all the ongoing tv shows at one spot.



- Try to fetch the information automatically (movie or tv show, name, season and episode if tv show, hr and min progress.). Otherwise, ask for information to store.
- Provide links to watch the movies/tv shows.

## TODO:
- Suggest a random movie
- Recommendation system based on they wishlist/likes/views.
- Allow user to easily specify if already seen a movie. Use this in recommendation system.

- Add random clickable movies poster on the left and right side of the home screen before search. 
	Every time the list of movies need to be new.

- Details page
	- poster
	- some sentences about the movie.
	- cast
	- trailer
	- ratings
	- reviews (upcoming)
	- similar movies (upcoming)




## Issues:

- The search results does not include all the movies with the given text query in the movie title. 

