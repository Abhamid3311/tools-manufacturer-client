import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile ">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl text-accent font-bold text-center mt-5'>Welcome To The Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side -z-0">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 font-bold text-accent lg:bg-gray-300">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile </Link></li>
                    <li><Link to='/dashboard/manageOrder'>Manage All Order </Link></li>
                    <li><Link to='/dashboard/addTool'>Add Tool</Link></li>
                    <li><Link to='/dashboard/manageTool'>Manage Tools</Link></li>
                    <li><Link to='/dashboard/manageUser'>Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;