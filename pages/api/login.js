const TOKEN = "GBsr3KtvWcfjSlsSmtsZxPKhIxIJ0vhi";
const USERNAME = 'hello';
const PASSWORD = 'world'

const handler = (req, res) => {
  const { method, body } = req;
  if(method === 'POST') {
    if(body.name === USERNAME && body.password === PASSWORD) {
      res.status(200).json({
        statusCode: 200,
        message: 'LOGIN Success',
        token: TOKEN
      })
    }
    return;
  }
  res.status(405).json({
    message: "Method not Allowed"
  })
}

export default handler;