import React from 'react'
import {Grid,FormControl,TextField,Select,Typography,MenuItem,InputLabel,Button} from '@material-ui/core';
import useStyles from './style'

function Form() {

    const classes=useStyles()
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="subtitle2" align="center" gutterBottom>
                 ....
                </Typography>

            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth />
        </Grid>
        <Grid item xs={6}>
                <TextField type="date" label="date" fullWidth />
        </Grid>
        <Button className={classes.button} variant="contained" color="primary" fullWidth>Clear</Button>
</Grid>        
    )
}

export default Form
