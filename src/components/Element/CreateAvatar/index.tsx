import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import { Image } from '@mantine/core';
import { useEffect, useState } from 'react';

import './index.scss';

type CreateAvatarProps = {
  seed: string;
  hw: string;
};

function CreateAvatar({ seed, hw }: CreateAvatarProps) {
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    const generateAvatar = async () => {
      const newAvatar = createAvatar(funEmoji, { seed });

      const svg = await newAvatar.toDataUri();
      setAvatar(svg);
    };

    generateAvatar();
  }, [seed]);

  return (
    <Image
      radius="50%"
      w={hw}
      h={hw}
      alt="avatar"
      className="circle"
      src={avatar}
    />
  );
}

export default CreateAvatar;
