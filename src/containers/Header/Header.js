import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './Header.css'
import categories from './../../data/category';

const Header = ({
    category,
    set_category,
    word,
    set_word,
    light_mode
}) => {
    const dark_theme = createTheme({
        palette: {
            primary: {
                main: light_mode ? '#000' : '#fff'
            },
            type: light_mode ? 'light' : 'dark',
        },
    });

    const handle_change = (lang) => {
        set_category(lang)
        set_word('')
    }

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Head"}</span>
            <div className="inputs">
                <ThemeProvider theme={dark_theme}>

                    {/* text field */}
                    <TextField
                        label="Search a word"
                        className="search"
                        value={word}
                        onChange={(e) => set_word(e.target.value)}
                    />

                    {/* select field */}
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handle_change(e.target.value)}
                        helperText="Please select your currency"
                    >
                        {
                            categories.map((option => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            )))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
