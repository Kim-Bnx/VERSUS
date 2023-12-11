import { Box, Grid, GridCol } from '@mantine/core';

import './index.scss';

type TypeTagProps = {
  data: { id: number; name: string }[];
  selectedGames: { [key: number]: boolean };
  onSelectGame: (id: number) => void;
};

function GamesLabels({ data, selectedGames, onSelectGame }: TypeTagProps) {
  return (
    <Grid justify="center" align="center" className="games-list" gutter={15}>
      {data.map((game) => (
        <GridCol key={game.id} span="content">
          <Box
            className={`game ${selectedGames[game.id] ? 'selected' : ''}`}
            onClick={() => onSelectGame(game.id)}
          >
            {game.name}
          </Box>
        </GridCol>
      ))}
    </Grid>
  );
}

export default GamesLabels;
