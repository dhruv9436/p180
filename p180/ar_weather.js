let coordinates = {}

$(document).ready(function(){
    get_coordinates()
})

function get_coordinates() {
    let searchparms = new URLSearchParams(window.location.search)
    if (searchparms.has("source") & searchparms.has("destination")){
        let source = searchparms.get("source")
        let destination = searchparms.get("destination")
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[0]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[0]
    }
    else{
        alert("coordinates not selected")
        window.history.back()
    }
}

function get_weather() {
    $.ajax({
        url:"",
        type:"get",
        success: function(response) {
            let name = response.name;
            let weather = response.weather[0].main
            $("#scene_container").append(
                `
                    <a-entity gps-entity-place="latitude:${steps[i].maneuver.location[1]}; longitude:${steps[i].maneuver.location[0]}">
                        <a-entity>
                            <a-text height="50" value="weather forecast is ${weather} and ${name}"></a-text>
                        </a-entity>
                    </a-entity>
                `
            )
        }
    })
}