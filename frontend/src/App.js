import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// import TagManager from 'react-gtm-module';

import { OnlineProvider } from 'context/OnlineContext';
// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <OnlineProvider>
                      <Routes />
                    </OnlineProvider>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
