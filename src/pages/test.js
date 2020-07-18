import React from 'react';
import {navigate} from 'gatsby';
import Header from '../components/Header';

const Test = () => {
    return(
        <div>
            <Header title='Thisn here is the test page'></Header>
        <h1>This'n here is a test.</h1>
        <h1>This'n here is a test, too.</h1>
        <button onClick={() => navigate('/')}>Back To Home</button>
    </div>
    )
}

export default Test;