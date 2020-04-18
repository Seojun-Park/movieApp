import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Genre = (data) => {
    const value = data.data;
    let newValue = [];
    let i;
    for (i = 0; i < value.length; i++){
        newValue = newValue.concat(value[i]) + ' | ';
    }
    newValue = newValue.slice(0, -2);
    if (newValue){
        return (
            <Typography variant="subtitle2" component="span">
                {newValue}
            </Typography> 
        )
    } else {
        return null;
    }
};

export default Genre;