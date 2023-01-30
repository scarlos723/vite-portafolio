import { useState } from 'react'
import { Icon } from './styles'

const MenuIcon = () => {
  const [open, setOpen] = useState(false)
  return (
    <Icon open={open} onClick={() => setOpen(!open)}>
      <svg width="28" height="2.5">
        <rect x="2" y="0" width="24" height="2.5" stroke="#ffffff" fill="#ffffff" rx="2"/>
      </svg>
      <svg width="28" height="2.5">
        <rect x="2" y="0" width="24" height="2.5" stroke="#ffffff" fill="#ffffff" rx="2"/>
      </svg>
      <svg width="28" height="2.5">
        <rect x="2" y="0" width="24" height="2.5" stroke="#ffffff" fill="#ffffff" rx="2"/>
      </svg>
    </Icon>
  )
}
export default MenuIcon
