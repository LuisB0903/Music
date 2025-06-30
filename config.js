

module.exports = {
  TOKEN: "",
  language: "es",
  ownerID: ["561473600658472990", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/PcRCVseqAX",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "El lider",
      password: "thepo1234",
      host: "172.31.128.43",
      port:  8262,
      secure: false
    }
  ]
}
