const server = require('./api/server.js')

const port = process.env.PORT || 9989;
server.listen(port, () => console.log(`\n running on port ${port} \n`))