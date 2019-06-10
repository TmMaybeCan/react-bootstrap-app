import React, { Component } from 'react';

import Description from '../../components/Description/Description.jsx';
import Points from '../../components/Points/Points.jsx';
import AppReduxTask from '../../components/Description/AppReduxTask.jsx'

class MainPage extends Component {
    render () {
        return <section>
            <Description />
            <Points />
            {/* <AppReduxTask/> */}
        </section>;
    }
}

export default MainPage;
