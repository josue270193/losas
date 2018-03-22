import React from 'react';
import BodyApp from "./BodyApp";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "material-ui";

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10
    },
    mixins: {
        toolbar: {
            minHeight: 56,
            '@media (min-width:600px)': {
                minHeight: 56
            },
            '@media (min-width:0px) and (orientation: landscape)': {
                minHeight: 48
            }
        },
    },
    overrides: {
        TableContainer: {
            root: {
                maxHeight: '100%',
            }
        },
        MuiExpansionPanelSummary: {
            content: {
                margin: 0,
            },
        },
        MuiTableCell: {
            head: {
                fontSize: 15,
            },
        },
        MuiExpansionPanel: {
            expanded: {
                margin: `8px 0`,
            },
        },
    }
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
