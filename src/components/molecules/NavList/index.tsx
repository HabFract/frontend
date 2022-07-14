// #region Global Imports
import React from 'react'
import { Link } from 'react-router-dom'
// #endregion Global Imports

// #region Interface Imports
import { INavList } from './types'
// #endregion Interface Imports

// #region Local Imports
// #endregion Local Imports

export const NavList: React.FunctionComponent<INavList.IProps> = ({
  newUser,
}: INavList.IProps) => {
  return (
    <ul>
      {newUser && (
        <li role="none">
          <Link to={'/make/onboarding'} role="menu-item">
            Get Started
          </Link>
        </li>
      )}
      <li role="none">
        <Link to={'/learn-atomic'} role="menu-item">
          What are Atomic Habits
        </Link>
      </li>
      <li role="none">
        <Link to={'/habit-templates'} role="menu-item">
          Habit Templates
        </Link>
      </li>
      <li role="none">
        <Link to={'/about-us'} role="menu-item">
          About Us
        </Link>
      </li>
    </ul>
  )
}
