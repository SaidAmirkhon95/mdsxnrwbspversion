import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterButtonOne from 'components/FilterButtonOne';
import FilterButtonTwo from 'components/FilterButtonTwo';
import FilterButtonThree from 'components/FilterButtonThree';
import FilterSelect from 'components/FilterSelect';
import { Connectors } from 'components/Connectors';
import ReactPaginate from 'react-paginate';

const myComponent = {
  height: '400px',
  overflow: 'scroll',
};

export default function Stepper3() {
  const [pagination, setPagination] = useState({
    data: Connectors,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    setPagination((prevState: any) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage,
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);

  const handlePageClick = (event: any) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            flexGrow: '15',
            padding: '6px',
            marginRight: '2px',
          }}
        >
          <Typography variant='h6' gutterBottom>
            Empfehlung
          </Typography>
          <List disablePadding style={myComponent}>
            <div>
              {pagination.currentData &&
                pagination.currentData.map((item: any) => {
                  return (
                    <ListItem key={item.connector} sx={{ py: 1, px: 0 }}>
                      <Accordion style={{ width: '100%' }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls='panel1a-content'
                          id='panel1a-header'
                        >
                          <Typography>
                            <h4>{item.connector}</h4>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ListItem key={item.connector} sx={{ py: 1, px: 0 }}>
                            <div style={{ marginRight: '40%' }}>
                              <p>{item.name}</p>
                              <p>{item.firma}</p>
                              <p>{item.typ}</p>
                            </div>
                            <Typography variant='body1' align='center'>
                              {item.price} <br />
                              {item.link}
                            </Typography>
                          </ListItem>
                        </AccordionDetails>
                      </Accordion>
                    </ListItem>
                  );
                })}
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pagination.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'activePaginate'}
              />
            </div>
          </List>
        </div>
        <div
          style={{
            flexGrow: '0',
            padding: '6px',
            marginLeft: '2px',
          }}
        >
          <Typography variant='h6' gutterBottom>
            Filtermöglichkeiten
          </Typography>
          <FilterButtonOne /* label='Open Source' */ />
          <FilterButtonTwo /* label='GUI vorhanden?' */ />
          <FilterButtonThree /* label='IDS-Ready Certification?' */ />
          <br />
          <FilterSelect />
        </div>
      </div>
    </React.Fragment>
  );
}
