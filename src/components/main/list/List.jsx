import React,{useContext} from 'react'
import {List as MuiList,ListItem,ListItemAvatar,ListItemText,Slide,Avatar,ListItemSecondaryAction,IconButton} from '@material-ui/core'
import useStyles from './style'
import {Delete,MoneyOff} from '@material-ui/icons'
import { TrackerContext } from '../../../context/Context'
const List = () => {
    const {deleteTransaction}=useContext(TrackerContext)
    const classes=useStyles()

    const transactions=[
        {id:1,type:'income',category:'salary',amount:"50",date:"wed 4 2021"},
        {id:2,type:'Expense',category:'business',amount:"124",date:"wed 4 2021"},
        {id:3,type:'income',category:'salary',amount:"50",date:"wed 4 2021"}

    ]

    return (
        <MuiList dense={false} className={classes.list}>
            
            {transactions.map((transaction) =>(
              
                  <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type==="income" ? classes.avatarIncome : classes.avatarExpense}>
                               <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label='delete' onClick="">
                                <Delete />
                            </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>

                </Slide>
                
                  
              
            ))}
        </MuiList>
    )
}

export default List
