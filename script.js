
$(document).ready(function () {

    $("#LoginAluno").submit(function (event) {

        if ($("#InputUsuario").val() == "root" && $("#InputUsuario1").val() == "1234") {
            $("#message").addClass("alert alert-success alert-dismissible fade show")
            $("#message").removeClass("alert-warning")
            $("#message").text("Usuário Logado!").show().fadeOut(5000)
        } else {
            $("#message").addClass("alert alert-warning alert-dismissible fade show")
            $("#message").removeClass("alert-success")
            $("#message").text("Usuário ou senha inválidos!").show().fadeOut(5000)
            event.preventDefault()
        }
    })
})