const express = require('express');
const dns = require('dns');
const app = express();
const ip = '35.173.198.231';
const port = 4000; // Server will listen on this port

app.use(express.json()); // For parsing application/json

// Endpoint to reverse lookup hostnames for a given IP via GET request
app.get('/login.php', (req, res) => {
  // Extract the IP address from query parameters
  const ipAddress = req.query.ip;

  // Ensure the IP address parameter is provided
  if (!ipAddress) {
    return res.status(400).send('IP address is required');
  }

  // Reverse lookup hostnames for the given IP address
  dns.reverse(ipAddress, (err, hostnames) => {
    if (err) {
      // If there's an error, return it
      return res.status(500).send(err.message);
    }
    // If successful, return the hostnames
    res.send({ ip: ipAddress, hostnames });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});





// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 3000;
// const serverIP = '35.173.198.231';


// const users = {
//     'adie@test.com': {
//         "password": "733581",
//         "user_id": 2,
//         "name": "Adie",
//         "user_type": "admin"
//     }
// };

// app.use(express.json())

// app.post('/login', (req,res)=>{
//     const {useremail, password} = req.body
//     const user = users[useremail];
//     console.log(user);

//     if (user && user.password === password) {
//         res.json({
//             status: 'success',
//             user_id: user.user_id,
//             name: user.name,
//             user_type: user.user_type
//         })
//     } else {
//         res.status(401).json({status: 'fail'})
//     }
// })

// app.listen(serverIP, () => {
//     console.log(`Server running on http://${serverIP}`);
// })