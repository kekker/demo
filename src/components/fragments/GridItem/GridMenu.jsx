import styled from 'styled-components';

const GridMenu = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
  white-space: nowrap;

  @media (min-height: 300px) {
    position: sticky;
    top: calc(${({ theme }) => theme.layout.menuHeight} 
              + ${({ theme }) => theme.space[7]}px);
  }
`;

export default GridMenu;
