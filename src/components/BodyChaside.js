import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PreguntasCHASIDE from '@/components/PregTestChaside';
import style from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

function BodyC() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {}, [id]);

  return (
    <Grid className={style.bodyF}>
      {id <= 9 ? (
        <Grid>
          <PreguntasCHASIDE />
        </Grid>
      ) : id == 10 ? (
        <Grid />
      ) : (
        <div />
      )}
    </Grid>
  );
}

export default BodyC;
