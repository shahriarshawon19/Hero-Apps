import React from 'react';
import logo from '../all-data/hero.png'
import download from "../all-data/download.png"
import store from "../all-data/download (1).jpeg"

const Home = () => {
    return (
        <div>
            <div className='mt-10'>
                <h1 className='font-black text-5xl text-center'><span className='text-black'>We Build
                </span> <br></br>
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">Productive</span> <span>Apps</span></h1>
                    <p className='text-center text-gray-400 mx-70 mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className="flex justify-center items-center gap-4 mt-6">
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={download}
      alt="Google Play"
      className="h-12"
    />
  </a>
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={store}
      alt="App Store"
      className="h-12"
    />
  </a>
</div>

            </div>
            
            <div>
                <img src={logo} alt="" className="mx-auto mt-10" />
            </div>

        </div>
    );
};

export default Home;