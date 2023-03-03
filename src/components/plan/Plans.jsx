import './plan.css'
// import React, { useState } from 'react';

function Plans() {
    const plan = [
        {planName : "Free Trial" , price : "0.00", type :"20"},
        {planName : "Start Up" , price : "10.00", type :"50"},
        {planName : "Premium" , price : "20.00", type :"100+"},
    ] ;

    const filterPlan = plan.map(({planName , price , type}, id)=> (
        <div className="col-md-4 mb-3 " key={id}>
            <div className="cards-plan">
                <h5 className='text-center'>{planName}</h5>
                <h1 className='text-center'>${price}<small> / month</small> </h1>
                <ul className='list-unstyled mt-4'>
                    <li>{type} Movies & Tv Shows </li>
                    <li>Watch on any Devices</li>
                    <li>Audio Files As Well</li>
                    <li>Upgrade Plan Anytime</li>
                </ul>
            </div>
                    </div>
    ))
    return ( 
        <div className="plans">
            <div className="container">
                <h2 className='mb-5 text-center'>Choose Your Streaming Plan</h2>
                <div className="row">
                    {filterPlan}
                </div>
            </div>
        </div>
     );
}

export default Plans;