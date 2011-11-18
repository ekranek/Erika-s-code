//----------Start form functions
var _firstName, _lastName, _team, _position;

function insertValues(){
	_firstName = document.getElementById('firstName').value;
	_lastName = document.getElementById('lastName').value;
	_team = document.getElementById('team').value;
	_position = document.getElementById('position').value;
	switch ( _team ) {
		case 'UID':
			insertText('uidCol');
		break;
		case 'DEV':
			insertText('devCol');
		break;
		case 'BA':
			insertText('baCol');
		break;
	}
}
function insertText(col){
	
	var htmlString = _firstName + ' ' + _lastName + ', ' + _position;
	if ( !checkForDupes(htmlString) ) {
		document.getElementById(col).innerHTML = htmlString; 
	} else {
		alert('This person already exists.');
	} 
}
function checkForDupes(newString) {
	var uidhtml = document.getElementById('uidCol').innerHTML;
	var devhtml = document.getElementById('devCol').innerHTML;
	var bahtml = document.getElementById('baCol').innerHTML;
	if ( uidhtml == newString || devhtml == newString || bahtml == newString ) {
		return true;
	}
}
//---------------End form functions


// ---------------------Start calculator functions
function calcButton(btnValue) {
     if (btnValue == 'C') {
          document.getElementById('screen').value = '';
     }else{
		 document.getElementById('screen').value += btnValue;
	 }
}

function backspace() {
	
   var curvalue = document.getElementById('screen').value;
   var curlength = curvalue.length;
   curvalue = curvalue.substring(0,curlength-1)
   document.getElementById('screen').value = curvalue;
}

function calculate(equation) {
     var answer = eval(equation);
     document.getElementById('screen').value = answer;
}
//--------------------End calculator functions


//------------------Start timer functions 
function startTime()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	t=setTimeout('startTime()',500);
}

function checkTime(i)
{
	if (i<10)
	  {
	  i="0" + i;
	  }
	return i;
}
//------------end timer function

var pos = 3;
	function initArray() {
		this.length = initArray.arguments.length;
		for (var i = 0; i < this.length; i++) {
		this[i] = initArray.arguments[i];
	   }
	}
var col=new initArray("4b","5b","8b","8b");
	function stop() {
		document.bgColor = '#666666';
		clearTimeout(loopID);
	}
	function start() {
		col[0]="#555"
		col[1]="#000"
		col[2]="#006064"
		col[3]="#666"
		pos++;
	if (pos<0||pos>3) {
		pos = 0;
	}
		document.bgColor = col[pos];
		loopID = setTimeout("start()",2000);
	}

	///-----------------------------------
	$(function() {
		$('.slidebttn').hover(
			function () {
				var $this = $(this);
				var $slidelem = $this.prev();
				$slidelem.stop().animate({'width':'225px'},300);
				$slidelem.find('span').stop(true,true).fadeIn();
				$this.addClass('button_c');
			},
			function () {
				var $this = $(this);
				var $slidelem = $this.prev();
				$slidelem.stop().animate({'width':'70px'},200);
				$slidelem.find('span').stop(true,true).fadeOut();
				$this.removeClass('button_c');
			}
		);
	});