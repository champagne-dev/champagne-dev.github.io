$('body > div.projects-container > div.project > div.inner').click(function(e){
	var classClicked = $(e.target).attr('class')
	var link;
	if(classClicked == "pic") // An actual link was clicked
		link = $(e.target).parent().attr('href')
	else{
		var $first_link = $($(this).find("div.links").find("a.link").get(0))
		link = $first_link.attr('href');
	}
	window.open(link);
})