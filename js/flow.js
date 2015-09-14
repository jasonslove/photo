window.onload=function(){
	addppt();
	switchppt(1);
	addposter();
	waterfall("main","box");
	}
var datappt=[
{img:1,h2:"享受美图盛宴",h3:"美图网"},
{img:2,h2:"打开世界",h3:"点击之间"},
{img:3,h2:"采集快乐",h3:"发现美丽"},
{img:4,h2:"赏心悦目",h3:"轻松浏览"},
{img:5,h2:"打开身边的美丽",h3:"肆意"},
{img:6,h2:"图片隐藏的魅力",h3:"发现"},
{img:7,h2:"美景美生活",h3:"享受"}
];
var dataInt={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"}]};
var dataposter=[
{img:1,caption:"悉尼歌剧院",desc:"国家：澳大利亚<br><br>座落：悉尼市北部<br><br>设计师：约恩.乌松<br><br>竣工时间：1973年10月20日<br>具体描绘：古埃及金字塔是古埃及法老和王后的陵墓，塔内有甬道、石阶、墓室、木乃伊等，它是一种方锥形建筑物，其中以胡夫的金字塔最大。"},
{img:2,caption:"埃及金字塔",desc:"国家：埃及<br><br>座落：大部分在开罗西南部的吉萨高原的沙漠中<br><br>建造人：在古埃及法老领导下的古埃及人<br><br>建造时间：始建于公元前2600年<br>具体描绘：古埃及金字塔是古埃及法老和王后的陵墓，塔内有甬道、石阶、墓室、木乃伊等，它是一种方锥形建筑物，其中以胡夫的金字塔最大。"},
{img:3,caption:"古罗马竞技场",desc:"国家：意大利<br><br>座落：意大利首都罗马市中心<br><br>建造者：韦斯巴芗、提图斯<br><br>建造时间：公元72-82年<br>具体描绘：它是古罗马帝国专供奴隶主、贵族和自由名观看斗兽或奴隶角斗的地方，是古罗马文明的象征，它可以容纳近九万人数的观众。"},
{img:4,caption:"比萨斜塔",desc:"国家：意大利<br><br>座落：意大利托斯卡纳省比萨城<br><br>高度：地面到塔顶高55米<br><br>建造时间：1173年8月<br>具体描绘：它是意大利比萨城大教堂的独立式钟楼，其大胆的圆形建筑设计已经向世人展现了它的独创性，1175年首次发现塔倾斜了。"},
{img:5,caption:"埃菲尔铁塔",desc:"国家：法国<br><br>座落：法国巴黎的战神广场<br><br>设计者：古斯塔夫·埃菲尔<br>竣工时间：1889年3月31日<br>具体描绘：铁塔设计新颖独特，是世界建筑史上的技术杰作，是法国巴黎的重要景点和突出标志。它经历了百年风雨，但在经过上世纪80年代初的大修之后风采依旧，巍然屹立在塞纳河畔。"},
{img:6,caption:"金门大桥",desc:"国家：美国<br><br>座落：美国加利福尼亚州长1900多米的金门海峡之上<br>设计者：约瑟夫·施特劳斯<br>通车时间：1937年5月27日<br>具体描绘：它是世界著名的桥梁之一，被誉为20世纪桥梁工程的一项奇迹，也被认为是旧金山的象征，大桥历时4年，利用10万多吨钢材，耗资达3550万美元建成，也是近代桥梁工程的一项奇迹。"},
{img:7,caption:"印度泰姬陵",desc:"国家：印度<br><br>座落：离新德里200多公里的亚格拉(Agra)城内<br>建筑人：沙．贾汗为他心爱的皇后而建<br>建设起止时间：1631年-1653年<br>具体描绘：泰姬陵占地甚广，由前庭、正门、蒙兀儿花园、陵墓主体以及两座清真寺所组成。纯白色的泰姬陵均壮丽无比，造型完美，加上陵前水池中的倒影，就像有两座泰姬陵互相辉映"},
{img:8,caption:"中国长城",desc:"国家：中国<br>座落：东起河北省渤海湾的山海关，西至内陆地区甘肃省的嘉峪关<br>建筑人：古代中国人民<br>全长：8851.8公里<br>具体描绘：长城修筑的历史悠久，工程雄伟浩大，是世界少有的奇迹。长城东西南北交错，绵延伏于我们伟大祖国辽阔的土地上。它好像一条巨龙，翻越巍巍群山，穿过茫茫草原，跨过浩瀚的沙漠，奔向苍茫的大海。"},
{img:9,caption:"法国卢浮宫",desc:"国家：法国<br><br>座落：法国巴黎市中心的塞纳河北岸（右岸）(Agra)城内<br>馆长：亨利·罗亚特<br>竣工时间：1204年<br>具体描绘：原是法国的王宫，居住过50位法国国王和王后，现是卢浮宫博物馆，拥有的艺术收藏达40万件以上，包括雕塑、绘画、美术工艺及古代东方，古代埃及和古希腊罗马等6个门类。"},
{img:10,caption:"英国白金汉宫",desc:"国家：英国<br><br>座落：英国伦敦威斯敏斯特自治区<br>现任拥有者：伊莉莎白二世<br>建造时间：约1703年<br>具体描绘：白金汉宫位于伦敦威斯敏斯特城内，是英国王室的王宫和居所。宫内有典礼厅、音乐厅、宴会厅、画廊等775间厅室[3] ，宫外有占地辽阔的御花园。女王的重要国事活动都在该地举行。"},
{img:11,caption:"希腊神庙",desc:"国家：希腊<br><br>座落：雅典老城区卫城山的中心<br><br>全长：228英尺<br>建造时间：公元前447-438年<br>具体描绘：希腊神庙，称巴特农神庙，是希腊祭祀诸神之庙，以祭祀雅典娜为主，又称“雅典娜巴特农神庙”东西庙顶的山墙上也有精美的浮雕。巴特农神庙被认为是多立克式建筑艺术的极品，有“希腊国宝”之称。"},
{img:12,caption:"马来西亚双塔",desc:"国家：马来西亚<br><br>座落：吉隆坡市中市<br><br>设计师：西萨·佩里<br>建造时间：1996年3月13日<br>具体描绘：吉隆坡石油双塔曾经是世界最高的摩天大楼，但仍是世界最高的双塔楼，也是世界第五高的大楼。它是马来西亚国家石油公司用20亿马币建成的，大厦非常壮观，就像两座高高的尖塔刺破长空。"},
{img:13,caption:"伊斯兰开罗古城",desc:"国家：埃及<br><br>座落：尼罗河三角洲顶点以南14公里<br>代表寺：伊本·图隆清真寺<br>形成时期：公元969年<br>具体描绘：其至今规模宏大、风格朴素的伊本·图隆清真寺依然保持着旧时的风貌。中世纪的开罗建筑汇集了数量相当可观的伊斯兰古迹，它们像一部完整的编年史，展示了伊斯兰从兴起直到19世纪的历史进程。"},
{img:14,caption:"圣巴西利亚大教堂",desc:"国家：俄罗斯<br><br>座落：莫斯科<br>别称：瓦西里升天教堂<br>形成时期：为纪念1552年“伊凡雷帝”胜利占领喀山而建<br>具体描绘：它是莫斯科甚或全俄罗斯最具体而微的象征，也是俄罗斯最具代表性的纪念建筑。这座教堂是受伊凡四世的委托，为纪念其对喀山汗国的征服而于1555年和1561年之间建造的。"},
{img:15,caption:"西藏布达拉宫",desc:"国家：中国<br><br>座落：拉萨市区西北的玛布日山上<br><br>建造者：松赞干布<br><br>层数：高200余米，外观13层，实际只有9层1552年“伊凡雷帝”胜利占领喀山而建<br>具体描绘：公元7世纪初，松赞干布迁都拉萨后，为迎娶唐朝的文成公主，特别在红山之上修建了共一千间宫殿的三座九层楼宇，取名叫布达拉宫"}
];
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
var g=function(id){
	if (id.substr(0,1)==".") {
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

function addppt () {
	var tpl_ppt=g("template_ppt").innerHTML
	               .replace(/^\s*/,'')     //删除开头的0或n个空白符
	               .replace(/\s*$/,'');    //删除结尾的0或n各空白符
	var tpl_ctrl=g("template_ctrl").innerHTML
	               .replace(/^\s*/,"")
	               .replace(/\s*$/,"");
	var out_ppt=[];
	var out_ctrl=[];
	for(var i in datappt){
		var _html_ppt=tpl_ppt
		     .replace(/{{index}}/g,datappt[i].img) //加上g，替换所有匹配项
		     .replace(/{{h2}}/g,datappt[i].h2)
		     .replace(/{{h3}}/g,datappt[i].h3);
		var _html_ctrl=tpl_ctrl
		     .replace(/{{index}}/g,datappt[i].img);
		out_ppt.push(_html_ppt);
		out_ctrl.push(_html_ctrl);
	}
	g("template_ppt").innerHTML=out_ppt.join("");
	g("template_ctrl").innerHTML=out_ctrl.join("");
}

function switchppt(n){
	var mppt=g("ppt_"+n);
	var ctrl=g("ctrl_"+n);
	var clear_ppt=g(".ppt-a");
	var clear_ctrl=g(".ctrl-a");
	for(var i=0;i<clear_ppt.length;i++){
		clear_ppt[i].className=clear_ppt[i].className
		                       .replace("ppt-a_active","");
		clear_ctrl[i].className=clear_ctrl[i].className
		                        .replace("ctrl-a_active","");
	}
	mppt.className+=" ppt-a_active";
	ctrl.className+=" ctrl-a_active";
}

function random(range)
{
	var max=Math.max(range[0],range[1]);
	var min=Math.min(range[0],range[1]);
	var diff=max-min;
	var num=Math.floor((Math.random()*diff+min));
	return num;
}

function addposter(){
	var template_p=g("bposter").innerHTML;
	var template_nav=g("nav").innerHTML;
	var html=[];
	var nav=[];
	for(var s in dataposter){
		var _html=template_p.replace(/{{index}}/g,dataposter[s].img)
		           .replace(/{{caption}}/g,dataposter[s].caption)
		           .replace(/{{desc}}/g,dataposter[s].desc);
		var _nav=template_nav.replace(/{{navi}}/g,dataposter[s].img)
		html.push(_html);
		nav.push(_nav);
		/*nav.push("<span id='nav_"+s+"' onclick='turn(g("poster_'+s+'"))' class='i'>&nbsp</span>");*/
	}
	g("bposter").innerHTML=html.join("");
	g("nav").innerHTML=nav.join("");
	sortp(random([0,dataposter.length]));
 }

function range(){
	var range={left:{x:[],y:[]},right:{x:[],y:[] }};
	var board={
		w:g("board").clientWidth,
		h:g("board").clientHeight
	}
	var poster={
		w:g(".poster")[0].clientWidth,
		h:g(".poster")[0].clientHeight
	}
	range.board=board;
	range.poster=poster;
	range.left.x=[0-poster.w/2,board.w/2-poster.w/2];
	range.left.y=[0-poster.h/2,board.h-poster.h/2];
	range.right.x=[board.w/2+poster.w/2,board.w+poster.w/2];
	range.right.y=[0-poster.h/2,board.h-poster.h/2];
	return range;
}

function sortp(n)
{
	console.log(n);
	var _poster=g(".poster");
	var posters=[];
	for (var i = 0;i<_poster.length;i++) {
		_poster[i].className=_poster[i].className
		                      .replace(/\s*poster_center\s*/," "); //默认匹配项前后可能有0到n个空格
		_poster[i].className=_poster[i].className
		                      .replace(/\s*poster_front\s*/," ");
		_poster[i].className=_poster[i].className
		                      .replace(/\s*poster_back\s*/," ");
		_poster[i].className+="poster_front";
		_poster[i].style.left="";
		_poster[i].style.top="";
		_poster[i].style["transform"]=_poster[i].style["-webkit-transform"]="rotate(360deg) scale(1.2)";
		posters.push(_poster[i]);	                      
	};
	var poster_center=g("poster_"+n);
	poster_center.className+=" poster_center";
	poster_center=posters.splice(n-1,1)[0];
	console.log(posters.length);
	console.log(poster_center);
	var poster_left=posters.splice(0,posters.length/2);
	var poster_right=posters;
	var ranges=range();
	for(var s in poster_left){
		var posterleft=poster_left[s];
		posterleft.style.left=random(ranges.left.x)+"px";
		posterleft.style.top=random(ranges.left.y)+"px";
		posterleft.style["transform"]=posterleft.style["-webkit-transform"]="rotate("+random([-150,150])+"deg) scale(1)";
	}
	for(var s in poster_right){
		var posterright=poster_right[s];
		posterright.style.left=random(ranges.right.x)+"px";
		posterright.style.top=random(ranges.right.y)+"px";
		posterright.style["transform"]=posterright.style["-webkit-transform"]="rotate("+random([-150,150])+"deg) scale(1)";
	}
/*	poster_center.style.left=ranges.board.w/2-ranges.poster.w/2;
	poster_center.style.top=ranges.board.h/2-ranges.poster.h/2;
	poster_center.style["-webkit-transform"]="rotate(0deg)";*/
	var navs=g(".i");
	for(var i=0;i<navs.length;i++)
	{
		navs[i].className=navs[i].className.replace(/\s*i_current\s*/," ");
		navs[i].className=navs[i].className.replace(/\s*i_back\s*/," ");
	}
	g("nav_"+n).className+=" i_current";
	console.log(poster_center);
}
function waterfall(parent,box)
{
	var lparent=document.getElementById(parent);
	var obox=getClass(lparent,box);
	var boxwid=obox[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/boxwid);
	//console.log(cols);
	lparent.style.cssText="width:"+boxwid*cols+"px;margin:640px 0 0 23px;";
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
	var LastBoxH=lbox[lbox.length-1].offsetTop+Math.floor(lbox[lbox.length-1].offsetHeight/2)+1060;
	var Scroll=document.body.scrollTop||document.documentElement.scrollTop;
	var Height=document.body.clientHeight||document.documentElement.clientHeight;
	console.log(Scroll);
	console.log(Height);
	console.log(LastBox);
	if(LastBoxH<Scroll+Height){return true; }
	else {return false;}
}

function turn(elem)
{
	var cls=elem.className;
	var n=elem.id.split("_")[1];
	if (!/poster_center/.test(cls)) {
		return sortp(n);
	};
	if (/poster_front/.test(cls)) {
		var cls=cls.replace(/poster_front/,"poster_back");
		g("nav_"+n).className+=" i_back";
	}else{
		var cls=cls.replace(/poster_back/,"poster_front");
		g("nav_"+n).className=g("nav_"+n).className.replace(/\s*i_back\s*/," ");
	};
	return elem.className=cls;
}
// JavaScript Document