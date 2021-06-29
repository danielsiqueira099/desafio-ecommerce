import React, { useCallback, useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import AplicationContext from '../../context';

export default function ListIcon({ item }) {
  const { setSnackMessage, setIsSnackVisible, productsCar, setProductsCar } = useContext(AplicationContext)

  const handleDelete = useCallback(() => {
    setSnackMessage('Produto removido!')
    setIsSnackVisible(true)

    const newList = productsCar.filter(product => product.name !== item.name)


    setProductsCar([...newList])
  }, [setSnackMessage, setIsSnackVisible, productsCar, setProductsCar])

  return (
    <ListItem className="listBx">
      <ListItemAvatar>
        <img src={item.image} alt="" width="100" />
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={'R$' + item.price} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}