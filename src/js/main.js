var app = (function() {
	var DIRECTIONS = [-1,0,1];
	var MAX_SPEED = 5;
	var maxPosition;
	var minPosition;

	var currentCamera = 1;
	var currentSpeed = 0;
	var currentTime = 1;
	
	var currentDirection = 0;

	return {
		buildFrameString: function(cameraID, timeID){
			return "camera" + cameraID + "_" + this.padString(timeID.toString(),"0",4);
		},
		padString: function(stringToPad, padChar, targetLength){
			var numberOfCharactersToAdd = targetLength - stringToPad.length;
			var result = stringToPad;
			if (stringToPad.length >= targetLength) {
				return result;
			} else 
				for (var i = 0; i < numberOfCharactersToAdd; i++){
					result = padChar + result;
				}
			return result;
		}
	};
})();