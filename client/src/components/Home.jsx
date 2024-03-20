import React from 'react';
import '../App.css' // Import CSS file for styling

const Home = () => {
  return (
    <div >
      <h1 id='home' className='container-sm flex text-6xl justify-center mt-20 leading-relaxed font-bold'>
        Elevate Your Fitness Journey: <br /> Where Strength Meets Opportunity
      </h1>
      <button className='butt'>
        <b className="text-stone-700">Register!</b>
      </button>
    </div>
  );
};

export default Home;
