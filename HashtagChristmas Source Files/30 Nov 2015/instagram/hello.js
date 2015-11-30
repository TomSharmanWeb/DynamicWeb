Parse.initialize("6sS93UI16avo61Aqyv0Sa86sLiLlDgohj1dAXXhs", "gBzWE8yWnSUDdkiG5xKDa3LJlULYjlEPT4Vbpi92");

navigator.geolocation.watchPosition(showPosition)

var Person = Parse.Object.extend("Person");

var dude = new Person();

    dude.set('name', 'jack')
    dude.set('year', '2')
        

function showPosition(position) 
{
   console.log( "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude)

   var point = new Parse.GeoPoint(
       {
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
       });
    
    console.log(dude)
        
    dude.set('position', point)
    
           dude.save(null,
                   {
                    success: function(object)
                        {
                            console.log(object)
                            console.log(dude.get('name') + ' is here ' + dude.get ('position'))
                        },
                    error: function( object, error)
                        {
                            console.log(error)
                        }
                   });
}

