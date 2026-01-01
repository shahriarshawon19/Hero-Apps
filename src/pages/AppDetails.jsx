import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const AppDetails = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const appId = parseInt(id);
  const singleApp = apps.find(app => app.id === appId);

  if (!singleApp) {
    return <p className="text-center mt-10">App not found</p>;
  }

  
  const handleInstall = () => {
    const stored = JSON.parse(localStorage.getItem('installedApps')) || [];

    const alreadyInstalled = stored.find(app => app.id === singleApp.id);

    if (alreadyInstalled) {
      toast.info('App already installed');
      return;
    }

    const updated = [...stored, singleApp];
    localStorage.setItem('installedApps', JSON.stringify(updated));

    toast.success(`${singleApp.title} installed successfully`);
    navigate('/installed');
  };

  
  const Stat = ({ title, value, icon }) => (
    <div className="flex flex-col items-center text-center space-y-2">
      <img className="h-[30px]" src={icon} alt={title} />
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );

  return (
    <div className="bg-gray-100">

     
      <div className="flex items-center gap-6 mx-10 pt-10">
        <img
          className="h-[300px] p-3 shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1)]"
          src={singleApp.image}
          alt={singleApp.title}
        />

        <div className="w-full">
          <h1 className="text-4xl font-bold">{singleApp.title}</h1>
          <p className="mb-2">
            Developed by{' '}
            <span className="text-[#632ee3]">{singleApp.companyName}</span>
          </p>

          <div className="divider"></div>

          <div className="flex gap-12 mb-5">
            <Stat
              title="Downloads"
              value={`${singleApp.downloads}M`}
              icon="/src/all-data/icon-downloads.png"
            />
            <Stat
              title="Average Rating"
              value={singleApp.ratingAvg}
              icon="/src/all-data/icon-ratings.png"
            />
            <Stat
              title="Total Reviews"
              value={`${singleApp.reviews}K`}
              icon="/src/all-data/icon-review.png"
            />
          </div>

          <button
            onClick={handleInstall}
            className="btn btn-success text-white"
          >
            Install Now ({singleApp.size} MB)
          </button>
        </div>
      </div>

      <div className="divider mx-10"></div>

      
      <div className="mx-10 flex justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={singleApp.ratings}
            layout="vertical"
            margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="divider mx-10"></div>

     
      <div className="mx-10 pb-10 space-y-3">
        <h2 className="text-xl font-bold">Description</h2>
        <p>{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
