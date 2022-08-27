// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const StyledP = styled.p.attrs({
  className: 'dark:text-white text-base',
})`
  font-family: ${(props) =>
    props.level == 3
      ? 'Karma, Helvetica, Georgia, serif'
      : "'Roboto', sans-serif"};
  line-height: ${(props) => (props.level !== 2 ? '1.563rem' : '1.25rem')};
  font-size: ${(props) => (props.level < 2 ? '1.563rem' : '1rem')};
  font-weight: ${(props) =>
    props.level <= 2 ? (props.level <= 1 ? '500' : '300') : '300'};
  letter-spacing: ${(props) => (props.level <= 2 ? '0.03rem' : '0.04rem')};

  margin: ${(props) => (props.level <= 2 ? '0' : '1.25rem 0')};
  text-align: ${(props) => (props.level <= 2 ? 'left' : 'justify')};

  max-width: 42rem;
`

StyledP.displayName = 'StyledP'
