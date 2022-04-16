$(document).ready(function(){
    $('.box').click(function(){
        if($('input:checkbox[name=체크]').is(':checked') == true){
            console.log('체크됨')
        }else{
            console.log('오류')
        }
    })
})