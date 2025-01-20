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
    starts: 400,
    ends: 500,
    limit: 5,
  },
];

export default imagesLimits;
