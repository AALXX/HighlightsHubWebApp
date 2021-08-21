const env = require('./config/.env-config.js')


module.exports = {
    "presets": [
        "next/babel"
    ],
    "plugins": [['transform-define', env]]
}