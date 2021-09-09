import { Card, Typography,CardHeader,CardContent } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

function Details({title}) {

    const classes=useStyles()

    return (
        <Card className={title ==='Income' ? classes.income :classes.expense }>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">
                    $50
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Details
