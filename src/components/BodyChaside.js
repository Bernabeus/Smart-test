import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { dataQ } from "@/components/DataTest";
import PreguntasCHASIDE from "@/components/PregTestChaside";
import "@fontsource/montserrat";
import style from "@/styles/Home.module.css";
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
  
}));


const BodyC= ({ arrayP }) =>{
  const classes = useStyles();
  const [dataPr, setDataPr] = useState([]);
  const [dataPrN, setDataPrN] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    
  }, [id]);


  async function newValue() {
    
  };



  return (
    <Grid className={style.body}>  
      {id <= 9 ? (
        <Grid>
          <PreguntasCHASIDE onChangeNumber={id} />
        </Grid>
      ):(id == 10) ? (
        <Grid>
          
          </Grid>
      ): (<div></div>)}
    </Grid>
  );
};

export default BodyC;
