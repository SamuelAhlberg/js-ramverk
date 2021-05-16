import React, {useState, useRef} from 'react';
import Movie from './Movie'

export default function MovieList() {

    const [movies, setMovies] = useState([]);

    const inputRefTitle = useRef();
    const inputRefRating = useRef();

    function addItem(event){
        if (inputRefTitle.current.value === "") {
            alert("Du saknar en titel")
        } else if (inputRefRating.current.value === "0") {
            alert("Du saknar ett betyg")
        } else {
            const newId = movies.length > 0 ? movies[movies.length -1].id + 1 : 1;
            setMovies([...movies, {
                id: newId,
                title: inputRefTitle.current.value,
                rating: inputRefRating.current.value,
            }]);

            inputRefTitle.current.value = "";
            inputRefRating.current.value = "0";
        }
    }

    function deleteItem(id){
        setMovies(movies.filter((item)=> item.id !== id ));
    }

    function sortTitleAlgo(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0; 
    }

    function sortTitle() {
        movies.sort(sortTitleAlgo);

        setMovies([...movies]);
    }

    function sortRatingAlgo(a, b) {
        if (a.rating > b.rating) {
            return -1;
        }
        if (a.rating < b.rating) {
            return 1;
        }
        return 0;

    }

    function sortRating() {
        movies.sort(sortRatingAlgo);

        setMovies([...movies]);

    }

    return(
        <div>
            <label for="title">Titel:</label>
            <input type="text" id="title" className="form-control" ref={inputRefTitle}></input>

            <label for="rating">Betyg:</label>
            <select type="text" id="rating" className="form-control" ref={inputRefRating}>
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button className ="btn btn-success mt-3" value="Spara film"  onClick={() => {addItem()}} >Spara film</button>
        
            <h3>Filmer</h3>
            <ul className="movie-list">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem}/>) }
            </ul>

            <button className ="btn btn-primary" value="Alfabetisk ordning" onClick={sortTitle} >Alfabetisk ordning</button>

            <button className ="btn btn-primary" value="Betygsordning" onClick={sortRating} >Betygsordning</button>

        </div>
    )
}