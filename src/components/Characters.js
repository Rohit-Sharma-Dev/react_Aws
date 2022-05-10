import { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Character from './Character';
import jsonData from '../data/data.json'

const Characters=()=> {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = async () => {
        let response = jsonData;
        console.log(jsonData);
        setData(response.characters);
    }

  return (
    <Box style={{margin: '10px 35px'}}>
    <Grid container>
        {
            data.map((value, index) => (
                <Grid item key={index}><Character key={value.id} value={value} /></Grid>
            ))
        }   
    </Grid>
</Box>
  )
}

export default Characters;
