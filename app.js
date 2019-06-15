function showOne(){
    document.getElementById('qa_item').style.display='none';
    document.getElementById('goBtn').style.display='none';
    document.getElementById('qOne').style.display='block';
}
function showTwo(){
    document.getElementById('qOne').style.display = 'none';
    document.getElementById('qTwo').style.display = 'block';
}
function showThree(){
    document.getElementById('qTwo').style.display = 'none';
    document.getElementById('qThree').style.display = 'block';
}
function showFour(){
    document.getElementById('qThree').style.display = 'none';
    document.getElementById('qFour').style.display = 'block';
}

function showIntro(){
    document.getElementById('qa_girl').style.display = 'none';
    document.getElementById('brush').style.display = 'block';
    document.getElementById('qFour').style.display = 'none';
    document.getElementById('qIntro').style.display = 'block';
    document.getElementById('goFill').style.display = 'block';
    document.getElementById('sale').style.display = 'block';
    

}

function showInput(){
    document.getElementById('qIntro').style.display = 'none';
    document.getElementById('goFill').style.display = 'none';
    document.getElementById('qa_item_input').style.display = 'block';
    document.getElementById('submit_input').style.display = 'block';
}




