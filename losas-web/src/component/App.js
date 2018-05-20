import React from 'react';
import BodyApp from "./BodyApp";
import {CssBaseline} from "@material-ui/core";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({

});

class App extends React.Component {
    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline  />
                <BodyApp />
            </MuiThemeProvider>
        );
    }
}
export default App;
