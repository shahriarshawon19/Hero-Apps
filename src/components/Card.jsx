import React from 'react';
import { FaStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router';

const Card = () => {
  const apps = useLoaderData();
  const show = apps.slice(0, 12);

  return (
    <div>
      <div>
        <h1 className='text-center text-5xl font-bold mb-5'>Trending Apps</h1>
        <p className='text-center text-gray-400 mb-7'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {show.map((app) => (
          <Link to={`/apps/${app.id}`} key={app.id}>
            <div className="card bg-base-100 hover:scale-105 transition ease-in-out shadow-sm cursor-pointer">
              
              <figure className='h-48 overflow-hidden'>
                <img
                  className='w-[180px] object-cover'
                  src={app.image}
                  alt={app.title}
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>

                <div className="card-actions justify-between">
                  <div className="badge bg-[#f1f5e8] text-[#00D390] flex gap-1 items-center">
                    <LuDownload /> {app.downloads}M
                  </div>
                  <div className="badge bg-[#fff0e1] text-[#FF8811] flex gap-1 items-center">
                    <FaStar /> {app.ratingAvg}
                  </div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <Link to='/apps'>
          <button
            style={{
              background:
                'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)',
              color: 'white',
              borderRadius: '5px',
            }}
            className='font-semibold px-3 py-1 mt-5'
          >
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
