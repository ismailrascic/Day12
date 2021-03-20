var collection ={
    2548: {
    
    album: "Slippery When Wet",
    artist : "Bon Jovi",
    tracks : [
        "Let It Rock",
        "You Givne Love A Bad Name"
    ]
    },
    2468: {
    
        album: "1999",
        artist : "Prince",
        tracks : [
            "1999",
            "Little Red Corvette"
        ]
        },
        1245: {
    
        
            artist : "Rober Palmer",
            tracks : []
            },
            5439: {
    
                album: "ABBA Gold"
                },
    }
    
    var OldCollection = JSON.parse(JSON.stringify(collection));
    
      function updateRecords(collection, id, prop, value) {
        if(value === "")
        {
          delete collection[id][prop];
        }
        else if(prop != "tracks" && value != ""){
          collection[id][prop] = value;
        }
        else if (prop === "tracks" ){
          if(value == "Free")
          {
            collection[id][prop[0]] = [1999];
          }
          else{
          collection[id][prop] = [value];
          }
        }
        return collection;
     }
    
       console.log( updateRecords(collection, 5439, "artist", "ABBA"));
       console.log( updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
       console.log( updateRecords(collection, 2548, "artist", ""));
       console.log( updateRecords(collection, 1245, "track", "Addicted to Love"));
        module.exports = updateRecords;