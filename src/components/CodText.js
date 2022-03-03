import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ExportExcel from 'react-export-excel';
import { readData, readFireData } from './initFirebase';
import { render } from 'react-dom';

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

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
  textT: {
    fontFamily: 'Montserrat',
    color: '#fff',
    fontWeight: '600',
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
    },
    paddingLeft: 30,
  },
  cont1: {
    textAlign: 'center',
  },
  textfield: {
    color: '#113163',
    background: '#fff',
    //width: '80%',
  },
  button: {
    backgroundColor: '#fff',
  },
}));

const CodText = () => {
  const classes = useStyles();
  const [dataIU, setDataIU] = useState([]);
  const [btnDisa, setBtnDisa] = useState(false);

  useEffect(() => {
    dataUsers();
  }, []);

  function dataUsers() {
    setDataIU(readData());
  }
  const getValue = () => {
    const inputValue = document.getElementById('textC').value;

    if (inputValue == 'Smart-2022') {
      setBtnDisa(true);
    }
  };

  const ReadD = () => {
    const userDa = readData();
    console.log(userDa);

    let arreglo = Object.entries(userDa);

    var userArray = [];
    for (var i = 0; i < arreglo.length; i++) {
      userArray.push(arreglo[i][1]);
    }
    setDataIU(userArray);
  };

  return (
    <div>
      <Grid>
        <Grid
          style={{
            paddingRight: 30,
            paddingLeft: 30,
            paddingBottom: 20,
          }}
        >
          <Button
            onClick={() => getValue()}
            variant="outlined"
            className={classes.button}
          >
            Ingresar código
          </Button>
          <TextField
            id="textC"
            type="password"
            className={classes.textfield}
            label=""
            variant="filled"
          />
        </Grid>
      </Grid>
      {btnDisa == true ? (
        <Grid>
          <Button
            variant="outlined"
            onClick={() => ReadD()}
            className={classes.button}
          >
            Leer datos
          </Button>
          <Grid>
            {dataIU ? (
              <ExcelFile
                element={
                  <Button variant="outlined" className={classes.button}>
                    Exportar excel
                  </Button>
                }
                filename="Usuarios Test"
              >
                <ExcelSheet data={dataIU} name="Usuarios">
                  <ExcelColumn label="Apellidos" value="apellidos" />
                  <ExcelColumn label="Nombres" value="nombres" />
                  <ExcelColumn label="Colegio" value="colegio" />
                  <ExcelColumn label="Curso" value="curso" />
                  <ExcelColumn label="Paralelo" value="paralelo" />
                  <ExcelColumn label="NumEstudiante" value="numEstudiante" />
                  <ExcelColumn
                    label="NumRepresentante"
                    value="numRepresentante"
                  />
                  <ExcelColumn label="CarrerasFav" value="carreras" />
                  <ExcelColumn label="Email" value="email" />
                  <ExcelColumn label="CIntereses" value="CIntereses" />
                  <ExcelColumn label="HIntereses" value="HIntereses" />
                  <ExcelColumn label="AIntereses" value="AIntereses" />
                  <ExcelColumn label="SIntereses" value="SIntereses" />
                  <ExcelColumn label="IIntereses" value="IIntereses" />
                  <ExcelColumn label="DIntereses" value="DIntereses" />
                  <ExcelColumn label="EIntereses" value="EIntereses" />
                  <ExcelColumn label="CAptitudes" value="CAptitudes" />
                  <ExcelColumn label="HAptitudes" value="HAptitudes" />
                  <ExcelColumn label="AAptitudes" value="AAptitudes" />
                  <ExcelColumn label="SAptitudes" value="SAptitudes" />
                  <ExcelColumn label="IAptitudes" value="IAptitudes" />
                  <ExcelColumn label="DAptitudes" value="DAptitudes" />
                  <ExcelColumn label="DAptitudes" value="DAptitudes" />
                </ExcelSheet>
              </ExcelFile>
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CodText;
