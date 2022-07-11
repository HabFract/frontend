// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'flex flex-col items-center text-center p-8',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
  min-height: 406px;
  min-width: 347px;
  font-family: 'Lexend Deca', sans-serif;
`

export const Top = styled.div`
  margin: 1rem 0;
`

export const Middle = styled.div`
  margin: 0 0 1rem 0;
`

export const MainText = styled.div.attrs((props) => ({
  className: 'rounded-xl flex',
}))`
  font-size: 64px;
  line-height: 80px;
  color: ${({ theme }) => theme.colors.offwhite};
`

export const SubText = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.offwhite};
`

export const Bottom = styled.div`
  form {
    margin: 0 0 1rem 0;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
