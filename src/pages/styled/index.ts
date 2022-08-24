// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const CenteringFlexHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-gap: ${({ gap }) => `${+gap}rem`};
`
CenteringFlexHorizontal.displayName = 'CenteringFlexHorizontal'

export const CenteringFlexVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-gap: ${({ gap }) => `${+gap}rem`};
`
CenteringFlexVertical.displayName = 'CenteringFlexVertical'

export const SpaceBetweenFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'false')};
  grid-gap: ${({ gap }) => `${+gap}rem`};

  @media only screen and (min-width: 440px) {
    flex-direction: ${({ vertical, unstack440 }) =>
      vertical ? (unstack440 ? 'row' : 'column') : 'row'};
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: ${({ vertical }) => (vertical ? 'row' : 'row')};
  }
`
SpaceBetweenFlex.displayName = 'SpaceBetweenFlex'
