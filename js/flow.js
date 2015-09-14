window.onload=function(){
	waterfall("main","box");
	}
 var dataInt={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"}]}
window.onscroll=function()
{
	var lparent=document.getElementById("main");
	if(IsScrollRight)
	{
		for(var i=0;i<dataInt.data.length;i++)
		{
			var Box=document.createElement("div");
			Box.className="box";
			lparent.appendChild(Box);
			var Pic=document.createElement("div");
			Pic.className="pic";
			Box.appendChild(Pic);
			var Img=document.createElement("img");
			Img.src="image/"+dataInt.data[i].src;
			Pic.appendChild(Img);
		}
		waterfall("main","box");
	}
	
}
function waterfall(parent,box)
{
	var lparent=document.getElementById(parent);
	var obox=getClass(lparent,box);
	var boxwid=obox[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/boxwid);
	//console.log(cols);
	lparent.style.cssText="width:"+boxwid*cols+"px;margin:0 auto";
	var hArray=new Array();
	for(var i=0;i<obox.length;i++)
	{
		if(i<cols)
		{
			hArray.push(obox[i].offsetHeight);
		}
		else
		{
			//console.log(hArray);
			var minH=Math.min.apply(null,hArray);
			//console.log(minH);
			var index=getminhIndex(hArray,minH);
			//console.log(index);
			obox[i].style.position="absolute";
			obox[i].style.top=minH+"px";
			obox[i].style.left=obox[index].offsetLeft+"px";
			hArray[index]+=obox[i].offsetHeight;
		}	
	}
	//console.log(obox.length);
}
function getClass(parent,clName)
{
    var	boxArray=new Array();
	lElement=parent.getElementsByTagName("*");
	for(var i=0;i<lElement.length;i++)
	{
		 if(lElement[i].className==clName)
		 {boxArray.push(lElement[i]);}
	}
	return boxArray;
}
function getminhIndex(array,minH)
{
	for(var i in array)
	{
		if(array[i]==minH)
		{
			return i;
		}
	}
}
function IsScrollRight()
{
	var lmain=document.getElementById("main");
	var lbox=getClass(lmain,"box");
	var LastBoxH=lbox[lbox.length-1].offsetTop+Math.floor(lbox[lbox.length-1].offsetHeight/2);
	var Scroll=document.body.scrollTop||document.documentElement.scrollTop;
	var Height=document.body.clientHeight||document.documentElement.clientHeight;
	console.log(Scroll);
	console.log(Height);
	console.log(LastBox);
	if(LastBoxH<Scroll+Height){return true; }
	else {return false;}
}
// JavaScript Document