const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity("$hello"); 
});

client.on('message', message => {

	//const taggedUser = message.mentions.users.first();
	//if (!message.mentions.users.size);
	//else if (taggedUser.username === 'DarthBanana' && message.author.bot == false){
		//message.channel.send('The Emperor is coming...');

	//}
	if (message.content.toLowerCase().startsWith(`${prefix}hello`)) {
		message.channel.send('__Hello there, my commands are:__' +
		'\n**$hello** <:3843_green_blue_arrow:855826892317130773>list of commands' +
		'\n**$discord** <:3843_green_blue_arrow:855826892317130773>Discord stats' +
		'\n**$me** <:3843_green_blue_arrow:855826892317130773>user stats' +
		'\n**$info** <:3843_green_blue_arrow:855826892317130773>Minecraft stats' +
		'\n**$players** <:3843_green_blue_arrow:855826892317130773>lists all online Minecraft players' +
		'\n**$plugins** <:3843_green_blue_arrow:855826892317130773>lists all server plugins' +
		'\n**$ip** <:3843_green_blue_arrow:855826892317130773>ip and port of the server' + 
		'\n**$commands** <:3843_green_blue_arrow:855826892317130773>lists some useful commands');
	
	}else if (message.content.toLowerCase().startsWith(`${prefix}me`)) {
		message.channel.send('__Your info:__' + 
		'\n**Your username:** ' + message.author.username + 
		'\n**Your ID:** ' + message.author.id);
	
	}if (message.content.toLowerCase().startsWith(`${prefix}discord`)) {
		message.channel.send('__Server info:__' + 
		'\n**Server name:** ' + message.guild.name +
		'\n**Total members:** ' + message.guild.memberCount +
		'\n**Created at:** ' + message.guild.createdAt +
		'\n**Owner:** ' + message.guild.owner.nickname +
		'\n**Region:** ' + message.guild.region);

	}else if (message.content.toLowerCase().startsWith(`${prefix}ip`) && message.guild.id == '805938961418813491'){
		message.channel.send('__Minecraft ip and port:__' +
		'\n**IP:** playempire.mcpe.lol' + 
		'\n**PORT:** 19145');
		
	}else if (message.content.toLowerCase().startsWith(`${prefix}commands`)){
		message.channel.send('__Useful commands:__' +
		'\n**Discord:** !ip, !vote, !store' + 
		'\n**Minecraft:** /cc, /vote, /spawn, /tpa, /tpaccept, /tpdeny');
		
	}else if (message.content.toLowerCase().startsWith(`apple`)){
		message.channel.send('pie');
		
	}
});

client.login(token);