// #region Global Imports
// #endregion Global Imports
// #region Interface Imports
import { INavList } from './types'
import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to={'/info/what'} role="menu-item">
          What
        </Link>
      </li>
      <li role="none">
        <Link to={'/info/how'} role="menu-item">
          Why
        </Link>
      </li>
      <li role="none">
        <Link to={'/info/why'} role="menu-item">
          How
        </Link>
      </li>
    </ul>
  )
}
