angular.module('app', []).controller('AppCtrl', function($scope) {
	var self = this;

	os = require('os-utils');
	self.systemStats = {};

	
	os.cpuUsage((cpu) => {
		self.systemStats.cpuUsage = cpu;
	});

	self.refreshSystemStats = () => {
		os.cpuUsage((cpu) => {
			self.systemStats.cpuUsage = cpu;
		});
		self.systemStats.cpus = os.cpuCount();
		self.systemStats.freemem = os.freemem();
		self.systemStats.loadAvg = os.loadavg();
	};
});