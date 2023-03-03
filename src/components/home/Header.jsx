
import './header.css'
import {useNavigate} from 'react-router-dom'

function Header() {
 
const his = useNavigate();
    return ( 
      <div className="header">
        <div className="container">
          <div className="content">
          <h2 className="h1">Watch Free Movies <br/> With Movie <span> Plus</span></h2>
      <p>Stop searching for free movie websites <br/>  and watch Movie <span> Plus</span> Now</p>
       <button className='btn btn-danger btn-sm' onClick={()=> his('/movies')}>Watch Now</button>
      
          </div>
        </div>
      </div>
      
     );
}

export default Header;