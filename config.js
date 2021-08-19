module.exports = {
  Admins: ["592494739258081300", "UserID"], //Admins of the bot
  DefaultPrefix: "dau", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://dsc.gg/dst74", //Support Server Link
  Token: "ODc3OTEyOTE3NTUzNjA2NzI2.YR5iHg.3C_W5dkSoZC9KTbUOto4Sv-vQmM" || process.env.Token, //Discord Bot Token
  ClientID: "877912917553606726", //Discord Client ID
  ClientSecret: "e5fUltKtlrHxB7JKO3vsw4ftI2yoMRY0", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "bester mann", //A Secret like a password
  IconURL:
    "https://media.giphy.com/media/x5dtJoFFwEFHfgCXwB/giphy.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "lava.link", 
    port: 80, 
    pass: "youshallnotpass", 
  },
  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "", //Spotify Client ID
    ClientSecret: "", //Spotify Client Secret
  },
};
//copyright by cpt.motchy
