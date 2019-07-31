const cleanGallery = records => { 
  const objects = records.filter(object => object.primaryimageurl);
  
  return objects.map(record => (
    { id: record.id, imageurl: record.primaryimageurl }
  ));
}

const fetchGallery = async (id) => {
  const apiKey = 'b1e4fe60-b2da-11e9-b220-f1e4c3bbf900';
  // const apiKey = process.env.VUE_APP_API_KEY;
  const url = `https://api.harvardartmuseums.org/object?gallery=${id}&size=100&apikey=${apiKey}`;

  const response = await fetch(url);

  const result = await response.json();

  const cleanedGallery = cleanGallery(result.records);

  return cleanedGallery;
};

export default fetchGallery;
