$(document).ready(function() {
    var topic = [
        "pizza", "cheeseburger", "sushi", "ramen", "french fries", "onion rings", "chicken sandwich", "steak", "fried chicken", "fried rice"
    ]
});

function createButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
}

    for (var i =0; i < topic.length; i++) {
        var food = $("button");
        var sportButton = $("<button>");
        foodButton.addClass('sport-button');
        foodButton.addClass('btn btn-success');
        foodButton.attr('data-name', topics[i]);
        foodButton.text(topics[i]);
        var emptySpace = " ";
        $('#addButton').append(foodButton);
        $('#addButton').append(emptySpace);
    };

    function foodInfo() {
        var food = $(this).attr("data-name");
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5kCJ5KZc7QW6671QF8QeJ2QVf2HmF045&q=" + sport + "&limit=10&lang=en";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
    
            // After the data from the AJAX request comes back
            .then(function (response) {
                console.log(response);
                $('#images').empty();
                for (var i = 0; i < response.data.length; i++){
                    var rating = response.data[i].rating; 
                    var stillLink = response.data[i].images.fixed_height_still.url;
                    var gifLink = response.data[i].images.fixed_height.url;
                    // // Creating and storing an image tag
                    var container = $('<div>');
                    var pEl = $('<p>').text("rating: " + rating);
                    var foodImage = $("<img>")
                                    .attr("src", stillLink)
                                    .attr("data-still", stillLink)
                                    .attr("data-gif", gifLink)
                                    .attr("data-state", 'still')
                                    .attr("alt", "disney image")
                                    .addClass('img-click');
                     
                    var html = container.append(pEl).append(foodImage);
                    // // Prepending the disneyImage to the images div
                     $("#images").prepend(html);
                     $("#find-food").on("click", function (event) {
                        event.preventDefault();
                        var buttonName = $('#food-input').val();
                        food.push(buttonName);
                        makeButton();
                    });
                    $(document).on("click", ".gif", function () {

                        var state = $(this).attr("data-state");
                    
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                        }
                        else if (state === "animate") {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        }
                    
                    });
                    
                    //Call function on page load
                    createButton()