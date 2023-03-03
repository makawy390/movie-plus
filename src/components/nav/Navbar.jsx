import { Link, NavLink , useNavigate} from 'react-router-dom';
// import { Context } from 'react';
import {FaFacebookSquare, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import changeLogin from '../../store/action/changeLogin';
import setLanguage from '../../store/action/setLanguage';


function Navbar() {
  const history = useNavigate();
  const list = [
    {name : "Home" , url : '/'},
    {name : "movies" , url : '/movies'},
    {name : "movies terend" , url : '/terend'},
    {name : "Plans" , url : '/plan'},
    ];
    const login = useSelector((state)=> state.form);
    const lang = useSelector((state)=> state.language);
  const count = useSelector ((state)=> state.count);
    const disPatch = useDispatch();
    // console.log(login);
    const handelLogout = ()=>{
      disPatch(changeLogin("Login"))
      history('login');
    }

    const handelLanguage = ()=>{
      disPatch(setLanguage(lang== "en"? "ar" : "en"))
    }
    return ( 
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" href="/">Movie <span>Plus</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {list.map(({name , url},id)=>(
          <li className="nav-item" key={id}>
          <NavLink className="nav-link" to={url} defaultValue={name}>{name}</NavLink>
        </li>
        ))}
      </ul>
      <ul className='navbar-nav d-flex ms-auto mb-2 mb-lg-0'>
        <li className='nav-item'> <a href='https://www.linkedin.com/in/mohamed-makawy-5b6b0723a/'target='_blank'  className="nav-link"><FaLinkedinIn /></a> </li>
        <li className='nav-item'> <a href='https://github.com/makawy390' target='_blank'  className="nav-link"><FaGithub /></a> </li>
        <li className='nav-item'> <a href='https://web.facebook.com/mohamed.makawy.545/' target='_blank' className="nav-link"><FaFacebookSquare /></a> </li>
      </ul>
      <div className="d-flex">
        <span className="btn text-white" onClick={()=> handelLogout() }>{login}</span>
        <span className='btn text-white' onClick={()=> history('/search_movies')}>search movies</span>
      </div>
    </div>
  </div>
</nav>
        </>
     );
}

export default Navbar;