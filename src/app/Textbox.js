import { Box } from '@mui/material';
import React from 'react'
  
const Textbox = () => {
  
    return (
        <div style={{ 
            marginLeft: '40%', 
            marginTop: '60px', 
            width: '30%' 
        }}>
            <Box color="white" 
                bgcolor="palevioletred" p={1}>
                Greetings from GeeksforGeeks!
            </Box>
        </div>
    );
}
  
export default Textbox