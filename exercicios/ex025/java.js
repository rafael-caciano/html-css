function calcIdade() {
    function calcIdade(){
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var idade = anoAtual - anoDeNascimento;
        return idade;
    }
}