import { Box, Grid, GridCol } from '@mantine/core';

import './index.scss';

type TypeTagProps = {
  data: { id: number; name: string }[];
};

function GamesLabels({ data }: TypeTagProps) {
  return (
    <Grid justify="center" align="center" className="games-list" gutter={15}>
      {data.map((game) => (
        <GridCol key={game.id} span="content">
          <Box className="game">{game.name}</Box>
        </GridCol>
      ))}
    </Grid>
  );
}

export default GamesLabels;
