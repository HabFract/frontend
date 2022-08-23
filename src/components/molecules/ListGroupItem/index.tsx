// #region Global Imports
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
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
  iconName,
}: IListGroupItem.IProps) => {
  return (
    <ListGroupItemContainer>
      <div className="flex flex-row items-center lg:flex-wrap no-wrap basis-2/6 gap-x-2 dark:text-primary-200 dark:hover:text-primary-100">
        <ColoredSvg
          className="w-full h-8 text-gray-900 rounded-full dark:text-primary-200 dark:hover:text-primary-100"
          iconName={iconName}
          rounded={true}
        />
        <div className="flex-1 w-full min-w-0 p-2 text-center sm-ls:text-left">
          <P copyText={primaryText} level={1} />
          <div className="hidden h-full sm-ls:flex">
            <P copyText={secondaryText} level={2} />
          </div>
        </div>
      </div>
    </ListGroupItemContainer>
  )
}
