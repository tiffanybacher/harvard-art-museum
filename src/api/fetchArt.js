const cleanArt = records => records
  .map(record => ({ id: record.id, imageurl: record.baseimageurl }));

const fetchArt = async (page) => {
  const apiKey = 'b1e4fe60-b2da-11e9-b220-f1e4c3bbf900';
  // const apiKey = process.env.VUE_APP_API_KEY;
  const url = `https://api.harvardartmuseums.org/image?size=12&page=${page}&apikey=${apiKey}`;

  const response = await fetch(url);

  const result = await response.json();

  const cleanedArt = cleanArt(result.records);

  return cleanedArt;
};

export default fetchArt;
