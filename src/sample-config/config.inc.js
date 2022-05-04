module.exports = {
    "BOT_TOKEN": "5367439826:AAHrc5StK4IyrHizvPKIi8bWvY_3RkJcqFA", //Telegram Bot Token
    "ADMINS": {
        "OWNER": 2141842369,
        "MODERATORS": []
    },
    "MAX_DOMAINS_PER_PAGE": 5, //Number of domains per page in custom domain selection list
    "MAX_DOMAIN_ERRORS": 3, //3 domain errors and the domain is taken down
    "ERROR_LOG_CHANNEL_ID": -1, //Id of the channel where error logs should be sent, bot needs admin access to the channel
    "MAX_TD_PER_USER": -1, //Global number of TDs, this number overrides TD_DYNAMIC_QUOTA. Set to -1 to disable  this option 
    "TD_DYNAMIC_QUOTA": { //Number of TDs per number of days
    	"TDS": 3,
    	"DAYS": 30
    },
    "WELCOME_MESSAGE": "Hi, welcome to SDmototu_bot",
    "SIGNATURE_MESSAGE": "Made by Mototu",
    "BOT_MAINTENANCE_MODE_ENABLED": false,
    "domains": [] //see /src/domain.inc.js for format
}
