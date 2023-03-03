import Footer from '../footer/Footer';
// import Header from '../home/Header';
import Home from '../home/Home';
import Plans from '../plan/Plans';
import Login from '../login/Login';
import Movies from '../movies/Movies';
import MoviesDetails from '../movies/MoviesDetails';
import Navbar from '../nav/Navbar';
import './App.css';
import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import TerendMovies from '../movies/TerendMovies';
import SearchMovies from '../movies/Search';
const App = ()=> {
 const lang = useSelector((state)=> state.language);
 const usePatch = useDispatch();
  return (
    <div className='app' dir={lang== "en"? "ltr" : "rtl"}>
          <BrowserRouter>
    <Navbar />
    <Routes >
      <Route path='/' element ={<Home />}/>
      <Route path='/movies' exact element ={<Movies />}/>
      <Route path='movies/:id' exact element ={<MoviesDetails />}/>
      <Route path='/terend' exact element ={<TerendMovies />} />
      <Route path='/search_movies' exact element ={<SearchMovies />} />

      <Route path='/login' exact element ={<Login />} />

      <Route path='/plan' exact element ={<Plans />} />



    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
 