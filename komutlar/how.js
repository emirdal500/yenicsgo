const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(500);
message.channel.send("500 tane mesaj başarıyla sildim :heavy_check_mark:").then(msg => {
	msg.delete(500)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
