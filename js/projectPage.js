$(document).ready(function() {
    if (projectName != "index") {
        $.ajax({
            type: "GET" ,
            url: "/xml/projects.xml" ,
            dataType: "xml" ,
            success: function(xml) {
    
                $(xml).find('project').each(function(){
    
                    if ($(this).find('universalname').text() == projectName) {
                        var uname = $(this).find('universalname').text(),
                            name = $(this).find('name').text(),
                            desc = $(this).find('description').text();
    
                        document.title = 'JMM - ' + name;

                        var langs = '';

                        $(this).find('languages').find('language').each(function() {

                            langs += '<p>' + $(this).text() + '</p>';

                        });

                        $("#navleft").append(
    
                            '<h1 class="name-proj">' + name.toLowerCase() + '</h1>' +
                            '<a class="navlink navlink-left" href="/index.html">back to home</a>'
        
                        );
    
                        $("#proj-main-vid").append(
    
                            '<source src="/videos/vid_' + uname + '.mp4" type="video/mp4">' +
                            'Your browser does not support the video tag.'
        
                        );
    
                        $("#project-details").append(
    
                            '<p data-aos="fade-up" class="heading pt-3">• ' + name.toLowerCase() + ' •</p>' +
                            '<div data-aos="fade-up" class="row div-project-details">' +
                            '<div class="col-lg col-md col-sm">' +
                            '<div>' +
                            '<h3 class="project-details-heading">Languages Used</h3><hr>' +
                            langs +
                            '<br><h3 class="project-details-heading">Description</h3><hr>' +
                            '<p>' + desc + '</p>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
        
                        );
                    }
                }); 
            }
        });
    }
});