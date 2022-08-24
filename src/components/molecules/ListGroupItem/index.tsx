// #region Global Imports
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
import { P } from '@/atoms/Typo/Copy/P'
import { SpaceBetweenFlex } from '@/pages/styled'
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
      <SpaceBetweenFlex vertical unstack440>
        {/* <div className="flex flex-row items-center w-auto lg:flex-wrap no-wrap"> */}
        <ColoredSvg
          className="w-full h-8 rounded-full list-item"
          iconName={iconName}
          rounded={true}
        />
        <div className="flex-1 w-full min-w-0 p-2 text-center sm-ls:text-left hover:text-primary-800">
          <P copyText={primaryText} level={1} />
          <div className="hidden h-full sm-ls:flex">
            <P copyText={secondaryText} level={2} />
          </div>
        </div>
      </SpaceBetweenFlex>
      {/* </div> */}
    </ListGroupItemContainer>
  )
}
