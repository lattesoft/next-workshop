const workshops = require('../../workshops.json');

const handler = (req, res) => {
  const { method } = req;
  if(method === 'GET') {
    res.status(200).json(workshops);
    return;
  }
  res.status(405).json({
    message: 'Method not Allowed'
  })
}

export default handler;