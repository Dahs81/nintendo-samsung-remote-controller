var controllers = require('nes-controller')();

var SamsungRemote = require('samsung-remote');
var remote = new SamsungRemote({
    ip: '192.168.1.3' // required: IP address of your Samsung Smart TV
});

if (!controllers[0]) throw new Error("No controller found");
var controller = controllers[0];

// Used to determine state of the SELECT button
var state = {
	pressed: false
};

controller.on('pressSELECT', function(val) {
	state.pressed = true;
});

controller.on('releaseSELECT', function(val) {
	state.pressed = false;
});

// SELECT + A/B controls the volume
controller.on('pressA', function(val) {
	if (state.pressed) {
		remote.send('KEY_VOLUP', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	} else {
		remote.send('KEY_CHUP', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	}
});

controller.on('pressB', function(val) {
	if (state.pressed) {
		remote.send('KEY_VOLDOWN', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	} else {
		remote.send('KEY_CHDOWN', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	}
});

controller.on('pressSTART', function(val) {
	remote.send('KEY_MENU', function (err) {
		if (err) {
	        throw new Error(err);
	    } else {
	        // command has been successfully transmitted to your tv
	    }
	});
});



controller.on('analogNS', function(val) {
	if (val === 0) {
		remote.send('KEY_UP', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	} else if (val === 255) {
		remote.send('KEY_DOWN', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	} else {
		// Do nothing
		console.log(val);
	}
});

controller.on('analogEW', function(val) {
	if (val === 0) {
		remote.send('KEY_LEFT', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	} else if (val === 255) {
		remote.send('KEY_RIGHT', function (err) {
			if (err) {
		        throw new Error(err);
		    } else {
		        // command has been successfully transmitted to your tv
		    }
		});
	} else {
		// Do nothing
		console.log(val);
	}
});