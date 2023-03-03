import img from '../assets/devices.png'

function AnyDevice() {
    return ( 
        <div className="any text-center">
            <div className="container">
                <h2 className='mb-3'>Watch on Any <span>Device</span>  </h2>
                <img src={img} alt="" className='img-fluid mt-5' />
            </div>
        </div>
     );
}

export default AnyDevice;