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

  useEffect(() => {
    IndoCases();
  }, [])

  const IndoCases = () => {
    axios.get('https://corona.lmao.ninja/countries/Indonesia')
      .then(({ data }) => {
        setLoading(false);
        setCases(data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container maxWidth="lg" className={classes.indoCurrentInfoContainer}>
      {!loading && (
        <Grid container justify="space-evenly">
          <Grid item className={classes.indoFlagOuterContainer}>
            <div className={classes.indoFlagContainer}>
              <img src={indonesiaCases.countryInfo.flag} className={classes.indoFlag} alt="Indonesia Flag" />
            </div>
          </Grid>
          <Grid item>
            <div>
              <h2><strong>{indonesiaCases.country}</strong></h2>
            </div>
            <IndoDetail property="Positif" value={indonesiaCases.cases} />
            <IndoDetail property="Meninggal" value={indonesiaCases.deaths} />
            <IndoDetail property="Sembuh" value={indonesiaCases.recovered} />
            <IndoDetail property="Kasus per 1 juta" value={indonesiaCases.casesPerOneMillion} />
            <IndoDetail property="Meninggal per 1 juta" value={indonesiaCases.deathsPerOneMillion} />
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

const IndoDetail = ({ property, value }) => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.indoDetailDataContainer}>
      <Grid item>{property}</Grid>
      <Grid item>{value}</Grid>
    </Grid>
  )
}

export default InfoCurrentInfo;
