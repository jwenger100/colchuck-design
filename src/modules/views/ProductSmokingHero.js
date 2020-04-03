import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
    // backgroundColor: theme.palette.warning.main,
  },
  button: {
    border: '4px solid #149c38',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
  color: {
    color: '#149c38'
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
      <a href="mailto:colchuckdesign@gmail.com?Subject=Let's%20Chat!">
        <Typography variant="h4" component="span" className={classes.color}>
          {'Got any questions? Contact Us!'}<br></br>
          {'Click here.'}
        </Typography>
      </a>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
