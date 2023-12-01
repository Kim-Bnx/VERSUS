import { Grid } from '@mantine/core';
import Slider from '../Slider/Slider';

import './Home.scss';

function Home() {
  return (
    <div className="home page">
      <div>
        <h1>Organisez, rassemblez, jouez !</h1>

        <Slider />
      </div>

      <div>
        <div>
          <h2>Catégories</h2>

          <span>voir plus</span>
        </div>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
