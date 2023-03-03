import img from '../assets/landing-page-tv.jpg';
import { useNavigate } from 'react-router-dom';
function Enjoy() {
    const history = useNavigate();

    return ( 
        <div className="enjoy">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} className = "img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="content">
                        <h1 className="h1">Enjoy Your Content</h1>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className='btn btn-danger btn-sm' onClick={()=> history('/movies')}>View Video Libarary</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Enjoy;