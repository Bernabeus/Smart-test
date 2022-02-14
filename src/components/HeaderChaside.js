import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import logoH from "../../public/images/logoH.png";
import "@fontsource/montserrat";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#E9E9E9",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    top: 0,
    left: 0,
    width: "100%",
    boxShadow: "0px 0px 6px 0px",
    zIndex: 3,
  },
  text: {
    fontFamily: "Montserrat",
    color: "#1C2E93",
    [theme.breakpoints.up("xs")]: {
      fontSize: "5vw",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "4vw",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5vw",
    },
  },
  cont1: {
    textAlign: "center",
  },
}));

export default function HeaderC() {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Grid item xs className={classes.cont1}>
        <Image
          src={logoH}
          height={100}
          width={130}
        />
      </Grid>
      <Grid item xs={8} className={classes.cont2}>
        <Typography variant="h5" className={classes.text}>
          Test de Orientación Vocacional CHASIDE
        </Typography>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}
