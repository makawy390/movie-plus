import { useNavigate } from "react-router-dom";
function Plan() {
    const history = useNavigate();
    return ( 
        <div className="plan">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h2>Get Unlimited Movies & TV Access</h2>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger" onClick={()=> history('/plan')}>Choose a Plan</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Plan;