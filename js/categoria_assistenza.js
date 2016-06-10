function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

var id = getUrlVars()["id"];

$(document).ready(function () {
     $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query_where.php",
        data: {
            select: "nome",
            table: "categorie_assistenza",
            where: "id='" + id + "'"
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var result = JSON.parse(response);
            $("#categoria").append(result[0].nome);
            $("title").html(result[0].nome);
        },
        error: function (request, error) {
            console.log("Error");
        }
    });
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query_where.php",
        data: {
            select: "*",
            table: "assistenza",
            where: "id_categoria='" + id + "'"
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var ass = JSON.parse(response);
            var el = "";
            var buttons = "";
            for (var i = 0; i < ass.length; i++) {
                el += "<div class='col-sm-4'><a class='link_assistenza "+ass[i].tipo+"' href='pagina_assistenza.html?id=" + ass[i].id + "&cat=" + ass[i].id_categoria + "'><div class='myWell'><p class='evidenza'>" + ass[i].nome + "</p></div></a></div>";
            }

            $("#lista-assistenza").append(el);
        },
        error: function (request, error) {
            console.log("Error");
            
        }
    });


 $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query_where.php",
        data: {
            select: "DISTINCT tipo",
            table: "assistenza",
            where: "id_categoria='" + id + "'"
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var result = JSON.parse(response);
            var buttons = "";
            for (var i = 0; i < result.length; i++) {
                buttons += "<button type='button' class='btn btn-success btn-xs' style='margin-left:3px;'onclick='filtro('"+result[i].tipo+"')'>"+result[i].tipo+"</button>"
            }

            $("#btns-filtro").append(buttons);
        },
        error: function (request, error) {
            console.log("Error");
            
        }
    });
});

function filtro(tipo) {
    $("a").filter(".link_assisteza").hide();
    $("a").filter("." + tipo).show();
};