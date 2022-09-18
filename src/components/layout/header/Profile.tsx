import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { MouseEventHandler, useState } from 'react'

export const Profile = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

  const onIconButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setMenuAnchorEl(event.currentTarget)
  }

  return (
    <div>
      <IconButton onClick={onIconButtonClick}>
        <Avatar alt="Alex" src="/alex.png" />
      </IconButton>
      <Menu
        open={Boolean(menuAnchorEl)}
        anchorEl={menuAnchorEl}
        onClose={() => setMenuAnchorEl(null)}
        tw="[& .MuiMenu-paper]:(bg-grey-dark text-white width[120px]) [& li]:hover:font-bold"
      >
        <MenuItem>Account</MenuItem>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  )
}
