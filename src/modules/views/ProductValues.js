import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import ProductCurvyLines from '../../static/images/productCurvyLines.png';
import AppsIcon from '@material-ui/icons/Apps';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import WebIcon from '@material-ui/icons/Web';
import DnsIcon from '@material-ui/icons/Dns';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#149c38',
    backgroundImage: 'linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)'
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: 'center',
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  centerAlign: {
    textAlign: 'center'
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={ProductCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <AppsIcon style={{ fontSize: 100 }}></AppsIcon>
              <Typography variant="h6" className={classes.title}>
                Custom Web Applications
              </Typography>
              <Typography variant="h5" className={classes.centerAlign}>
                {'We are a professional web application development company, we prodvide top notch custom web development services.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <ImportantDevicesIcon style={{ fontSize: 100 }}></ImportantDevicesIcon>
              <Typography variant="h6" className={classes.title}>
                Responsive Web Design
              </Typography>
              <Typography variant="h5" className={classes.centerAlign}>
                {'We provide complete mobile, tablet, and desktop support for your website, so it looks perfect on every device.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <WebIcon style={{ fontSize: 100 }}></WebIcon>
              <Typography variant="h6" className={classes.title}>
                Hosting and Maintenance
              </Typography>
              <Typography variant="h5" className={classes.centerAlign}>
                {'We make hosting websites for our clients\' easy and painless. We also provide maintenace so that every site is performing at the highest level.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <DnsIcon style={{ fontSize: 100 }}></DnsIcon>
              <Typography variant="h6" className={classes.title}>
                Robust Web Services
              </Typography>
              <Typography variant="h5" className={classes.centerAlign}>
                {'We are skilled at building scalabe web services on a variety of cloud platforms.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <SearchIcon style={{ fontSize: 100 }}></SearchIcon>
              <Typography variant="h6" className={classes.title}>
                SEO
              </Typography>
              <Typography variant="h5" className={classes.centerAlign}>
                {'Our custom websites come with custom SEO to suit the indiviual needs of each client.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <EmojiPeopleIcon style={{ fontSize: 100 }}></EmojiPeopleIcon>
              <Typography variant="h6" className={classes.title}>
                Customer Focused
              </Typography>
              <Typography variant="h5" className={classes.centerAlign}>
                {'We are 100% customer focused and transaprent. We aim to deliver the optimum solution that fits your business needs.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
