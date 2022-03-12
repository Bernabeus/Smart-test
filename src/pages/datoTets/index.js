import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import logoH from '../../../public/images/logoHB.png';
import Link from 'next/link';
import '@fontsource/montserrat';
import Button from '@material-ui/core/Button';
import BodyF from '@/components/CodText';

const useStyles = makeStyles((theme) => ({
  contB: {
    left: 0,
  },
  footer: {
    backgroundColor: '#1B3F9D',
    display: 'flex',
    padding: '1rem 0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    left: 0,
  },
  header: {
    backgroundColor: '#1B3F9D',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    boxShadow: '0px 0px 6px 0px',
    zIndex: 3,
  },
  text: {
    fontFamily: 'Montserrat',
    color: '#fff',
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5vw',
    },
  },
  textH: {
    color: '#fff',
    fontFamily: 'Montserrat',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1vw',
    },
    textAlign: 'right',
  },
  cont1: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Test CHASIDE</title>
        <meta
          name="description"
          content="Test de orientación vocacional CHASIDE"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.mainR}>
        <Grid className={classes.contH}>
          <Grid className={classes.header}>
            <Grid item xs className={classes.cont1}>
              <Image src={logoH} height={100} width={130} />
            </Grid>
            <Grid item xs={8} className={classes.cont2}>
              <Typography variant="h5" className={classes.text}>
                Test de Orientación Vocacional CHASIDE
              </Typography>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
        <Grid className={styles.bodyR}>
          <Grid style={{ display: 'flex' }}>
            <Grid item xs></Grid>
            <Grid
              item
              xs={8}
              style={{
                border: '1px solid',
                paddingTop: 40,
                paddingBottom: 40,
                backgroundColor: '#4da0ff',
                textAlign: 'center',
              }}
            >
              <Grid style={{ marginBottom: 40 }}>
                <Typography variant="h5" className={classes.text}>
                  Extracción de datos:
                </Typography>
              </Grid>
              <BodyF />
              <Grid style={{ marginTop: 40 }}>
                <Link href="/">
                  <Button variant="outlined" className={classes.button}>
                    Regresar al test
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Grid>
      </main>

      <footer className={classes.footer}>
        <Grid item xs className={classes.cont1}>
          <Image src={logoH} height={100} width={130} />
        </Grid>
        <Grid item xs={6} className={classes.cont1}>
          <Typography
            variant="h6"
            style={{ color: '#fff', fontFamily: 'Montserrat' }}
          >
            Capacitación Total
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ paddingRight: 10 }}>
          <Grid>
            <Typography variant="h6" className={classes.textH}>
              Matriz Quito: Javier Ascazubi E3-20 y 9 de Octubre. Edificio Unión
              Nacional de Educadores.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" className={classes.textH}>
              0961250485 <br />
              0993338800 <br />
              0999781473
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
