// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const CenteringFlexHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
CenteringFlexHorizontal.displayName = 'CenteringFlexHorizontal'

export const CenteringFlexVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
CenteringFlexVertical.displayName = 'CenteringFlexVertical'

export const SpaceBetweenFlexHorizontal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
SpaceBetweenFlexHorizontal.displayName = 'SpaceBetweenFlexHorizontal'
