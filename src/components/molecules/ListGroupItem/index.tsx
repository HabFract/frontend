// #region Global Imports
import { P } from '@/atoms/Typo/Copy/P'
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
      <div className="flex flex-row flex-wrap items-center pr-4 gap-x-2 sm-ls:flex-col">
        <div className="shrink-0">
          <img
            className="w-full h-8 rounded-full"
            src={iconUrl}
            alt={primaryText}
          />
        </div>
        <div className="flex-1 w-full min-w-0 p-2 text-left sm-ls:text-center">
          <P copyText={primaryText} level={1} />
          <div className="h-full sm-ls:hidden">
            <P copyText={secondaryText} level={2} />
          </div>
        </div>
      </div>
    </ListGroupItemContainer>
  )
}
