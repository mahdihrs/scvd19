import { makeStyles } from '@material-ui/core/styles';

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
