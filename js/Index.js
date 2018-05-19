$(document).ready(function () {
    var key = 'AIzaSyDm3fImlCwEEI9eCjnZGxzHrWYKzoaHiNE'
    var playListId = 'PL8qcvQ7Byc3PyLc2ml5hZBrn013zqKlgs'
    var url = 'https://www.googleapis.com/youtube/v3/playlistItems'

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        playlistId: playListId
    }

    loadVids()

    function loadVids() {
        $.getJSON(url, options, function (data) {
            console.log(data)
        })
    }
})