var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=0bIsgcVGfgrY6OzNZhOjJjSLUA6IgoC6";

//$('body').click(function () {
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function (object) {
    console.log(object)
    var results = object.response.docs;

    for (var i = 0; i < object.response.docs.length; i++) {

    };
    var thumbnail = object.response.docs[0].multimedia[17]
    //});


});