import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import useStyles from '../styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    width: 400,
    fontSize: 12,
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    },
  }
}))(TableRow);

const AllCountries = () => {
  const classes = useStyles();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    allCountriesCases();
  }, []);

  const allCountriesCases = () => {
    axios.get('https://corona.lmao.ninja/countries')
      .then(({ data }) => {
        setCases(data.slice(0, 10));
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container maxWidth="lg">
      <TableContainer>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell size="small" align="center">Country</StyledTableCell>
              <StyledTableCell align="center">Cases</StyledTableCell>
              <StyledTableCell align="center">Deaths</StyledTableCell>
              <StyledTableCell align="center">Recovered</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map(cov => (
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
        {/* <TablePagination rowsPerPageOptions={[10, 50]} /> */}
      </TableContainer>
    </Container>
  )
}

export default AllCountries;
