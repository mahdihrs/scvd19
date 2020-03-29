import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

import useStyles, { StyledTableCell, StyledTableRow } from '../styles';

const AllCountries = () => {
  const classes = useStyles();
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  //pagination
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    allCountriesCases();
  }, []);

  const allCountriesCases = async () => {
    const { data } = await axios.get('https://corona.lmao.ninja/countries');
    setLoading(false);
    setCases(data);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell size="small" align="center">Country</StyledTableCell>
              <StyledTableCell align="center">Cases</StyledTableCell>
              <StyledTableCell align="center">Deaths</StyledTableCell>
              <StyledTableCell align="center">Recovered</StyledTableCell>
            </TableRow>
          </TableHead>
          {loading && (
            <div>Loading ...</div>
          )}
          <TableBody>
            {cases.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(cov => (
              <StyledTableRow key={cov.country}>
                <StyledTableCell size="small" align="center">
                  <img src={cov.countryInfo.flag} alt={cov.country} className={classes.flag} />
                  <div>{cov.countryInfo.iso3}</div>
                </StyledTableCell>
                <StyledTableCell align="center">{cov.cases.toLocaleString()}</StyledTableCell>
                <StyledTableCell align="center">{cov.deaths.toLocaleString()}</StyledTableCell>
                <StyledTableCell align="center">{cov.recovered.toLocaleString()}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={cases.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default AllCountries;
