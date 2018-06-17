import React from 'react';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {RouterRoot} from "../route/RouterApp";

const theme = createMuiTheme({
    overrides: {
        MuiChip: {
            label: {
                whiteSpace: 'pre-wrap',
                width: '100%',
                justifyContent: 'center',
                userSelect: 'text',
                textAlign: 'center',
            },
        },
    },
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
