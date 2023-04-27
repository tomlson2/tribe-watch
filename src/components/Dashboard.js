import { React, useState } from 'react';
import './Dashboard.css';
import SmallHeader from './SmallHeader';
import HeaderContainer from './HeaderContainer';
import ServerTable from './ServerTable';
import Footer from '../components/Footer';

const Dashboard = () => {
    const [headerFilter, setHeaderFilter] = useState("top");
    const [timeFilter, setTimeFilter] = useState(24);
    return (
        <>
            <SmallHeader centerContent={<h2>Dashboard</h2>} buttonText="access more" buttonHref="/more" />
            <div className="dashboard-container">
                <div className='dashboard-table'>
                    <HeaderContainer
                        onHeaderFilterClick={setHeaderFilter}
                        activeHeaderFilter={headerFilter}
                        onTimeFilterClick={setTimeFilter}
                        activeTimeFilter={timeFilter}
                    />
                    <ServerTable headerFilter={headerFilter} timeFilter={timeFilter} />
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Dashboard;
