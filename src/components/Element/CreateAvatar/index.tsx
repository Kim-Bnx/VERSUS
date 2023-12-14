import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import { Image } from '@mantine/core';

import './index.scss';

type Seed = string;

type CreateAvatarProps = {
  seed: Seed;
  hw: string;
};

function useAvatarUri(seed: Seed) {
  const newAvatar = createAvatar(funEmoji, { seed });

  return newAvatar.toDataUriSync();
}

function CreateAvatar({ seed, hw }: CreateAvatarProps) {
  const avatar = useAvatarUri(seed);

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
