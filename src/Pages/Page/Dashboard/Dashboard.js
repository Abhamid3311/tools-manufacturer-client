import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        <p>Loading....</p>
    }
    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl text-accent font-bold text-center mt-5'>Welcome To The Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side -z-0">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 font-bold text-accent lg:bg-gray-300">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <><li><Link to='/dashboard'>My Order</Link></li>
                            <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard/myProfile'>My Profile </Link></li>

                    {
                        admin && <> <li><Link to='/dashboard/manageOrder'>Manage All Order </Link></li>
                            <li><Link to='/dashboard/addTool'>Add Tool</Link></li>
                            <li><Link to='/dashboard/manageTool'>Manage Tools</Link></li>
                            <li><Link to='/dashboard/manageUser'>Users</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;