$(document).ready(function(){
	
	$('#geostatus').click(
		function(){
			if( !geo.watching ){
				geo.startWatch();
				this.value = 'Stop geo';
			} else {
				geo.clearCurrentWatch();
				this.value = 'Start geo';
			}
		}
	);	
	
});

geo = {
	watchId : 0,
	watching : false,
	watchOutputTarget : 'output',
	startPosition : undefined,
	currentPosition : undefined,
	printPosition : function( position, id ){
		$('#'+id).html(JSON.stringify(geo));
		console.log(position);
	},
	
	watchIt : function(position){
		if( geo.startPosition == undefined ){
			geo.startPosition = position;
		}
		geo.currentPosition = position;
		geo.watching = true;
		geo.printPosition(position, geo.watchOutputTarget);
	},
	startWatch : function(){
		 geo.watchId = navigator.geolocation.watchPosition( geo.watchIt );
	},
	clearCurrentWatch : function(){
		navigator.geolocation.clearWatch(geo.watchId);
		geo.watching = false;
	}
};

