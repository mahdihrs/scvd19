import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from '../styles';

const InfoCurrentInfo = () => {
  const classes = useStyles();
  const [indonesiaCases, setCases] = useState({
    countryInfo: { flag: '' }
  });
  const [loading, setLoading] = useState(true);
  const [errorFetching, setError] = useState(false);
  const [errorMsg, setErrMsg] = useState('');

  useEffect(() => {
    IndoCases();
  }, [])

  const IndoCases = async () => {
    try {
      const { data } = await axios.get('https://corona.lmao.ninja/countries/Indonesia');
      setLoading(false);
      setCases(data);
    } catch (error) {
      setError(true);
      setErrMsg(error.message)
      setLoading(false);
    }
  }

  return (
    <Container maxWidth="lg" className={classes.indoCurrentInfoContainer}>
      {errorFetching && !loading && (
        <div>
          {errorMsg}
        </div>
      )}
      {loading && !errorFetching && (
        <div>Loading ...</div>
      )}
      {!loading && !errorFetching && (
                  <Grid container justify="center">
        <Grid xs={12} sm={4} item className={classes.indoFlagOuterContainer}>
          <div className={classes.indoFlagContainer}>
            <img src={indonesiaCases.countryInfo.flag} className={classes.indoFlag} alt="Indonesia Flag" />
          </div>
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <div>
            <h2><strong>{indonesiaCases.country}</strong></h2>
          </div>
          <IndoDetail property="Positif" value={indonesiaCases.cases} />
          <IndoDetail property="Meninggal" value={indonesiaCases.deaths} />
          <IndoDetail property="Sembuh" value={indonesiaCases.recovered} />
          <IndoDetail property="Kasus per 1 juta" value={indonesiaCases.casesPerOneMillion} />
          <IndoDetail property="Meninggal per 1 juta" value={indonesiaCases.deathsPerOneMillion} />
          <IndoDetail property="Fatality Rate" value={(indonesiaCases.deaths / indonesiaCases.cases * 100).toFixed(1)} unit="%" />
        </Grid>
      </Grid>
      )}
    </Container>
  )
}

const IndoDetail = ({ property, value, unit }) => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.indoDetailDataContainer}>
      <Grid item>{property}</Grid>
      <Grid item>{`${value}${unit ? unit : ''}`}</Grid>
    </Grid>
  )
}

export default InfoCurrentInfo;
