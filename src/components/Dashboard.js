import { React, useState } from 'react';
import './Dashboard.css';
import SmallHeader from './SmallHeader';
import HeaderContainer from './HeaderContainer';
import ServerTable from './ServerTable';

const Dashboard = () => {
    const [headerFilter, setHeaderFilter] = useState("top");
    const [timeFilter, setTimeFilter] = useState(24);
    return (
        <div>
            <SmallHeader centerContent={<h2>DASHBOARD</h2>} />
            <HeaderContainer
                onHeaderFilterClick={setHeaderFilter}
                activeHeaderFilter={headerFilter}
                onTimeFilterClick={setTimeFilter}
                activeTimeFilter={timeFilter}
            />
            <ServerTable headerFilter={headerFilter} timeFilter={timeFilter} />
        </div>
    );
};

export default Dashboard;
