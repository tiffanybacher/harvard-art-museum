const cleanGalleries = records => { 
  const galleries = records.filter(gallery => gallery.objectcount);
  
  return galleries.map(record => (
    { id: record.id, floor: record.floor, name: record.name, theme: record.theme }
  ));
}

const fetchGalleries = async (page) => {
  const apiKey = 'b1e4fe60-b2da-11e9-b220-f1e4c3bbf900';
  // const apiKey = process.env.VUE_APP_API_KEY;
  const url = `https://api.harvardartmuseums.org/gallery?size=100&apikey=${apiKey}`;

  const response = await fetch(url);

  const result = await response.json();

  const cleanedGalleries = cleanGalleries(result.records);

  console.log(cleanedGalleries)
  return cleanedGalleries;
};

export default fetchGalleries;
