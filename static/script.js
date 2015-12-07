$('body > div.projects-container > div.project > div.inner').click(function(e){
	var classClicked = $(e.target).attr('class')
	var link = null;
	if(classClicked != "pic"){ // An actual link wasn't clicked
		var $first_link = $($(this).find("div.links").find("a.link").get(0))
		link = $first_link.attr('href');
	}
	if(link)
		window.open(link);
})