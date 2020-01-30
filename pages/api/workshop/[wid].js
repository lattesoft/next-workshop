const workshops = require('../../../workshops.json');

const handler = (req, res) => {
  const { 
    query: { wid }
  } = req;
  if(wid && wid < workshops.length) {
    const getWorkshop = workshops.find((workshop) => (
      workshop.id == wid
    ));
    res.status(200).json(getWorkshop)
    return;
  }
  res.status(404).json({
    statusCode: 404,
    message: 'Not Found Workshop ID'
  })
}

export default handler;