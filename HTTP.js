// JQuery
$.ajax( {
    type : 'POST',
    url : url,
    data : data,
    dataType : dataType,
    success : function(res){
        console.log(res)
    },
    error: function(res){
        console.log(res)
    }
})

// fetch
try{
    let res = await fetch(url)
    let data = res.json()
    console.log(data)
} catch(e){
    console.log('오류',e)
}

//axios
axios({
    method: 'post',
    url : '/user/1234',
    data : {
        firstName : 'Kim'
    }
}).then(function(res){
    console.log(res)
}).catch(function(error){
    console.log(error)
})