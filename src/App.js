import React, { useEffect, useState } from 'react';
import { Container, withStyles, Switch } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import './App.css';
import axios from 'axios';
import Header from './containers/Header/Header';
import Definitions from './containers/Definitions/Definitions';


function App() {
  const [word, set_word] = useState('plane')
  const [meanings, set_meanings] = useState([]);
  const [category, set_category] = useState('en');
  const [light_mode, set_light_mode] = useState(false)

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionary_api = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      set_meanings(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings);

  useEffect(() => {
    dictionary_api();
  }, [word, category]) 

  return (
    <div className={`section ${light_mode ? 'light_mode' : ''}`}>
      <Container maxWidth="md" className="container">
        <div className="switch_btn">
          <span>{light_mode ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={light_mode} onChange={() => set_light_mode(!light_mode)} />
        </div>
        <Header
          category={category}
          set_category={set_category}
          word={word}
          set_word={set_word}
          light_mode={light_mode}
        />
        {
          meanings && (
            <Definitions
              word={word}
              meanings={meanings}
              category={category}
              light_mode={light_mode}
            />
          )
        }
      </Container>
    </div>
  );
}

export default App;
