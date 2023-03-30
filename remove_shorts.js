function remove_shorts() 
{
	let els = document.getElementsByTagName("ytd-grid-video-renderer");
	let counter = 0;

	for (const el of els)
	{
		let link = el.getElementsByTagName("ytd-thumbnail")[0].getElementsByTagName("a")[0].href;
		if (link.search("shorts") > -1 && el.style.display != "none")
		{			
			el.style.display = "none";
			counter = counter + 1;
		}
	}

	/*
	if (counter > 0)
	{
		let short_string = counter == 1 ? " short" : " shorts";
		alert("Removed " + counter + short_string +  " from your feed.");
	}
	*/
	
	setInterval(remove_shorts, 2000);
}

remove_shorts();