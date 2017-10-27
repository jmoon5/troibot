
module.exports = {
  "apps": {
    "name": "thankyou-server",
    "script": "./server.js",
    "instances": 1,
    "exec_mode": "cluster",
    "max_memory_restart": "1500M",
    "max_restarts": 5,
    "autorestart": true,
    "restart_delay": 1000,
    "min_uptime": 1000,
    "watch": [
      "./server.js",
      "./gulpfile.js",
      "./.eslintrc",
      "./pm2.json",
      "./router/"
    ],
    "watch_options": {
      "awaitWriteFinish": true
    },
    "env": {
      "NODE_ENV": "development",
      "SWITCHBOARD_URL": process.env.SWITCHBOARD_URL || 'https://stormy-everglades-38882.herokuapp.com/',
      "PM2_PROCESS_NAME": "thankyou-server"
    }
  }
};
