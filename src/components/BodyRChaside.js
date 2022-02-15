import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/montserrat';
import style from '@/styles/Home.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { curveCatmullRom, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#E9E9E9',
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
    color: '#1C2E93',
    textAlign: 'center',
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
  cont1: {
    textAlign: 'center',
  },
  cont2: {
    textAlign: 'center',
  },
  title: 'Table-title',
  chart: 'Table-chart',
  contBu: {
    textAlign: 'center',
    paddingTop: 40,
  },
  button: {
    backgroundColor: '#62caf0',
  },
}));

const BodyRC = (props) => {
  const classes = useStyles();
  const [confidence, setConfidence] = useState([]);
  const [rowsC, setRowsC] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    recArray();
  }, [confidence]);
  console.log(confidence);

  async function recArray() {
    setConfidence(props.arrayC);
    const rows = [];

    for (var i = 0; i < confidence.length; i++) {
      rows.push(
        createData(
          confidence[i].letter,
          confidence[i].Intereses,
          confidence[i].Aptitudes
        )
      );
    }
    setRowsC(rows);
  }

  function createData(letter, Intereses, Aptitudes) {
    return { letter, Intereses, Aptitudes };
  }

  function Line(props) {
    return (
      <LineSeries.Path
        {...props}
        path={line()
          .x(({ arg }) => arg)
          .y(({ val }) => val)
          .curve(curveCatmullRom)}
      />
    );
  }

  const StyledDiv = styled('div')(() => ({
    [`&.${classes.title}`]: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '10px',
    },
  }));

  function Text({ text }) {
    const [mainText, subText] = text.split('\\n');
    return (
      <StyledDiv className={classes.title}>
        <Typography
          component="h3"
          variant="h5"
          style={{ color: '#1C2E93', fontFamily: 'Montserrat' }}
        >
          {mainText}
        </Typography>
        <Typography variant="subtitle1">{subText}</Typography>
      </StyledDiv>
    );
  }

  function Root(props) {
    return (
      <Legend.Root
        {...props}
        sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }}
      />
    );
  }
  function Label(props) {
    return <Legend.Label {...props} sx={{ mb: 1, whiteSpace: 'nowrap' }} />;
  }
  function Item(props) {
    return <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />;
  }

  const StyledChart = styled(Chart)(() => ({
    [`&.${classes.chart}`]: {
      paddingRight: '30px',
    },
  }));

  function saveR() {}

  return (
    <Grid className={style.body}>
      {confidence ? (
        <Grid>
          <Grid>
            <StyledChart data={confidence} className={classes.chart}>
              <ArgumentScale factory={scalePoint} />
              <ArgumentAxis />
              <ValueAxis />

              <LineSeries
                name="Intereses"
                valueField="Intereses"
                argumentField="letter"
                seriesComponent={Line}
              />
              <LineSeries
                name="Aptitudes"
                valueField="Aptitudes"
                argumentField="letter"
                seriesComponent={Line}
              />
              <Legend
                position="bottom"
                rootComponent={Root}
                itemComponent={Item}
                labelComponent={Label}
              />
              <Title text="Gráfico" textComponent={Text} />
              <Animation />
            </StyledChart>
          </Grid>
          <Grid style={{ paddingRight: 100, paddingLeft: 100 }}>
            <Grid style={{ paddingBottom: 10 }}>
              <Typography variant="h5" className={classes.text}>
                Tabla de respuestas
              </Typography>
            </Grid>
            <Grid>
              <TableContainer>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Intereses</TableCell>
                      <TableCell>Aptitudes</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsC.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.letter}</TableCell>
                        <TableCell>{row.Intereses}</TableCell>
                        <TableCell>{row.Aptitudes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid>
            <Grid className={classes.contBu}>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={() => saveR()}
              >
                Guardar resultados
              </Button>
            </Grid>
            <Grid className={classes.contBu}>
              <Link href="/">
                <Button variant="outlined" className={classes.button}>
                  Regresar a la página inicial
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </Grid>
  );
};

export default BodyRC;
