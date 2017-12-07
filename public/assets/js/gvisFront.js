$( document ).ready(function() {
    console.log( "jQuery is loaded!" );

});

// In cloud vision api response 
// Select need parts from response json
// Put those into a request object
// ajax post to express api route "/api/cards"

// create sequelize model for card (many cards to one user)

// express api route for cards 
// middleware insert new card to card table

// create function renderCards that will take in an array of objects, creates cards template, and then appends to a DOM element
// create function getCardData that will make an ajax request to "api/cards/:id?". In the callback we want to call the renderCards function and then pass in the response. 

// model file for cards, new routes on the controller file, new functions for renderCards and getCardData

// google sequelize one to many relationship


// Step1: create a model based on the cloud vision api response
// model schema needs to have a relation with the user 

// Step2: create get and post api/cards routes
// post inserts a new row into the card table from the request object
// get retrieves all cards from a user id 
// add sequelize methods to the middleware for each route for select and insert operations

// Step3: use postman to test the api route

// Step4: create ajax post for cloudvision api response

// Step5: create getCardData function to retrieve all cards for a user

// Step6: create renderCards function to create html cards for each card object in the express api response

// Step7: have getCardData call renderCards with ajax.done 