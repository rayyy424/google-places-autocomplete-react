import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Paper, Divider } from "@mui/material";

const paperStyle = {
    width: '100%' , 
    margin: '20px auto', 
    borderRadius: '8px'
}

const SearchHistory = () => {
    const searches = useSelector((state) => state.places.searches);

    if (!searches.length) return null;
    
    return (
        <Paper elevation={3} sx={paperStyle}>
          <List>
            {searches.map((search, index) => (
              <React.Fragment key={index}>
                <ListItem 
                  sx={{
                    "&:hover": { backgroundColor: "#f5f5f5" },
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <ListItemText primary={search.description} />
                </ListItem>
                {index < searches.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      );
};

export default SearchHistory;