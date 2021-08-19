  
module.exports = async (client) => {
  client.Ready = true;
  client.user.setActivity(">help", { type: "Join SERVER", url:"https://discord.gg/HXPMRVCFBx" }).then(() => {
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag);
  });
  client.RegisterSlashCommands();
};