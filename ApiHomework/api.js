const buttonsArray = ["lazers", "lights", "bass", "skateboard", "mouse", "computer", "snakes", "rome", "cash", "nice", "glass"];

const submitButton = document.getElementById("submit-button");


function showGifs() {

    const userInput = this.getAttribute("data-name");

    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        userInput + "&api_key=G4QzXGn24vfsHW4XQfzt2aNZdHBRRhRK&limit=10";


    fetch(queryURL).then(function (response) {
        return response.json();
    }).then(function (responseJson) {

        const results = responseJson.data;

        document.getElementById("gifs").innerHTML = '';

        let wrapper;

        for (let i = 0; i < results.length; i++) {

           

            if (results[i].rating === "r" || results[i].rating === "pg") {
                console.log(responseJson)

                wrapper = document.createElement('div');
                wrapper.classList.add('gif-wrapper');

                const gifDiv = document.createElement("div");
                const rating = results[i].rating;
                const p = document.createElement("p");

                p.innerHTML = "Rating: " + rating;

                const userImage = document.createElement("img");
                const still = "still"

                userImage.setAttribute("src", results[i].images.fixed_height.url);
                userImage.setAttribute("data-still", results[i].images.fixed_height.url)
                userImage.setAttribute("data-animate", results[i].images.fixed_height.url)
                userImage.setAttribute("data-state", still);

                userImage.classList.add("gif");

                
                gifDiv.append(p,userImage);
                wrapper.append(gifDiv)

                document.getElementById("gif").prepend(wrapper);
                document.querySelectorAll(".gif").forEach(function (img) {
                    img.addEventListener("click", function (event) {


                        var state = event.target.getAttribute("data-state");

                        if (state === "still") {
                            event.target.setAttribute("src", event.target.getAttribute("data-animate"));
                            event.target.setAttribute("data-state", "animate");
                        } else {
                            event.target.setAttribute("src", event.target.getAttribute("data-still"));
                            event.target.setAttribute("data-state", "still");
                        }
                    });
                });
            }
        }
    });
}



function renderButtons() {

    document.getElementById("buttons-spot").innerHTML = "";

    for (let i = 0; i < buttonsArray.length; i++) {

        const newButton = document.createElement("button");

        newButton.classList.add("gif");

        newButton.setAttribute("data-name", buttonsArray[i]);

        newButton.innerHTML = buttonsArray[i];

        document.getElementById("buttons-spot").append(newButton);

        newButton.addEventListener("click", showGifs)

    };


}

document.getElementById("submit-button").addEventListener("click", function (event) {
    event.preventDefault();

    const gifRequest = document.getElementById("user-input").value.trim();

    buttonsArray.push(gifRequest);

    renderButtons()

});

renderButtons()

