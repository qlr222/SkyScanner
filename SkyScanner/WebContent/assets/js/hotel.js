function doChange(srcE, targetId){
    var val = srcE.options[srcE.selectedIndex].value;
    var targetE = document.getElementById(targetId);
    //alert(val);
    //alert(targetE);
    removeAll(targetE);

    if(val == '1'){
        addOption('강남', 1, targetE);
        addOption('강동구', 2, targetE);
        addOption('강북구', 3, targetE);
        addOption('강서구', 4, targetE);
        addOption('관악구', 5, targetE);
        addOption('광진구', 6, targetE);
        addOption('구로구', 7, targetE);
        addOption('금천구', 8, targetE);
        addOption('노원구', 9, targetE);
        addOption('도봉구', 10, targetE);
        addOption('동대문구', 11, targetE);
        addOption('동작구', 12, targetE);
        addOption('마포구', 13, targetE);
        addOption('서대문구', 14, targetE);
        addOption('서초구', 15, targetE);
        addOption('성동구', 16, targetE);
        addOption('성북구', 17, targetE);
        addOption('송파구', 18, targetE);
        addOption('양천구', 19, targetE);
        addOption('영등포구', 20, targetE);
        addOption('용산구', 21, targetE);
        addOption('은평구', 22, targetE);
        addOption('종로구', 23, targetE);
        addOption('중구', 24, targetE);
        addOption('중랑구', 25, targetE);
        
    }else if(val == '2'){
    	addOption('강화군', 1, targetE);
        addOption('계양구', 2, targetE);
        addOption('남구', 3, targetE);
        addOption('남동구', 4, targetE);
        addOption('동구', 5, targetE);
        addOption('부평구', 6, targetE);
        addOption('서구', 7, targetE);
        addOption('연수구', 8, targetE);
        addOption('옹진군', 9, targetE);
        addOption('중구', 10, targetE);
    }else if(val == '3'){
    	addOption('대덕구', 1, targetE);
        addOption('동구', 2, targetE);
        addOption('서구', 3, targetE);
        addOption('유성구', 4, targetE);
        addOption('중구', 5, targetE);
        
    }else if(val == '4'){
    	addOption('남구', 1, targetE);
        addOption('달서구', 2, targetE);
        addOption('달성군', 3, targetE);
        addOption('동구', 4, targetE);
        addOption('북구', 5, targetE);
        addOption('서구', 6, targetE);
        addOption('수성구', 7, targetE);
        addOption('중구', 8, targetE);
    }else if(val == '5'){
    	addOption('광산구', 1, targetE);
        addOption('남구', 2, targetE);
        addOption('동구', 3, targetE);
        addOption('북구', 4, targetE);
        addOption('서구', 5, targetE);
    }else if(val == '6'){
    	addOption('강서구', 1, targetE);
        addOption('금정구', 2, targetE);
        addOption('기장군', 3, targetE);
        addOption('남구', 4, targetE);
        addOption('동구', 5, targetE);
        addOption('동래구', 6, targetE);
        addOption('부산진구', 7, targetE);
        addOption('북구', 8, targetE);
        addOption('사상구', 9, targetE);
        addOption('사하구', 10, targetE);
        addOption('서구', 11, targetE);
        addOption('수영구', 12, targetE);
        addOption('연제구', 13, targetE);
        addOption('영도구', 14, targetE);
        addOption('중구', 15, targetE);
        addOption('해운대구', 16, targetE);
    }else if(val == '7'){
    	addOption('중구', 1, targetE);
        addOption('남구', 2, targetE);
        addOption('동구', 3, targetE);
        addOption('북구', 4, targetE);
        addOption('울주군', 5, targetE);
    }else if(val == '8'){
    	addOption('세종특별자치시', 1, targetE);
    }else if(val == '31'){
    	addOption('가평군', 1, targetE);
        addOption('고양시', 2, targetE);
        addOption('과천시', 3, targetE);
        addOption('광명시', 4, targetE);
        addOption('광주시', 5, targetE);
        addOption('구리시', 6, targetE);
        addOption('군포시', 7, targetE);
        addOption('김포시', 8, targetE);
        addOption('남양주시', 9, targetE);
        addOption('동두천시', 10, targetE);
        addOption('부천시', 11, targetE);
        addOption('성남시', 12, targetE);
        addOption('수원시', 13, targetE);
        addOption('시흥시', 14, targetE);
        addOption('안산시', 15, targetE);
        addOption('안성시', 16, targetE);
        addOption('안양시', 17, targetE);
        addOption('양주시', 18, targetE);
        addOption('양평군', 19, targetE);
        addOption('여주시', 20, targetE);
        addOption('연천군', 21, targetE);
        addOption('오산시', 22, targetE);
        addOption('용인시', 23, targetE);
        addOption('의왕시', 24, targetE);
        addOption('의정부시', 25, targetE);
        addOption('이천시', 26, targetE);
        addOption('파주시', 27, targetE);
        addOption('평택시', 28, targetE);
        addOption('포천시', 29, targetE);
        addOption('하남시', 30, targetE);
        addOption('화성시', 31, targetE);
    }else if(val == '32'){
    	addOption('경산시', 1, targetE);
        addOption('경주군', 2, targetE);
        addOption('동해시', 3, targetE);
        addOption('삼척시', 4, targetE);
        addOption('속초시', 5, targetE);
        addOption('양구군', 6, targetE);
        addOption('양양군', 7, targetE);
        addOption('영월군', 8, targetE);
        addOption('원주시', 9, targetE);
        addOption('인제군시', 10, targetE);
        addOption('정선군', 11, targetE);
        addOption('철원군', 12, targetE);
        addOption('춘천시', 13, targetE);
        addOption('태백시', 14, targetE);
        addOption('평창군', 15, targetE);
        addOption('홍천군', 16, targetE);
        addOption('화천군', 17, targetE);
        addOption('횡성군', 18, targetE);
    }else if(val == '33'){
    	addOption('괴산군', 1, targetE);
        addOption('단양군', 2, targetE);
        addOption('보은군', 3, targetE);
        addOption('영동군', 4, targetE);
        addOption('옥천군', 5, targetE);
        addOption('음성군', 6, targetE);
        addOption('제천시', 7, targetE);
        addOption('진천군', 8, targetE);
        addOption('청원군', 9, targetE);
        addOption('청주시', 10, targetE);
        addOption('충주시', 11, targetE);
        addOption('증평군', 12, targetE);
    }else if(val == '34'){
    	addOption('공주시', 1, targetE);
        addOption('금산군', 2, targetE);
        addOption('논산시', 3, targetE);
        addOption('당진시', 4, targetE);
        addOption('보령시', 5, targetE);
        addOption('부여군', 6, targetE);
        addOption('서산시', 7, targetE);
        addOption('서천군', 8, targetE);
        addOption('아산시', 9, targetE);
        addOption('예산군', 11, targetE);
        addOption('천안시', 12, targetE);
        addOption('청양군', 13, targetE);
        addOption('태안군', 14, targetE);
        addOption('홍성군', 15, targetE);
        addOption('계롱시', 16, targetE);
    }else if(val == '35'){
    	addOption('경산시', 1, targetE);
        addOption('경주시', 2, targetE);
        addOption('고령군', 3, targetE);
        addOption('구미시', 4, targetE);
        addOption('군위군', 5, targetE);
        addOption('김천시', 6, targetE);
        addOption('문경시', 7, targetE);
        addOption('봉화군', 8, targetE);
        addOption('상주시', 9, targetE);
        addOption('성주군', 10, targetE);
        addOption('안동시', 11, targetE);
        addOption('영덕군', 12, targetE);
        addOption('영양군', 13, targetE);
        addOption('영주시', 14, targetE);
        addOption('영천시', 15, targetE);
        addOption('예천군', 16, targetE);
        addOption('울릉군', 17, targetE);
        addOption('울진군', 18, targetE);
        addOption('의성군', 19, targetE);
        addOption('청도군', 20, targetE);
        addOption('청송군', 21, targetE);
        addOption('칠곡군', 22, targetE);
        addOption('포항시', 23, targetE);
    }else if(val == '36'){
    	addOption('거제시', 1, targetE);
        addOption('거창군', 2, targetE);
        addOption('고성군', 3, targetE);
        addOption('김해시', 4, targetE);
        addOption('남해군', 5, targetE);
        addOption('마산시', 6, targetE);
        addOption('밀양시', 7, targetE);
        addOption('사천시', 8, targetE);
        addOption('산청군', 9, targetE);
        addOption('양산시', 10, targetE);
        addOption('의령군', 12, targetE);
        addOption('진주시', 13, targetE);
        addOption('진해시', 14, targetE);
        addOption('창녕군', 15, targetE);
        addOption('창원시', 16, targetE);
        addOption('통영시', 17, targetE);
        addOption('하동군', 18, targetE);
        addOption('함안군', 19, targetE);
        addOption('함양군', 20, targetE);
        addOption('합천군', 21, targetE);
    }else if(val == '37'){
    	addOption('고창군', 1, targetE);
        addOption('군산시', 2, targetE);
        addOption('김제시', 3, targetE);
        addOption('남원시', 4, targetE);
        addOption('무주군', 5, targetE);
        addOption('부안군', 6, targetE);
        addOption('손창군', 7, targetE);
        addOption('완주군', 8, targetE);
        addOption('익산시', 9, targetE);
        addOption('임실군', 10, targetE);
        addOption('장수군', 11, targetE);
        addOption('전주시', 12, targetE);
        addOption('정읍시', 13, targetE);
        addOption('진안군', 14, targetE);
    }else if(val == '38'){
    	addOption('강진군', 1, targetE);
        addOption('고흥군', 2, targetE);
        addOption('곡성군', 3, targetE);
        addOption('광양시', 4, targetE);
        addOption('구례군', 5, targetE);
        addOption('나주시', 6, targetE);
        addOption('담양군', 7, targetE);
        addOption('목포시', 8, targetE);
        addOption('무안군', 9, targetE);
        addOption('보성군', 10, targetE);
        addOption('순천시', 11, targetE);
        addOption('신안군', 12, targetE);
        addOption('여수시', 13, targetE);
        addOption('영광군', 16, targetE);
        addOption('영암군', 17, targetE);
        addOption('완도군', 18, targetE);
        addOption('장성군', 19, targetE);
        addOption('장흥군', 20, targetE);
        addOption('진도군', 21, targetE);
        addOption('함평군', 22, targetE);
        addOption('해남군', 23, targetE);
        addOption('화순군', 24, targetE);
    }else if(val == '39'){
    	addOption('남제주군', 1, targetE);
        addOption('북제주군', 2, targetE);
        addOption('서귀포시', 3, targetE);
        addOption('제주시', 4, targetE);
    }
}

function addOption(text, value, e){
    var o = new Option();
    o.value = value;
    o.text = text;
    try{
        e.add(o);
    }catch(ee){
        e.add(o, null);
    }
}

function removeAll(e){
    for(var i = 0, limit = e.options.length; i < limit - 1; ++i){
        e.remove(1);
    }
}