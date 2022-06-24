import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const App = (data) => {
    return (
        <div>
            <h1>This is react app</h1>
            <h2>{data.text}</h2>
            <div> components from mui library below</div>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
};

export default App;
