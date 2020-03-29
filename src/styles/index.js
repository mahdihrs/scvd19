import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 15,
  }
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    },
  }
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  flag: {
    width: 30
  },
  indoFlagContainer: {
    border: '1px solid black',
    height: 'fit-content'
  },
  indoFlag: {
    height: 100,
  },
  indoFlagOuterContainer: {
    display: 'grid',
    placeItems: 'center'
  },
  indoCurrentInfoContainer: {
    marginTop: '3.5rem',
    marginBottom: '3.5rem'
  },
  indoDetailDataContainer: {
    marginRight: '1.5rem'
  }
}))

export default useStyles;
