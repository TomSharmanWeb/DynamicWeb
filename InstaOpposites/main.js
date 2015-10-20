console.log("main.js ready to roll")


var endpoint = 'https://api.instagram.com/v1/tags/'

var hashtag = 'rich'

var client_id = '2141f2d192204f2bac20503853127ecc '

var URL = endpoint + hashtag + "/media/recent?client_id=" + client_id

var InstaURL = 'https://api.instagram.com/v1/tags/poor/media/recent?client_id=2141f2d192204f2bac20503853127ecc'


$.ajax (

    {
        dataType: "jsonp",
        url: URL,
        success: handleData
    })

function handleData( json )
{
    console.log(json)
}
