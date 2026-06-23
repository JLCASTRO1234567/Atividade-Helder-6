class Aluno {
    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}




class CadastroAluno {
     static validar(aluno){
        const regexNome = /^\w{3,}$/
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const regexSenha = /^(?=.*\d).{8,}$/
        
        if (regexNome.test(aluno.nome) == false || regexEmail.test(aluno.email) == false || regexSenha.test(aluno.senha) == false){
            console.log("Nome, email ou senha são inválidos!!! tente novamente!")
            console.log(regexNome.test(aluno.nome))
            console.log(regexEmail.test(aluno.email))
            console.log(regexSenha.test(aluno.senha))
        }else{
            console.log("Os Dados inseridos são válidos!")
        }
    }




    static salvar(aluno){
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve("Aluno cadastrado com sucesso!!!")
            }, 3000)
        })   
    }
}




let aluno1 = new Aluno("Bill", "borabill@ifms.edu.br", "SeNha123")
CadastroAluno.validar(aluno1)