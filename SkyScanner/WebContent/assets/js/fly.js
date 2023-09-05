function delTicket(num) {
	var chkbox = document.getElementsByName('chk');
	var listType = "";

	if (chkbox[0].checked == true) {
		listType = "time"
	} else if (chkbox[1].checked == true) {
		listType = "price"
	} else if (chkbox[2].checked == true) {
		listType = "line"
	}

	if (num == 1) {
		var cell = document.getElementById('dticket');
		while (cell.hasChildNodes()) {
			cell.removeChild(cell.firstChild);
		}
		$('#' + listType + 'arrlist').hide()
		$('#' + listType + 'deplist').show()
	} else {
		var cell = document.getElementById('sticket');
		while (cell.hasChildNodes()) {
			cell.removeChild(cell.firstChild);
		}
		$('#' + listType + 'arrlist').hide()
		$('#' + listType + 'arrlist').show()
	}
	var cell = document.getElementById('airlist');

	if (document.getElementById('paybtn') != null) {
		cell.removeChild(document.getElementById('paybtn'));
	}
}

function hidelist() {
	$('#timedeplist').hide();
	$('#timearrlist').hide();
	$('#linedeplist').hide();
	$('#linearrlist').hide();
	$('#pricedeplist').hide();
	$('#pricearrlist').hide();
}

function check(type) {
	if (type == "timed") {
		var cell = document.getElementById('dticket');
		var cell2 = document.getElementById('sticket');
		while (cell.hasChildNodes()) {
			cell.removeChild(cell.firstChild);
		}
		while (cell2.hasChildNodes()) {
			cell2.removeChild(cell2.firstChild);
		}
		hidelist();
		$('#timedeplist').show();
	} else if (type == "price") {
		var cell = document.getElementById('dticket');
		var cell2 = document.getElementById('sticket');
		while (cell.hasChildNodes()) {
			cell.removeChild(cell.firstChild);
		}
		while (cell2.hasChildNodes()) {
			cell2.removeChild(cell2.firstChild);
		}
		hidelist();
		$('#pricedeplist').show();
	} else if (type == "line") {
		var cell = document.getElementById('dticket');
		var cell2 = document.getElementById('sticket');
		while (cell.hasChildNodes()) {
			cell.removeChild(cell.firstChild);
		}
		while (cell2.hasChildNodes()) {
			cell2.removeChild(cell2.firstChild);
		}
		hidelist();
		$('#linedeplist').show();
	}

	if (document.getElementById('paybtn') != null) {
		var cell = document.getElementById('airlist');
		cell.removeChild(document.getElementById('paybtn'));
	}
}

function fly(dep, arr) {
	var deptime = "" + dep;
	var year = deptime.substring(0, 4);
	var month = deptime.substring(4, 6); //서버와의 '월'데이터 불일치. -1로 보정
	var day = deptime.substring(6, 8);
	var hour = deptime.substring(8, 10);
	var minute = deptime.substring(10, 12);
	var dateA = new Date(year, month, day, hour, minute, 0);

	var arrtime = "" + arr;

	year = arrtime.substring(0, 4);
	month = arrtime.substring(4, 6);
	day = arrtime.substring(6, 8);
	hour = arrtime.substring(8, 10);
	minute = arrtime.substring(10, 12);

	var dateB = new Date(year, month, day, hour, minute, 0);
	var ss = Math.floor(dateB.getTime() - dateA.getTime()) / 1000;
	var mm = Math.floor(ss / 60);
	var hh = Math.floor(mm / 60);
	var day = Math.floor(hh / 24);
	var diff_hour = Math.floor(hh % 24);
	var diff_hour = Math.floor(hh % 24);
	var diff_minute = Math.floor(mm % 60);
	var diff_second = Math.floor(ss % 60);
	var flytime;

	if (diff_hour == 0) {
		flytime = diff_minute + "분";
	} else {
		flytime = diff_hour + "시간 " + diff_minute + "분";
	}
	document.write(flytime);
}

function a(airline, deptime, arrtime, depport, arrport, price, vihicleId, tripType, listType, people) {
	var airlinename = "airline";
	/*alert(listType);*/
	if (airline == "대한 항공") {
		airlinename = airlinename + " airline2";
	} else if (airline == "진 에어") {
		airlinename = airlinename + " airline3";
	} else if (airline == "제주항공") {
		airlinename = airlinename + " airline4";
	} else if (airline == "이스타항공") {
		airlinename = airlinename + " airline5";
	} else if (airline == "에어부산") {
		airlinename = airlinename + " airline6";
	} else if (airline == "티웨이항공") {
		airlinename = airlinename + " airline7";
	}
	select('first', listType, airline, deptime, arrtime, depport, arrport, price, airlinename, vihicleId, tripType, people);
	$('#' + listType + 'deplist').hide();

	if (document.getElementById('arr') == null) {
		$('#' + listType + 'arrlist').show();
	}
}

function b(airline, deptime, arrtime, depport, arrport, price, vihicleId, listType) {
	var airlinename = "airline";
	if (airline == "대한 항공") {
		airlinename = airlinename + " airline2";
	} else if (airline == "진 에어") {
		airlinename = airlinename + " airline3";
	} else if (airline == "제주항공") {
		airlinename = airlinename + " airline4";
	} else if (airline == "이스타항공") {
		airlinename = airlinename + " airline5";
	} else if (airline == "에어부산") {
		airlinename = airlinename + " airline6";
	} else if (airline == "티웨이항공") {
		airlinename = airlinename + " airline7";
	}
	select('second', listType, airline, deptime, arrtime, depport, arrport, price, airlinename, vihicleId);
	$('#' + listType + 'arrlist').hide();
}

function fullSit(btnType, listType) {
	if (btnType == 'first') {
		$('#' + listType + 'arrlist').hide();
		$('#' + listType + 'deplist').show();
	} else if (btnType == 'second') {
		$('#' + listType + 'deplist').hide();
		$('#' + listType + 'arrlist').show();
	}

}

function select(btnType, listType, airline, deptime, arrtime, depport, arrport, price, airlinename, vihicleId, tripType, people) {
	$.ajax({
		type : "GET",
		url : "airSit?depdate=" + deptime + "&vihicleId=" + vihicleId + "",
		dataType : "text",
		success : function(data) {
			if (data != 0) {
				var year = deptime.substring(0, 4);
				var month = deptime.substring(4, 6); //서버와의 '월'데이터 불일치. -1로 보정
				var day = deptime.substring(6, 8);
				var hour = deptime.substring(8, 10);
				var minute = deptime.substring(10, 12);
				var dateA = new Date(year, month, day, hour, minute, 0);
				year = arrtime.substring(0, 4);
				month = arrtime.substring(4, 6);
				day = arrtime.substring(6, 8);
				hour = arrtime.substring(8, 10);
				minute = arrtime.substring(10, 12);
				var dateB = new Date(year, month, day, hour, minute, 0);
				var ss = Math.floor(dateB.getTime() - dateA.getTime()) / 1000;
				var mm = Math.floor(ss / 60);
				var hh = Math.floor(mm / 60);
				var day = Math.floor(hh / 24);
				var diff_hour = Math.floor(hh % 24);
				var diff_hour = Math.floor(hh % 24);
				var diff_minute = Math.floor(mm % 60);
				var diff_second = Math.floor(ss % 60);
				var flytime;
				var btn;
				if (diff_hour == 0) {
					flytime = diff_minute + "분";
				} else {
					flytime = diff_hour + "시간 " + diff_minute + "분";
				}
				var input = "";
				var tag = "";
				var cname = "";
				var check = 0;
				var check2 = 0;

				if (document.getElementById('dep') != null || document.getElementById('arr') != null) {
					check2 = 1;
				}

				if (tripType == "On Way") { //편도
					btn = "<button class='btn reservation-btn' id='paybtn'>예약하기</button>"; //편도
					input = "<input type='hidden' name='airlineNm' value='" + airline + "'><input type='hidden' name='vihicleId' value='" + vihicleId + "'><input type='hidden' name='depPlandTime' value='" + deptime + "'><input type='hidden' name='arrPlandTime' value='" + arrtime + "'><input type='hidden' name='depAirportNm' value='" + depport + "'><input type='hidden' name='arrAirportNm' value='" + arrport + "'><input type='hidden' name='economyCharge' value='" + price + "'><input type='hidden' name='people' value='" + people + "'>";
					tag = "<div class='product selected-product clearfix' id='dep'> " + input + "     <p class='selected'>가는날 항공편 " + deptime.substring(0, 4) + "년 " + deptime.substring(4, 6) + "월 " + deptime.substring(6, 8) + "일</p>   <a class='cancel-btn'href='#' onclick='delTicket(1)'>취소버튼</a>   <div class='flight-box'>         <div class='flight-info clearfix'>            <p class='" + airlinename + "'>" + airline + "<span>" + vihicleId + "</span></p>            <p class='dep-info'>" + deptime.substring(8, 10) + ":" + deptime.substring(10, 12) + "<span class='airport'>" + depport + "</span></p>            <p class='flight-time'>" + flytime + "</p>            <p class='arr-info'>" + arrtime.substring(8, 10) + ":" + arrtime.substring(10, 12) + "<span class='airport'>" + arrport + "</span></p>         </div>      </div>  <div class='price-box'> <div class='box'> <p class='product-picker'> 이코노미<span class='price'>" + price + "</span> <span class='won'>원</span> <span class='sit'>잔여좌석( " + data + " / 30 )</span> </p> </div> </div>    </div>";
					cname = "dticket";

				} else if (tripType == "Round Trip") { //왕복 첫번째 클릭
					btn = "";
					input = "<input type='hidden' name='airlineNm' value='" + airline + "'><input type='hidden' name='vihicleId' value='" + vihicleId + "'><input type='hidden' name='depPlandTime' value='" + deptime + "'><input type='hidden' name='arrPlandTime' value='" + arrtime + "'><input type='hidden' name='depAirportNm' value='" + depport + "'><input type='hidden' name='arrAirportNm' value='" + arrport + "'><input type='hidden' name='economyCharge' value='" + price + "'><input type='hidden' name='people' value='" + people + "'>";
					tag = "<div class='product selected-product clearfix' id='dep'>  " + input + "    <p class='selected'>가는날 항공편 " + deptime.substring(0, 4) + "년 " + deptime.substring(4, 6) + "월 " + deptime.substring(6, 8) + "일</p>   <a class='cancel-btn'href='#' onclick='delTicket(1)'>취소버튼</a>   <div class='flight-box'>         <div class='flight-info clearfix'>            <p class='" + airlinename + "'>" + airline + "<span>" + vihicleId + "</span></p>            <p class='dep-info'>" + deptime.substring(8, 10) + ":" + deptime.substring(10, 12) + "<span class='airport'>" + depport + "</span></p>       <p class='flight-time'>" + flytime + "</p>        <p class='arr-info'>" + arrtime.substring(8, 10) + ":" + arrtime.substring(10, 12) + "<span class='airport'>" + arrport + "</span></p>         </div>      </div>  <div class='price-box'> <div class='box'> <p class='product-picker'> 이코노미<span class='price'>" + price + "</span> <span class='won'>원</span> <span class='sit'>잔여좌석( " + data + " / 30 )</span> </p> </div> </div> </div>";
					tripType = "";
					cname = "dticket";
				} else { //왕복 두번째 클릭
					btn = "<button class='btn reservation-btn' id='paybtn'>예약하기</button>";
					input = "<input type='hidden' name='airlineNm2' value='" + airline + "'><input type='hidden' name='vihicleId2' value='" + vihicleId + "'><input type='hidden' name='depPlandTime2' value='" + deptime + "'><input type='hidden' name='arrPlandTime2' value='" + arrtime + "'><input type='hidden' name='depAirportNm2' value='" + depport + "'><input type='hidden' name='arrAirportNm2' value='" + arrport + "'><input type='hidden' name='economyCharge2' value='" + price + "'>";
					tag = "<div class='product selected-product clearfix' id='arr'>  " + input + "    <p class='selected'>오는날 항공편 " + deptime.substring(0, 4) + "년 " + deptime.substring(4, 6) + "월 " + arrtime.substring(6, 8) + "일</p>   <a class='cancel-btn'href='#' onclick='delTicket(2)'>취소버튼</a>   <div class='flight-box'>         <div class='flight-info clearfix'>            <p class='" + airlinename + "'>" + airline + "<span>" + vihicleId + "</span></p>            <p class='dep-info'>" + deptime.substring(8, 10) + ":" + deptime.substring(10, 12) + "<span class='airport'>" + depport + "</span></p>      <p class='flight-time'>" + flytime + "</p>        <p class='arr-info'>" + arrtime.substring(8, 10) + ":" + arrtime.substring(10, 12) + "<span class='airport'>" + arrport + "</span></p>         </div>      </div>  <div class='price-box'> <div class='box'> <p class='product-picker'> 이코노미<span class='price'>" + price + "</span> <span class='won'>원</span> <span class='sit'>잔여좌석( " + data + " / 30 )</span> </p> </div> </div> </div>";
					cname = "sticket";
					check = 1;
				}

				var inner = innerHTML = "" + tag;
				$('#' + cname).append(inner);
				if (tripType == "On Way") {
					$('#airlist').append(btn);
				} else if (check == 1 || check2 == 1) {
					btn = "<button class='btn reservation-btn' id='paybtn'>예약하기</button>";
					$('#airlist').append(btn);
				}
			} else if (data == 0) {
				alert('좌석이 없습니다.')
				fullSit(btnType, listType)
			}
		}
	});

}