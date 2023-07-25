import { useState } from 'react';

import EmptyHeart from '../../assets/images/emptyheart.png';
import FullHeart from '../../assets/images/fullheart.png';

function LikeButton() {
  const [imgSrc, setImgSrc] = useState<string>(EmptyHeart);

  return (
    <button
      // eslint-disable-next-line react/no-array-index-key
      type="button"
      style={{
        position: 'absolute',
        right: '5px',
        width: '30px',
        height: '30px',
        padding: '4px 3px 3px',
        backgroundColor: 'white',
        border: '1 solid black',
        borderRadius: '50%',
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setImgSrc(imgSrc === EmptyHeart ? FullHeart : EmptyHeart);
      }}
    >
      <img
        alt="add"
        src={imgSrc}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
      />
    </button>
  );
}

export default LikeButton;
