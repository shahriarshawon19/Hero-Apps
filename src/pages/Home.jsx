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
    className='border-2 border-gray-200 flex items-center'
  >
    <div className='flex py-1 px-2'>
        <img
      src={download}
      alt="Google Play"
      className="h-8"
    />
    <p>Google Play</p>
    </div>
  </a>
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className='border-2 border-gray-200 flex items-center'
  >
    <div className='flex py-1 px-2'>
        <img
      src={store}
      alt="App Store"
      className="h-8"
    />
    <p>App Store</p>
    </div>
  </a>
</div>

            </div>
            
            <div>
                <img src={logo} alt="" className="mx-auto mt-10" />
            </div>
            
          <div className="bg-gradient-to-r from-purple-700 to-purple-400 mb-10">
  <h1 className="text-white font-bold text-4xl p-5  text-center">
    Trusted by Millions, Built for You
  </h1>

  <div className="flex justify-around text-white p-6">
    {/* Card 1 */}
    <div className="text-center">
      <span>Total Downloads</span>
      <h1 className="text-3xl font-bold">29.6M</h1>
      <span>21% more than last month</span>
    </div>

    {/* Card 2 */}
    <div className="text-center">
      <span>Total Users</span>
      <h1 className="text-3xl font-bold">10.2M</h1>
      <span>18% more than last month</span>
    </div>

    {/* Card 3 */}
    <div className="text-center">
      <span>Active Installs</span>
      <h1 className="text-3xl font-bold">8.5M</h1>
      <span>25% more than last month</span>
    </div>
  </div>
</div>


        </div>
    );
};

export default Home;