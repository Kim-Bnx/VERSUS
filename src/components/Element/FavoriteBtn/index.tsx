import { useState } from 'react';
import { UnstyledButton } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

import './index.scss';

function FavoriteBtn() {
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <UnstyledButton
      className="button--favorite"
      onMouseEnter={handleFavoriteHover}
      onMouseLeave={handleFavoriteHover}
    >
      <IconHeart
        stroke={1.5}
        fill={isHovered ? 'rgb(216, 60, 60)' : '#0c0c0c'}
        color={isHovered ? 'rgb(216, 60, 60)' : '#929292'}
      />
    </UnstyledButton>
  );
}

export default FavoriteBtn;
