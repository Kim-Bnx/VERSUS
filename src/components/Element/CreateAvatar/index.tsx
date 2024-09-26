import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import { Image, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';

import './index.scss';

type Seed = string;

type CreateAvatarProps = {
  seed: Seed;
  hw: string;
};

function useAvatarUri(seed: Seed) {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  useEffect(() => {
    // Create a new avatar and generate the data URI asynchronously
    const generateAvatar = async () => {
      const newAvatar = createAvatar(funEmoji, { seed });
      const uri = await newAvatar.toDataUri(); // Use the asynchronous version
      setAvatarUri(uri);
    };

    generateAvatar(); // Call the async function
  }, [seed]);

  return avatarUri; // Return the URI
}

function CreateAvatar({ seed, hw }: CreateAvatarProps) {
  const avatar = useAvatarUri(seed);

  if (!avatar) {
    return <Loader />; // Show a loader while the avatar is being generated
  }

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
