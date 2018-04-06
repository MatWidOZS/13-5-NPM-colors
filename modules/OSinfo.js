var os = require('os');
var colors = require('colors');
var uptimeInfo = require('./uptimeInfo');

function getOSinfo() {
		var type = os.type(),
			release = os.release(),
			cpu = os.cpus()[0].model,
			userInfo = os.userInfo();

		if (type === 'Darwin') {
			type = 'OSX';
		} else if (type === 'Windows_NT') {
			type = 'Windows';
		} else if (type === 'Linux') {
			type = 'Linux';
		}
		console.log('System: '.blue, type.bold);
		console.log('Release: '.yellow, release.bold);
		console.log('CPU model: '.green, cpu);
		uptimeInfo.format();
		console.log('User name: '.cyan, userInfo.username);
		console.log('Home dir: '.grey, userInfo.homedir);
	}

exports.print = getOSinfo;