var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable();
	this.nicknames = ko.observableArray([
		{name:'squeaker'}, 
		{name: 'fluffer'},
		{name: 'fuzzball'},
		{name: 'munchkin'}]);
	// this.level = ko.computed(function(){
	// 	var level;
	// 	var clicks = this.clickCount;
	// 	if(clicks > 100) {
	// 		level = 'meowster';
	// 	}
	// 	else if(clicks > 75) {
	// 		level = 'jedi';
	// 	}
	// 	else if(clicks > 50) {
	// 		level = 'resident';
	// 	}
	// 	else if(clicks > 25) {
	// 		level='apawntice';
	// 	}
	// 	else {
	// 		level='kitten';
	// 	}
	// 	return "Level: " + level;
	// });
}




var ViewModel = function () {
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() +1);
	}
	
}

ko.applyBindings(new ViewModel());