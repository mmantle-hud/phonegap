window.addEventListener("load",setUp,false);

function setUp()
{
	document.querySelector("h1").addEventListener("click",doStuff,false);
}

function doStuff(e)
{
	e.target.classList.toggle("border");
}