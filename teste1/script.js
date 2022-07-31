var tam = false;

var colors = 1

var colorN = new Number(colors);


function mudarcolor() {
    var cor = document.getElementById('cores').value;
    document.getElementById('bloco').style.background = cor;
    document.getElementById('colorlabel').style.background = cor
    $("#mov").text('cor alterada para ' + cor).css({'font-size': '15px'})
}

$("#aum").click(function() {
    if (tam == false) {
        $("#bloco").animate({
            width: "300px",
            height: "300px"
        })
        $("#mov").text('Aumentou').css({fontSize: "20px"})
        $("#aum").text('diminuir')
        return tam = true
    } else {
        $("#bloco").animate({
            width: "200px",
            height: "200px"
        })
        $("#mov").text('Diminuiu').css({fontSize: "20px"})
        $("#aum").text('aumentar')
        return tam = false
    }
})
$("#dir").click(function() {
    $("#bloco").animate({
        marginLeft: "+=50px"
    })
    $("#mov").text('→').css({fontSize: "50px"})
})
$("#esq").click(function() {
    $("#bloco").animate({
        marginLeft: "-=50px"
    })
    $("#mov").text('←').css({fontSize: "50px"})
})
$("#baixo").click(function() {
    $("#bloco").animate({
        marginTop: "+=50px"
    })
    $("#mov").text('↓').css({fontSize: "50px"})
})
$("#cima").click(function() {
    $("#bloco").animate({
        marginTop: "-=50px"
    })
    $("#mov").text('↑').css({fontSize: "50px"})
})

