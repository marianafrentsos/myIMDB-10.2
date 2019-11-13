let value = "";
let editSaveBtn = document.querySelector("#editSaveChanges");

movieDetails = {
  displayMovieDetails: function() {
    // console.log("From displayMovieDetails: ", this);
    const detailsContainer = document.getElementById("movie");

    detailsContainer.innerHTML = `
    <div class = "row m-1">
      <div class= "col-md-4 m-auto text-center">
        <img src = "${this.Poster}" class = "img-thumbnail">
        <div id = "detailsButtons">
          <button class = "btn btn-primary m-1" id = "detailsViewBtn">View IMDB</button>
          <button class = "btn btn-success m-1 show" id = "detailsEditBtn" data-toggle="modal" data-target="#myModal">Edit Movie</button>
          <button class = "btn btn-danger m-1" id = "detailsDeleteBtn">Delete Movie</button>
        </div>
      </div>
      <div class="col-md-8">
        <h2 id="Title">${this.Title}</h2>
        <ul class="list-group">
          <li class = "list-group-item" id = "Genre"><strong>Genre:</strong> ${this.Genre}</li>
          <li class = "list-group-item" id = "Type"><strong>Type:</strong> ${this.Type}</li>
          <li class = "list-group-item" id = "Released"><strong>Released:</strong> ${this.Released}</li>
          <li class = "list-group-item" id = "Rated"><strong>Rated:</strong> ${this.Rated}</li>
          <li class = "list-group-item" id = "imdbRating"><strong>IMDB Rating:</strong> ${this.imdbRating}</li>
          <li class = "list-group-item" id = "Director"><strong>Director:</strong> ${this.Director}</li>
          <li class = "list-group-item" id = "Writer"><strong>Writer:</strong> ${this.Writer}</li>
          <li class = "list-group-item" id = "Actors"><strong>Actors:</strong> ${this.Actors}</li>
          <li class = "list-group-item" id = "Runtime"><strong>Runtime:</strong> ${this.Runtime}</li>
          <li class = "list-group-item" id = "Language"><strong>Language:</strong> ${this.Language}</li>
          <li class = "list-group-item" id = "Awards"><strong>Awards:</strong> ${this.Awards}</li>
        </ul>
      </div>
    </div>
    <div class = "row">
      <div class = "card card-body m-1">
        <h3 class = "card-title">Plot</h3>
        <hr/>
        <p id = "Plot" class = "card-text" >${this.Plot}</p>
        <hr/>
            <h3 class="card-title">Trailer</h3>
            <hr/>
            <div class="embed-responsive">
              <iframe class="embed-responsive-item" src="" allowfullscreen scrolling ="no"></iframe>
            </div>
      </div>
    </div>
  </div>
    `;

    //event listener for the viewImdb Button with window.open() approach
    let viewImdbBtn = document.querySelector("#detailsViewBtn");

    viewImdbBtn.addEventListener("click", () => {
      const linkToImdb = "https://www.imdb.com/title/" + this.imdbID;
      onclick = window.open(linkToImdb);
    });

    //event listener for the editDetailsBtn
    let editModalCloseBtn = document.querySelector("#editModalClose");
    let editCloseBtn = document.querySelector("#editClose");
    let editDetailsdBtn = document.querySelector("#detailsEditBtn");
    let editModal = document.querySelector("#editModal");

    //display data in Edit Modal
    editDetailsdBtn.addEventListener("click", () => {
      this.editBtnEvents();
      displayElement(editModal);
    });

    //Delete button
    const deleteMovieBtn = document.getElementById("detailsDeleteBtn");
    console.log(deleteMovieBtn);
    deleteMovieBtn.addEventListener("click", openDeleteModal);

    // close and open the Edit Modal
    editModalCloseBtn.addEventListener("click", () => {
      hideElement(editModal);
    });

    editCloseBtn.addEventListener("click", () => {
      hideElement(editModal);
    });

    editSaveBtn.addEventListener("click", () => {
      hideElement(editModal);
    });
  },

  editBtnEvents() {
    let editModalBody = document.querySelector(".modal-body");
    console.log("editMovie", this);

    editModalBody.innerHTML = `

          <label for = "editTitle">Title:</label>
          <input class="form-control-me" id="editTitle"  onkeyup = handleInput(this) name = "Title" value ="${this.Title}"></input>
          
          <label for="editGenre">Genre:</label>
          <input class="form-control-me" id="editGenre"  onkeyup = handleInput(this) name = "Genre" value = "${this.Genre}"></input>

          <label for = "editType">Type:</label>
          <input class="form-control-me" id="editType" onkeyup = handleInput(this) name = "Type" value = "${this.Type}"></input>

          <label for = "editReleased">Released:</label>
          <input class="form-control-me" id="editReleased" onkeyup = handleInput(this) name = "Released" value = "${this.Released}"></input>

          <label for = "editRated">Rated:</label>
          <input class="form-control-me" id="editRated" onkeyup = handleInput(this) name = "Rated" value ="${this.Rated}"></input>

          <label for = "editimdbRating">imdbRating:</label>
          <input class="form-control-me" id="editimdbRating" onkeyup = handleInput(this) name = "imdbRating" value ="${this.imdbRating}"></input>

          <label for="editDirector">Director:</label>
          <input class="form-control-me" id="editDirector" onkeyup = handleInput(this) name = "Director" value = "${this.Director}"></input>

          <label for="editWriter">Writer:</label>
          <input class="form-control-me" id="editWriter" onkeyup = handleInput(this) name = "Writer" value ="${this.Writer}"></input>

          <label for="editAuthor">Actors:</label>
          <input class="form-control-me" id="editActors" onkeyup = handleInput(this) name = "Actors" value ="${this.Actors}"></input>

          <label for="editRuntime">Runtime:</label>
          <input class="form-control-me" id="editRuntime" onkeyup = handleInput(this) name = "Runtime" value = "${this.Runtime}"></input>

          <label for="editLanguage">Language:</label>
          <input class="form-control-me" id="editLanguage" onkeyup = handleInput(this) name = "Language" value = "${this.Language}"></input>

          <label for="editAwards">Awards:</label>
          <input class="form-control-me" id="editAwards" onkeyup = handleInput(this) name = "Awards" value = "${this.Awards}"></input>

          <label for="editPlot">Plot:</label>
          <input class="form-control-me"  id="editPlot" onkeyup = handleInput(this) name = "Plot" value = "${this.Plot}"</input>`;
  }
};

//get the inputs value in the movieDetails propreties
const getEditDetails = movieDetails => {
  let inputs = document.querySelectorAll(".form-control-me");
  for (let i = 0; i < inputs.length; i++) {
    movieDetails[inputs[i].name] = inputs[i].value;
  }
  // the Http request for the new Data
  updateMovie(movieDetails);
};

editSaveBtn.addEventListener("click", () => {
  hideElement(editModal);
  getEditDetails(movieDetails);
  //rereder the movie details on the page with the http response
});

//get the value of inputs

handleInput = event => {
  value = event.value;
  console.log(value);
  return value;
};

// code for getting the trailer
const displayTrailer = trailer => {
  const trailerContainer = document.querySelector(".embed-responsive");
  const trailerSource = document.querySelector(".embed-responsive-item");
  if (trailer.error) {
    trailerContainer.innerHTML = "This item has no trailer";
  } else {
    trailerContainer.classList.add("embed-responsive-16by9");
    trailerSource.setAttribute("src", trailer.embed);
  }
  // console.log(trailerContainer);
};

getMovie();
getTrailer();
