import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: var(--color__dark100);
  width: 300px;
  padding: 50px 30px;
  box-sizing: border-box;
`

export const SearchButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0;
  background: var(--color__green);
  border: none;
  width: 300px;
  padding: 20px;
  color: var(--color__dark);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
`
