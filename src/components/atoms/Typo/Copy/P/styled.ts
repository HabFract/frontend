// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const StyledP = styled.p.attrs({
  className: 'semi-bold dark:text-white',
})`
  font-family: 'Inter', 'Open Sans';
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 1%;
  font-size: ${(props) => (props.level === 1 ? '1rem' : '0.875rem')};
  font-weight: ${(props) => (props.level === 1 ? '600' : '400')};
`
// color: ${(props) => (props.level === 1 ? '#111928' : '#6B7280')};

StyledP.displayName = 'StyledP'
