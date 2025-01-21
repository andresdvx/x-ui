interface ImageLimits {
  starts: number;
  ends: number;
  limit: number;
}

const imagesLimits: ImageLimits[] = [
  {
    starts: 0,
    ends: 200,
    limit: 3,
  },
  {
    starts: 200,
    ends: 350,
    limit: 4,
  },
  {
    starts: 350,
    ends: 500,
    limit: 5,
  },
  {
    starts: 500,
    ends: 700,
    limit: 6,
  },
  {
    starts: 700,
    ends: 900,
    limit: 7,
  },
];

export default imagesLimits;
