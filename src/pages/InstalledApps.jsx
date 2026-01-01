import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

const InstalledApps = () => {
     const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(stored);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
  };

  const handleSort = (option) => {
    setSortOption(option);
    let sortedApps = [...installedApps];

    if (option === 'downloads') {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (option === 'rating') {
      sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
    } else if (option === 'size') {
      sortedApps.sort((a, b) => a.size - b.size);
    }

    setInstalledApps(sortedApps);
  };

  return (
    <div>
      {/* HEADER */}
      <div className='text-center space-y-2 py-10 bg-gray-100'>
        <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className='bg-gray-100 p-6 max-sm:p-2'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className="text-3xl font-bold">
            ({installedApps.length}) Apps Found
          </h1>

          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="border rounded-lg p-2 text-sm"
          >
            <option value="">Sort By</option>
            <option value="downloads">Downloads (High → Low)</option>
            <option value="rating">Rating (High → Low)</option>
            <option value="size">Size (Low → High)</option>
          </select>
        </div>

        {installedApps.length === 0 ? (
          <p className="text-gray-600 text-center text-2xl mt-10">
            No apps installed yet.
          </p>
        ) : (
          <div className="space-y-3">
            {installedApps.map(app => (
              <div
                key={app.id}
                className="p-2 rounded-lg shadow flex justify-between gap-4 bg-white"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-20 w-20 object-cover rounded-md"
                />

                <div className="flex justify-between items-center w-full">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{app.title}</h2>

                    <div className="flex gap-4 text-sm">
                      <div className="flex gap-1 items-center">
                        <img src="/src/all-data/icon-downloads.png" className="h-4" alt="" />
                        <span>{app.downloads}M</span>
                      </div>

                      <div className="flex gap-1 items-center">
                        <img src="/src/all-data/icon-review.png"className="h-4" alt="" />
                        <span>{app.ratingAvg}</span>
                      </div>

                      <span className="font-semibold text-gray-600">
                        {app.size} MB
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleUninstall(app.id);
                      toast(`${app.title} uninstalled successfully`);
                    }}
                    className="btn bg-[#00D390] text-white"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstalledApps;