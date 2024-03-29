$(document).ready(function () {
    //Since calls are asyncronous the parameters id and categoria are taken from the localStorage for each case 
    // var categoria = localStorage.getItem("cat_prodotto");
    // var id = localStorage.getItem("id_prodotto");  AKA these variables become unused, same goes for assistance and smartlife
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query.php",
        data: {
            select: "nome, prezzo, url_immagine, categoria, descrizione",
            table: "prodotti",
            where: "id='" + localStorage.getItem("id_prodotto") + "'"
        },
        success: function (response) {
            var result = JSON.parse(response);
            var nome = result[0].nome;
            $("title").html(nome);
            $(".nome_prodotto").html(nome);
            $(".prezzo").prepend(result[0].prezzo);
            $(".immagine_prodotto").attr("src", result[0].url_immagine);
            $(".immagine_prodotto").attr("alt", nome);
            $(".linkCatProdotto").attr("id", result[0].categoria);
            $("#descrizione").prepend(result[0].descrizione);
        },
        error: function (request, error) {
            console.log("Error");
        }
    });

    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query.php",
        data: {
            select: "nome",
            table: "categorie_prodotti",
            where: "id='" + localStorage.getItem("cat_prodotto") + "'"
        },
        success: function (response) {
            var result = JSON.parse(response);
            var nome = result[0].nome;
            $(".linkCatProdotto").prepend(nome);

        },
        error: function (request, error) {
            console.log("Error");
        }
    });

    //Specifiche Tecniche
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query.php",
        data: {
            select: "*",
            table: "specifiche_tecniche",
            where: "id_prodotto='" + localStorage.getItem("id_prodotto") + "'"
        },
        success: function (response) {
            var result = JSON.parse(response);
            var righe = "";
            for (var name in result[0]) {
                var value = result[0][name];
                if (value != "" && name != "id_prodotto") {
                    var name2 = name.replace(/_/g, ' ');
                    righe += "<tr><td><b>" + name2.charAt(0).toUpperCase() + name2.slice(1) + "</b></td><td>" + value + "</td></tr>";
                }

            }

            $("#tabella-specifiche").append(righe);

        },
        error: function (request, error) {
            console.log("Error");
        }
    });


    //Smartlife compatibili
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query.php",
        data: {
            select: "id_smartlife",
            table: "prodotti_smartlife",
            where: "id_prodotto='" + localStorage.getItem("id_prodotto") + "'"
        },
        success: function (response) {
            var id_servizi = JSON.parse(response);
            var servizi = "";
            for (var i = 0; i < id_servizi.length; i++) {
                $.ajax({
                    method: "POST",
                    crossDomain: true,
                    url: "http://polidoriscibetta.altervista.org/php/query.php",
                    data: {
                        select: "*",
                        table: "smartlife",
                        where: "id='" + id_servizi[i].id_smartlife + "'"
                    },
                    success: function (response) {
                        var result = JSON.parse(response);
                        var el = "";
                        for (var j = 0; j < result.length; j++) {
                            el += "<td><div class='well well-sm' style='height:325px; width:300px;'><h3>" + result[j].nome + "</h3><br><h5>" + result[j].sottotitolo + "</h5><br><a class='linkSL' href='pagina_smartlife.html' id='" + result[j].id + "' data-categoria='" + result[j].id_categoria + "'><img src='" + result[j].thumbnail + "' class='img-responsive img-thumbnail' alt='" + result[j].nome + "'></a></div></td>";
                        }

                        $("#servizi").find("tr").append(el);
                    },
                    error: function (request, error) {
                        console.log("Error");
                    }
                });
            }


        },
        error: function (request, error) {
            console.log("Error");
        }
    });


    //Assistenza compatibili
    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "http://polidoriscibetta.altervista.org/php/query.php",
        data: {
            select: "id_assistenza",
            table: "prodotti_assistenza",
            where: "id_prodotto='" + localStorage.getItem("id_prodotto") + "'"
        },
        success: function (response) {
            var id_assistenza = JSON.parse(response);
            var assistenza = "";
            for (var i = 0; i < id_assistenza.length; i++) {
                $.ajax({
                    method: "POST",
                    crossDomain: true,
                    url: "http://polidoriscibetta.altervista.org/php/query.php",
                    data: {
                        select: "nome,tipo,id,id_categoria",
                        table: "assistenza",
                        where: "id='" + id_assistenza[i].id_assistenza + "'"
                    },
                    success: function (response) {
                        var ass = JSON.parse(response);
                        var el = "";
                        for (var j = 0; j < ass.length; j++) {
                            el += "<div class='col-sm-4'><a class='linkAssistenza link_assistenza " + ass[j].tipo.replace(/\s+/g, '') + "' href='pagina_assistenza.html' id='" + ass[j].id + "' data-categoria='" + ass[j].id_categoria + "'><div class='myWell'><p class='evidenza'>" + ass[j].nome + "</p></div></a></div>";
                        }

                        $("#assistenza").find(".row").append(el);
                    },
                    error: function (request, error) {
                        console.log("Error");
                    }
                });
            }


        },
        error: function (request, error) {
            console.log("Error");
        }
    });



    //Multiple images only available for smartphones
    if (localStorage.getItem("cat_prodotto") == 'smartphone' || localStorage.getItem("cat_prodotto") == 'outlet') {
        $.ajax({
            method: "POST",
            crossDomain: true,
            url: "http://polidoriscibetta.altervista.org/php/query.php",
            data: {
                select: "url, is_principale",
                table: "immagini_prodotto",
                where: "id_prodotto='" + localStorage.getItem("id_prodotto") + "'"
            },
            success: function (response) {
                var result = JSON.parse(response);
                if (result.length > 1) {
                    var icone = "";
                    for (var i = 0; i < result.length; i++) {
                        if(result[i].is_principale == 1){
                            
                        icone += "<img class='img-galleria img-galleria-selected' src='" + result[i].url + "' /> ";
                        }
                        else {
                            
                        icone += "<img class='img-galleria' src='" + result[i].url + "' /> ";
                        }
                    }

                    $("#galleria").append(icone);
                }

            },
            error: function (request, error) {
                console.log("Error");
            }
        });
    }
    
    $(document).on('click', '.img-galleria', function () {
                $("#immagine").attr("src", $(this).attr("src"));
                
                $(".img-galleria").each(function () {
                    $(this).removeClass("img-galleria-selected");
                });
        
                $(this).addClass("img-galleria-selected");
            });
});
