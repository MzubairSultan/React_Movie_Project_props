
import './App.css';
import MovieCard from './components/Movie-card/MovieCard';
import Header from './components/header/Header';
import movies from './movie.json';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="mainContainer">
      {
        movies.map((element)=>{

          return(
            <MovieCard img ={element.Poster}
                        movieName={element.Title}
                        year={element.Year}   />

          )


        })

     





      }
  
     </div>
     
    </div>
  );
}

export default App;
