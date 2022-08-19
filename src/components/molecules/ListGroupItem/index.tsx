// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ListGroupItemContainer } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IListGroupItem } from './types'
// #endregion Interface Imports

export const ListGroupItem: React.FunctionComponent<IListGroupItem.IProps> = ({
  primaryText,
  secondaryText,
  iconUrl,
}: IListGroupItem.IProps) => {
  return (
    <ListGroupItemContainer>
      <div className="flex items-center space-x-4">
        <div className="shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={iconUrl}
            alt={primaryText}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {primaryText}
          </p>
          <p className="text-sm text-gray-500 truncate sm-ls:hidden dark:text-gray-400">
            {secondaryText}
          </p>
        </div>
      </div>
    </ListGroupItemContainer>
  )
}
