import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '@fontsource/montserrat';
import { useRouter } from 'next/router';
import BodyRC from '@/components/BodyRChaside';

import { dataQ } from '@/components/DataTest.js';

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: 'Montserrat',
    // fontWeight: "600",
    // color: "#fff",
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
      fontSize: '2.2vw',
    },
  },
  textN: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#1C2E93',
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
      fontSize: '2.2vw',
    },
  },
  textA: {
    fontFamily: 'Montserrat',
    color: '#1C2E93',
    fontWeight: '600',
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.2vw',
    },
  },
  cont: {
    paddingBottom: 30,
  },
  formControl: {
    width: '100%',
  },
  cont1: {
    display: 'flex',
  },
  cont2: {
    paddingLeft: 60,
    borderBottom: '2px solid #eaeaea',
  },
  cont3: {
    textAlign: 'center',
  },
  button: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#1C2E93',
  },
  title: 'Table-title',
  chart: 'Table-chart',
}));

function PreguntasCHASIDE() {
  const classes = useStyles();
  const [dataPr, setDataPr] = useState([]);
  const [dataPrN, setDataPrN] = useState([]);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [valConfidence, setValConfidence] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  const { dataUser } = router.query;
  const [value10, setValue10] = useState(0);

  useEffect(() => {
    newArray(dataQ);
  }, [id]);

  async function newArray(data) {
    /*const confidence = [
      {
        letter: 'C',
        Intereses: 0,
        Aptitudes: 3,
      },
      {
        letter: 'H',
        Intereses: 2,
        Aptitudes: 1,
      },
      {
        letter: 'A',
        Intereses: 3,
        Aptitudes: 0,
      },
      {
        letter: 'S',
        Intereses: 8,
        Aptitudes: 2,
      },
      {
        letter: 'I',
        Intereses: 6,
        Aptitudes: 2,
      },
      {
        letter: 'D',
        Intereses: 7,
        Aptitudes: 3,
      },
      {
        letter: 'E',
        Intereses: 6,
        Aptitudes: 0,
      },
    ];

    setValConfidence(confidence);*/

    let num = id;
    num *= 10;
    let num1 = 0;
    num1 = num + 1;
    const arrayN = [];
    const j = num1 + 10;
    for (let i = num1; i < j; i++) {
      arrayN.push(data[i - 1]);
    }
    setDataPrN(arrayN);
    return 0;
  }

  const handleRadioChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleRadioChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleRadioChange3 = (event) => {
    setValue3(event.target.value);
  };

  const handleRadioChange4 = (event) => {
    setValue4(event.target.value);
  };

  const handleRadioChange5 = (event) => {
    setValue5(event.target.value);
  };

  const handleRadioChange6 = (event) => {
    setValue6(event.target.value);
  };

  const handleRadioChange7 = (event) => {
    setValue7(event.target.value);
  };

  const handleRadioChange8 = (event) => {
    setValue8(event.target.value);
  };

  const handleRadioChange9 = (event) => {
    setValue9(event.target.value);
  };

  const handleRadioChange10 = (event) => {
    setValue10(event.target.value);
  };

  async function quesArray() {
    // state.preventDefault();
    const arrayA = [];
    arrayA.push(value1);
    arrayA.push(value2);
    arrayA.push(value3);
    arrayA.push(value4);
    arrayA.push(value5);
    arrayA.push(value6);
    arrayA.push(value7);
    arrayA.push(value8);
    arrayA.push(value9);
    arrayA.push(value10);
    const posFalt = arrayA.filter((element) => element);

    if (id == 0 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 1 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 2 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 3 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 4 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 5 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 6 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 7 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 8 && posFalt.length != 10) {
      window.alert('Responda todas las preguntas');
    } else if (id == 9 && posFalt.length != 8) {
      window.alert('Responda todas las preguntas');
    } else if (id == 9 && posFalt.length == 8) {
      const arrayB = [];
      arrayB.push(value1);
      arrayB.push(value2);
      arrayB.push(value3);
      arrayB.push(value4);
      arrayB.push(value5);
      arrayB.push(value6);
      arrayB.push(value7);
      arrayB.push(value8);
      const arrayD = dataPr;
      const arrayDN = arrayD.concat(arrayB);
      setDataPr(arrayDN);
    } else {
      if (id == 0) {
        setDataPr(arrayA);
      } else {
        const arrayD = dataPr;
        const arrayDN = arrayD.concat(arrayA);
        setDataPr(arrayDN);
        const arrayN = [];
        const arrayV = dataPr;
        for (let i = 0; i < dataPr.length; i++) {
          let newSt = '';
          newSt = arrayV[i];
          const val1 = newSt[0];
          let val2 = newSt.slice(1);
          val2 = val2.slice(1);
          arrayN.push(val1, val2);
        }
      }

      setValue1('');
      setValue2('');
      setValue3('');
      setValue4('');
      setValue5('');
      setValue6('');
      setValue7('');
      setValue8('');
      setValue9('');
      setValue10('');
      router.push({
        pathname: `/testCHASIDE/${++id}`,
        query: { dataUser: dataUser },
      });
    }
  }

  async function EvaluaTest() {
    try {
      const arrayN = new Array(2);
      const arrayV = dataPr;
      for (let i = 0; i < dataPr.length; i++) {
        let newSt = '';
        arrayN[i] = new Array(2);
        newSt = arrayV[i];
        const val1 = newSt[0] + newSt[1];
        let val2 = '';
        if (i <= 8) {
          val2 = newSt.slice(1);
          val2 = val2.slice(1);
        } else {
          val2 = newSt.slice(1);
          val2 = val2.slice(1);
          val2 = val2.slice(1);
        }
        arrayN[i][0] = parseInt(val1);
        arrayN[i][1] = val2;
      }

      let cI = 0;
      let hI = 0;
      let aI = 0;
      let sI = 0;
      let iI = 0;
      let dI = 0;
      let eI = 0;
      let cA = 0;
      let hA = 0;
      let aA = 0;
      let sA = 0;
      let iA = 0;
      let dA = 0;
      let eA = 0;

      for (let i = 0; i < arrayN.length; i++) {
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 98) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 12) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 64) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 53) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 85) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 1) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 78) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 20) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 71) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 91)
        ) {
          cI = ++cI;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 9) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 34) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 80) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 25) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 95) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 67) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 41) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 74) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 56) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 89)
        ) {
          hI = ++hI;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 21) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 45) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 96) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 57) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 28) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 11) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 50) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 3) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 81) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 36)
        ) {
          aI = ++aI;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 33) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 92) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 70) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 8) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 87) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 62) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 23) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 44) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 16) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 52)
        ) {
          sI = ++sI;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 75) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 6) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 19) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 38) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 60) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 27) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 83) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 54) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 47) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 97)
        ) {
          iI = ++iI;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 84) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 31) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 48) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 73) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 5) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 65) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 14) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 37) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 58) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 24)
        ) {
          dI = ++dI;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 77) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 42) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 88) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 17) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 93) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 32) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 68) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 49) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 35) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 61)
        ) {
          eI = ++eI;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 15) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 51) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 2) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 46)
        ) {
          cA = ++cA;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 63) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 30) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 72) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 86)
        ) {
          hA = ++hA;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 22) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 39) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 76) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 82)
        ) {
          aA = ++aA;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 69) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 40) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 29) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 4)
        ) {
          sA = ++sA;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 26) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 59) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 90) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 10)
        ) {
          iA = ++iA;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 13) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 66) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 18) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 43)
        ) {
          dA = ++dA;
        }
        if (
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 94) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 7) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 79) ||
          (arrayN[i][1] == 'Si' && arrayN[i][0] == 55)
        ) {
          eA = ++eA;
        }
      }

      const confidence = [
        {
          letter: 'C',
          Intereses: cI,
          Aptitudes: cA,
        },
        {
          letter: 'H',
          Intereses: hI,
          Aptitudes: hA,
        },
        {
          letter: 'A',
          Intereses: aI,
          Aptitudes: aA,
        },
        {
          letter: 'S',
          Intereses: sI,
          Aptitudes: sA,
        },
        {
          letter: 'I',
          Intereses: iI,
          Aptitudes: iA,
        },
        {
          letter: 'D',
          Intereses: dI,
          Aptitudes: dA,
        },
        {
          letter: 'E',
          Intereses: eI,
          Aptitudes: eA,
        },
      ];

      setValConfidence(confidence);
    } catch (error) {}
  }

  function RegreInicio() {
    router.push({
      pathname: `/testCHASIDE/0`,
      query: { dataUser: dataUser },
    });
  }

  return (
    <Grid>
      {valConfidence.length == 7 ? (
        <Grid>
          <BodyRC arrayC={valConfidence} />
        </Grid>
      ) : (
        <Grid>
          {dataPrN.length != 0 ? (
            <Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[0].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[0].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value1}
                    onChange={handleRadioChange1}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[0].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[0].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[0].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[0].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[1].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[1].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value2}
                    onChange={handleRadioChange2}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[1].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[1].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[1].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[1].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[2].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[2].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value3}
                    onChange={handleRadioChange3}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[2].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[2].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[2].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[2].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[3].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[3].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value4}
                    onChange={handleRadioChange4}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[3].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[3].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[3].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[3].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[4].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[4].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value5}
                    onChange={handleRadioChange5}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[4].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[4].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[4].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[4].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[5].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[5].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value6}
                    onChange={handleRadioChange6}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[5].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[5].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[5].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[5].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[6].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[6].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value7}
                    onChange={handleRadioChange7}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[6].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[6].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[6].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[6].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.textN}>
                    {dataPrN[7].id}.
                  </Typography>
                  <Typography variant="h5" className={classes.text}>
                    {dataPrN[7].question}
                  </Typography>
                </Grid>
                <Grid className={classes.cont2}>
                  <RadioGroup
                    defaultValue=""
                    value={value8}
                    onChange={handleRadioChange8}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={`${dataPrN[7].id} Si`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[7].answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={`${dataPrN[7].id} No`}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataPrN[7].answer2}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              {id != 9 && dataPrN.length >= 8 ? (
                <Grid>
                  <Grid className={classes.cont}>
                    <Grid className={classes.cont1}>
                      <Typography variant="h5" className={classes.textN}>
                        {dataPrN[8].id}.
                      </Typography>
                      <Typography variant="h5" className={classes.text}>
                        {dataPrN[8].question}
                      </Typography>
                    </Grid>
                    <Grid className={classes.cont2}>
                      <RadioGroup
                        defaultValue=""
                        value={value9}
                        onChange={handleRadioChange9}
                        name="customized-radios"
                      >
                        <FormControlLabel
                          value={`${dataPrN[8].id} Si`}
                          control={<Radio />}
                          label={
                            <Typography variant="h5" className={classes.textA}>
                              {dataPrN[8].answer1}
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value={`${dataPrN[8].id} No`}
                          control={<Radio />}
                          label={
                            <Typography variant="h5" className={classes.textA}>
                              {dataPrN[8].answer2}
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  <Grid className={classes.cont}>
                    <Grid className={classes.cont1}>
                      <Typography variant="h5" className={classes.textN}>
                        {dataPrN[9].id}.
                      </Typography>
                      <Typography variant="h5" className={classes.text}>
                        {dataPrN[9].question}
                      </Typography>
                    </Grid>
                    <Grid className={classes.cont2}>
                      <RadioGroup
                        defaultValue=""
                        value={value10}
                        onChange={handleRadioChange10}
                        name="customized-radios"
                      >
                        <FormControlLabel
                          value={`${dataPrN[9].id} Si`}
                          control={<Radio />}
                          label={
                            <Typography variant="h5" className={classes.textA}>
                              {dataPrN[9].answer1}
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value={`${dataPrN[9].id} No`}
                          control={<Radio />}
                          label={
                            <Typography variant="h5" className={classes.textA}>
                              {dataPrN[9].answer2}
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <div />
              )}
              {id == 0 && dataPr.length == 0 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 1 && dataPr.length == 10 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 2 && dataPr.length == 20 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 3 && dataPr.length == 30 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 4 && dataPr.length == 40 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 5 && dataPr.length == 50 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 6 && dataPr.length == 60 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 7 && dataPr.length == 70 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 8 && dataPr.length == 80 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 9 && dataPr.length == 90 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                </Grid>
              ) : id == 9 && dataPr.length == 98 ? (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    disabled
                    onClick={() => quesArray()}
                  >
                    Siguiente ronda
                  </Button>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => EvaluaTest()}
                  >
                    Terminar test
                  </Button>
                </Grid>
              ) : (
                <Grid style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => RegreInicio()}
                  >
                    Regresar al principio del cuestionario
                  </Button>
                </Grid>
              )}
            </Grid>
          ) : (
            <div />
          )}
        </Grid>
      )}
    </Grid>
  );
}

export default PreguntasCHASIDE;
