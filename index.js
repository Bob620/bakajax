"use strict"

var request = require('request');

function Bakajax() {

}
Bakajax.prototype.post = function(url, data) {
	return new Promise(function(resolve, reject) {
		request.post({
			headers: {'content-type': 'application/json'},
			url: url,
			body: JSON.stringify(data)
		}, function(err, res, body) {
			if (err) {
				reject(err);
			} else {
				var type = res.headers['content-type'].split('; ');
				var contentType;
				var response = '';
				for (var i = 0; i < type.length; i++) {
					if (type[i] == 'application/json') {
						contentType = 'json';
						break;
					}
				}
				if (contentType == 'json') {
					response = JSON.parse(body);
				} else {
					response = {'body': body};
				}
				resolve(response);
			}
		});
	});
};
Bakajax.prototype.put = function(url, data) {
	return new Promise(function(resolve, reject) {
		request.put({
			headers: {'content-type': 'application/json'},
			url: url,
			body: JSON.stringify(data)
		}, function(err, res, body) {
			if (err) {
				reject(err);
			} else {
				var type = res.headers['content-type'].split('; ');
				var contentType;
				var response = '';
				for (var i = 0; i < type.length; i++) {
					if (type[i] == 'application/json') {
						contentType = 'json';
						break;
					}
				}
				if (contentType == 'json') {
					response = JSON.parse(body);
				} else {
					response = {'body': body};
				}
				resolve(response);
			}
		});
	});
};
Bakajax.prototype.delete = function(url, data) {
	return new Promise(function(resolve, reject) {
		request.delete({
			headers: {'content-type': 'application/json'},
			url: url,
			body: JSON.stringify(data)
		}, function(err, res, body) {
			if (err) {
				reject(err);
			} else {
				var type = res.headers['content-type'].split('; ');
				var contentType;
				var response = '';
				for (var i = 0; i < type.length; i++) {
					if (type[i] == 'application/json') {
						contentType = 'json';
						break;
					}
				}
				if (contentType == 'json') {
					response = JSON.parse(body);
				} else {
					response = {'body': body};
				}
				resolve(response);
			}
		});
	});
};
Bakajax.prototype.get = function(url, data) {
	return new Promise(function(resolve, reject) {
		request.get({
			headers: {'content-type': 'application/json'},
			url: url,
			body: JSON.stringify(data)
		}, function(err, res, body) {
			if (err) {
				reject(err);
			} else {
				var type = res.headers['content-type'].split('; ');
				var contentType;
				var response = '';
				for (var i = 0; i < type.length; i++) {
					if (type[i] == 'application/json') {
						contentType = 'json';
						break;
					}
				}
				if (contentType == 'json') {
					response = JSON.parse(body);
				} else {
					response = {'body': body};
				}
				resolve(response);
			}
		});
	});
};

module.exports = new Bakajax();