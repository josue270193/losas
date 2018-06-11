import React from 'react';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {RouterRoot} from "../route/RouterApp";

const theme = createMuiTheme({

});

class App extends React.Component {
    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline  />
                <RouterRoot />
            </MuiThemeProvider>
        );
    }
}
export default App;
