play = {
	
	obj : {
		one : 1,
		two : 2
	},
	
	currentInjection : "",
	
	beans : {},
	
	as : function( prop ){
		console.log(prop);
	},
	
	as2 : function( target ){
		console.log(arguments);
		
	},
	
	inject : function( name ){
		this.beans[name] = 1;
		this.beans[name].as = this.as;
		this.beans[name].as2 = this.as2;
		currentInjection = name;
		return this;
	},
	
	inject2 : function( name ){
		this.beans[name] = {};
		this.beans[name].as2 = this.as2;
		currentInjection = name;
		return this.beans[name];
	},
	
	injectThings : function(){
		//this.inject("one").as(this.one);
		this.inject2("two").as2(this, "two");
		this.inject2("two").as2(this.two);
	},
	
	showMe : function( obj ){
		console.log(obj);
		console.log(this);
	},
	
	applyPlay : function(){
		this.showMe( {hi : 'mom'} );
		
		this.showMe( this );
		
		console.log('applying...');
		this.showMe.apply( {scope : 'me'}, [{some : 'object'}]);
	}
	
};
