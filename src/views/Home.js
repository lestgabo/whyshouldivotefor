import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';

import America from '../components/America';

const Home = () => {
    return (
        <>
            <Container maxWidth="sm">
                <America />
            </Container>
        </>
    );
};

export default Home;
