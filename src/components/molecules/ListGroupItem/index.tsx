// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { P, ColoredSvg } from '@/atoms/.'
import { SpaceFlex } from '@/pages/styled'
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
      <SpaceFlex space="between" vertical unstack440>
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
      </SpaceFlex>
    </ListGroupItemContainer>
  )
}
