import React, { useRef } from 'react';
import styled from 'styled-components';

import competitorsTable from '../../../../content/about/competitors.json';
import greenIcon from '../../../../static/assets/green_check.svg';
import redIcon from '../../../../static/assets/red_cross.svg';
import useScrollBox from '../../fragments/ScrollDrag';


const TableWrapper = styled.div`
  margin-bottom: 75px;
  
  max-width: 55vw;

  @media (max-width: 980px) {
        max-width: 90vw;
    }
  }
`;

const ScrollContent = styled.div`
  user-select: none;
  overflow-x: auto;
  cursor: isScroll ? 'pointer' : 'default' }}
        
`;

const Table = styled.table`
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns: 
    minmax(140px, 2fr)
    minmax(100px, 1.67fr)
    minmax(100px, 1.67fr)
    minmax(100px, 1.67fr)
    minmax(100px, 1.67fr)
    minmax(100px, 1.67fr)
`;

const Thead = styled.thead`
  display: contents;
`;

const Tbody = styled.tbody`
  display: contents;
`;

const Tr = styled.tr`
  display: contents;
`;

const Th = styled.th`
  width: unset !important;
  padding: 5px 5px 20px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  font-weight: bold;
  border-bottom: 1px solid black;
`;

const Td = styled.td`
  padding: 15px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
  
  margin: 0;
`;

const CompetitorsContent = () => {
  const { rows, columns, data } = competitorsTable;
  const scrollWrapperRef = useRef();
  useScrollBox(scrollWrapperRef);

  const isScroll = scrollWrapperRef.current && scrollWrapperRef.current.scrollWidth
  && scrollWrapperRef.current.clientWidth
    ? scrollWrapperRef.current.scrollWidth > scrollWrapperRef.current.clientWidth
    : false;

  const mapContentToIcons = (content) => {
    if (content === '+') {
      return <IconImage src={greenIcon} alt="" />;
    } if (content === '-') {
      return <IconImage src={redIcon} alt="" />;
    }
    return content;
  };

  return (
    <TableWrapper>
      <ScrollContent
        ref={scrollWrapperRef}
      >
        <Table>
          <Thead>
            <Tr>
              <Th />
              {columns.map(field => <Th>{field}</Th>)}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map(row => (
              <Tr>
                <Td>
                  {row}
                </Td>
                {columns.map(column => (
                  <Td>
                    {mapContentToIcons(data[row][column])}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ScrollContent>
    </TableWrapper>
  );
};

export default CompetitorsContent;
