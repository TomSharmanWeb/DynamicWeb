console.log("ready to go");

var endpoint = "https://api.instagram.com/v1/tags/"
var hashtag = "christmas"
var client_id = "%20f5e6d7edf7cf4376a2aef55e9e761464"

var instagramUrl = endpoint + hashtag + "/media/recent?client_id=" + client_id

var hashtags = {} // we'll keep a count of hashtags

var howManyInstagramCalls = 50
var currentInstagramCallCounter = 0

//var martinperssson = "https://api.instagram.com/v1/tags/martinperssson/media/recent?client_id=%20f5e6d7edf7cf4376a2aef55e9e761464";

// RUN IT!

getNextBatchOfPictures()

// FUNCTIONS

function getNextBatchOfPictures()
{
    if (currentInstagramCallCounter < howManyInstagramCalls)
    {
        console.log('calling Instagram ' + currentInstagramCallCounter)
        getInstagramMediaByUrl(instagramUrl)
        currentInstagramCallCounter += 1
    }
    else
    {
        console.log("we're done with Instagram, now let's analyse the data")
        // remove all the tags that have less than X occurrences
        
        console.log(hashtags)
        
        // from http://stackoverflow.com/a/1069840
        var commonTags = []
        for (var tag in hashtags) commonTags.push( {tag:tag, count:hashtags[tag]} )
        commonTags.sort(function(a, b) {return b.count - a.count})
        
//        console.log(commonTags) 
        
        for (var i=1; i<5; i++)
        {
            console.log(commonTags[i].tag)
        }
    }
}

function getInstagramMediaByUrl(instagramUrl)
{
    $.ajax(
    {
        dataType: "jsonp",
        url: instagramUrl,
        success: handleData
    })
}

function handleData( json )
{
    // console.log(json)

    var pictures = json.data
    
    /*pictures.forEach(function(picture)
    {
        // put the same code that we have in while..
    })*/
    
    var total = pictures.length
    var counter = 0;
    while (counter < total)
    {
        // console.log(counter)

        var picture = pictures[counter]
        
        if (picture.tags && picture.tags.length > 0)
        {
            picture.tags.forEach(function(tag)
            {
                if (_(blacklistedHashtags).contains(tag)) 
                {
                    // console.log(tag + ' is blacklisted')
                }
                else
                {
                    if (hashtags[tag] == undefined) hashtags[tag] = 1 // if it doesn't exist, set it to 1
                    else hashtags[tag] += 1 // otherwise increment it by one
                }
            })
        }

        // console.log(picture)

        /*var imageURL = picture.images.standard_resolution.url
        // console.log(imageURL)  

        var img = '<img src="' + imageURL + '">'

        $('body').append(img)*/

        counter ++
    }
    
    //    console.log(hashtags)
    
    instagramUrl = json.pagination.next_url 
    getNextBatchOfPictures()
}

