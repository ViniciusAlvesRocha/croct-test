import React, { ReactElement } from 'react';
import HomeBanner from './components/HomeBanner';
import { CroctProvider } from '@croct/plug-react';

const App = ():ReactElement => {

    return(
        <CroctProvider appId="00000000-0000-0000-0000-000000000000">
            <HomeBanner />
        </CroctProvider>
    )
}

export default App;
