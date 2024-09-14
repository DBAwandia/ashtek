import React from 'react';

// Array of images
const IMAGES = [
  {
    id: 1,
    img1: "https://avatars.mds.yandex.net/i?id=f91cc47cbb016d8ec55ab7a15fb23aee4b7d3161-4034704-images-thumbs&n=13",
  },
  {
    id: 2,
    img1: "https://avatars.mds.yandex.net/i?id=8d96d94bd8e34d25dc7f49496b55111073d5ba46-8497019-images-thumbs&n=13",
  },
  {
    id: 3,
    img1: "https://avatars.mds.yandex.net/i?id=2546e53e3d2ee59bbe5448cb95ddf1f1dd36c99b-10641683-images-thumbs&n=13",
  },
  {
    id: 4,
    img1: "https://avatars.mds.yandex.net/i?id=612f2b05d6a2d6dc449b14d3f78e25fa70ad228d-10814708-images-thumbs&n=13",
  },
  {
    id: 5,
    img1: "https://avatars.mds.yandex.net/i?id=23fadc762cd9daf10bbc4a85af0084032df8cdfc-5169432-images-thumbs&n=13",
  },
  {
    id: 6,
    img1: "https://avatars.mds.yandex.net/i?id=4d7828afd440c420441b173cb2844cd221bd52e9-8495786-images-thumbs&n=13",
  },
  {
    id: 7,
    img1: "https://avatars.mds.yandex.net/i?id=5d95d638ea6dbc946dc77e4a958f09bb18fcffd6-4569781-images-thumbs&n=13",
  },
];

function Section5() {
  return (
    <div style={{ textAlign: 'center', display: "flex", flexDirection: "column", gap:"1rem" }}>
      <h2 style={{fontSize: "1.5rem"}}>Trusted by the world's most innovative teams</h2>
      <div style={{width: "70%",alignSelf:"center", display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        {IMAGES.map((image) => (
          <img 
            key={image.id} 
            src={image.img1} alt="Client Logo" 
            style={{ maxWidth: '10rem', height: '3.5rem', objectFit: 'cover' }} 

          />
        ))}
      </div>
    </div>
  );
}

export default Section5;
