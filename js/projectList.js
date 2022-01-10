$(document).ready(function() {
    if (projectName == "index") {
        $.ajax({
            type: "GET" ,
            url: "/xml/projects.xml" ,
            dataType: "xml" ,
            success: function(xml) {
                $(xml).find('project').each(function(){
    
                    var uname = $(this).find('universalname').text(),
                        name = $(this).find('name').text(),
                        cat = $(this).find('category').text();
    
                    $("#project-list").append(
    
                        '<div data-aos="fade-in" class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pl-1 pr-1 pb-2">' +
                        '<a href="./projects/proj_' + uname + '/proj_' + uname + '.html">' +
                        '<div id="proj-SkateSidescroller" class="proj">' +
                        '<img class="proj-img" src="./images/thumbnail_' + uname + '.png" alt="Card image">' +
                        '<div class="center-img-text">' +
                        '<h1 class="proj-name">' + name + '</h1>' +
                        '<h4 class="proj-category">(' + cat + ')</h4>' +
                        '</div>' +
                        '</div>' +
                        '</a>' +
                        '</div>'
    
                    );
                }); 
            }
        });
    }
});