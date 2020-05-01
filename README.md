# WellFed

**App folder** -This contains all of the current elements to display and run the UI

├── App.js - This is the parent component of the actual application after login

├── components - directory holding all of the GUI components (i.e. not css)

│   ├── Navigation.js - This is the navbar at the top of the screen

│   ├── NewPost - directory holding all of the GUI components for creating a post

│   │   ├── ApiPost.js - file to connect server to front-end

│   │   ├── NewPost.js - This is the create posts page with a space to hold either a recipe form or a review form

│   │   ├── RecipeForm.js - as named

│   │   └── ReviewForm.js - as named

│   ├── feedPage - directory to hold all components on feed page except create post

│   │   ├── BookForSelector.js - each book in the book selector 

│   │   ├── Bookselector.js - the item used to add a post to a book

│   │   ├── Comment.js - A displayed comment

│   │   ├── CommentForm.js - the form to create a comment

│   │   ├── Comments.js - the comments feature

│   │   ├── Discover.js - the discover page

│   │   ├── Feed.js - the parent page for the feeds

│   │   ├── MyFeed.js - the parent MyFeed component
 
│   │   ├── Recipe.js - as named

│   │   ├── Review.js - as named

│   │   ├── SearchReturnArea.js - this is the area that holds search return results (rows)

│   │   └── SearchReturnRow.js - each search return result

│   ├── landingPage - directory holding all comonents on the landing page (first page that loads if not logged in)

│   │   ├── Auth.js - file for interactions with the backend server

│   │   ├── LandingPage.js - parent component holding login or sign up forms

│   │   ├── Login.js - log in form

│   │   └── Signup.js - sign up form

│   ├── notificationsPage - directory for all notifications page components

│   │   ├── Notification.js - each notification

│   │   └── NotificationsPage.js - the parent notification page

│   └── profilePage - directory for My Profile components

│       ├── AddBook.js - The Add Book Component

│       ├── BookBottom.js - The part of a book that contains all of the posts

│       ├── BookTop.js - the part of the book that can be clicked and has the books title on it

│       ├── MyBooks.js - The My Books Parent component

│       ├── MyPosts.js - The My Posts Parent comonent

│       ├── MyProfile.js - The My Profile component that has a place for AddBooks and a place for either MyBooks or MyPosts

│       └── OtherProfile.js - Every other users Profile Page

├── css

│   ├── app.css - styling for app

│   ├── extras.css - not used, but a repo of useful things

│   ├── feed.css - styling for feed and new post components

│   ├── landingPage.css - styling for landing page components

│   ├── navigation.css - styling for navbar

│   ├── notifications.css - styling for notifications page components

│   └── profile.css - styling for profile components

├── index.css - styling for index

├── index.html - the actual file that gets sent to the browser

└── index.js - the file that holds either the landing page or the app. This is the parent file to everything





**Backend folder**

├── app.js - Runs the backend server and connects to the database

├── controllers

│   ├── auth.js - Methods for signing in and out as well as signing up a new user

│   ├── post.js - Methods for interactions with posts in the database

│   └── user.js - Methods to interact with users in the database

├── docs

│   └── apiDocs.json - JSON object returned to inform developers about available API calls

├── models

│   ├── book.js - Book object schema

│   ├── post.js - Post object schema

│   └── user.js - User object schema

├── routes

│   ├── auth.js - Middleware for signing in/out/up methods

│   ├── post.js - Middleware for post methods

│   └── user.js - Middleware for user methods

└── validator

|   └── index.js - Signup validation tool
