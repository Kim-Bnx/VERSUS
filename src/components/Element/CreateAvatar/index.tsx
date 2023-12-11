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

// function useState(defaultState) {
//   let state = defaultState;

//   const setStage = (n) => {
//     state = n;
//   };

//   return [state, setStage];
// }

function CreateAvatar({ seed, hw }: CreateAvatarProps) {
  const avatar = useAvatarUri(seed);

  // const [avatar, setAvatar] = useState<string | null>(null);
  // useEffect(() => {
  //   const generateAvatar = async () => {
  //     const svg = await newAvatar.toDataUriSync();
  //     setAvatar(svg);
  //   };

  //   generateAvatar();
  // }, [seed]);

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
