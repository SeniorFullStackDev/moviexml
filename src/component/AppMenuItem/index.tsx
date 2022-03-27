import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import PropTypes from 'prop-types'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
}

type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
  items?: AppMenuItemProps[]
}

const AppMenuItem: React.FC<AppMenuItemProps> = props => {
  const { name, Icon, items = [], href } = props
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <Link href={href} underline='none' sx={{ color:'#000' }}>
      <ListItemButton onClick={handleClick}>
        {/* Display an icon if any */}
        {!!Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!Icon} />
        {/* Display the expand menu if the item has children */}
        {isExpandable && !open && <ExpandMoreIcon />}
        {isExpandable && open && <ExpandLessIcon />}
      </ListItemButton>
    </Link>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

AppMenuItem.propTypes = AppMenuItemPropTypes



export default AppMenuItem
