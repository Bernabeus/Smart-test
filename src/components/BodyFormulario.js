import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import style from '@/styles/Home.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const schema = yup.object().shape({
  apellido: yup.string().required('Este campo es obligatorio'),
  nombre: yup.string().required('Este campo es obligatorio'),
  colegio: yup.string().required('Este campo es obligatorio'),
  paralelo: yup.string().required('Este campo es obligatorio'),
  numEstudiante: yup.string().required('Este campo es obligatorio'),
  numRepresentante: yup.string().required('Este campo es obligatorio'),
  carreras: yup.string().required('Este campo es obligatorio'),
  email: yup
    .string()
    .email('Ingrese un correo válido')
    .required('Este campo es obligatorio'),
});

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
    width: '80%',
  },
  button: {
    backgroundColor: '#fff',
  },
}));

function BodyC() {
  const classes = useStyles();
  const [result, setResult] = useState('');
  const router = useRouter();
  const [value, setValue] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [valuesR, setValuesR] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [errorsList, setErrorsList] = useState([]);
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    //setUserInfo(null);
    //setResult('Enviando los datos...');
    try {
      const userData = {
        ...formData,
      };

      console.log(value);
      userData['curso'] = value;

      console.log(userData);
      router.push('/testCHASIDE/0');
    } catch (e) {
      const { response } = e;
      setResult('Ocurrió un error :(');
      if (response) {
        if (response.data.errors) {
          const errors = response.data.errors;
          const newErrorList = [];
          for (let field in errors) {
            newErrorList.push(...errors[field]);
          }
          setErrorsList(newErrorList);
        }
      }
    }
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid className={style.body}>
      <Grid style={{ display: 'flex' }}>
        <Grid item xs></Grid>
        <Grid
          item
          xs={6}
          style={{
            border: '1px solid',
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: '#4da0ff',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              style={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20 }}
            >
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Apellidos (INGRESA SOLO LETRAS MAYÚSCULAS):
                  </Typography>
                </Grid>
                <Controller
                  name="apellido"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>{errors.apellido?.message}</p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Nombres (INGRESA SOLO LETRAS MAYÚSCULAS):
                  </Typography>
                </Grid>
                <Controller
                  name="nombre"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>{errors.nombre?.message}</p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Colegio:
                  </Typography>
                </Grid>
                <Controller
                  name="colegio"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>{errors.colegio?.message}</p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Curso:
                  </Typography>
                </Grid>
                <Controller
                  name="curso"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup
                      {...field}
                      defaultValue=""
                      style={{ paddingLeft: 60, paddingBottom: 10 }}
                      value={value}
                      onChange={handleRadioChange}
                      name="customized-radios"
                    >
                      <FormControlLabel
                        value={`Segundo`}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Segundo
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value={`Tercero`}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Tercero
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Paralelo:
                  </Typography>
                </Grid>
                <Controller
                  name="paralelo"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>{errors.paralelo?.message}</p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Número de celular de estudiante:
                  </Typography>
                </Grid>
                <Controller
                  name="numEstudiante"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>
                  {errors.numEstudiante?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Número de celular del representante:
                  </Typography>
                </Grid>
                <Controller
                  name="numRepresentante"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>
                  {errors.numRepresentante?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    ¿Cuáles son tus tres profesiones de mayor preferencia?
                    Escríbelas en orden de preferencia:
                  </Typography>
                </Grid>
                <Controller
                  name="carreras"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>{errors.carreras?.message}</p>
              </Grid>
              <Grid item={true} style={{ paddingBottom: 15 }}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Email:
                  </Typography>
                </Grid>
                <Controller
                  name="email"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      type="email"
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#ff0000' }}>{errors.email?.message}</p>
              </Grid>

              <p style={{ color: '#fff' }}>{result}</p>

              {errorsList.length > 0 && (
                <ul>
                  {errorsList.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}

              <Button
                type="submit"
                variant="outlined"
                className={classes.button}
              >
                Empezar el test
              </Button>
            </Grid>
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Grid>
  );
}

export default BodyC;
