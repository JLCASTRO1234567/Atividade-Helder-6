class ValidarCadastro {
    validarNome(nome){
        const regex = /^.{3,}$/

        if (regex.test(nome) == false){
            console.log("ERRO!!! nome de usuário deve conter pelo menos três caracteres!")
        }else{
            console.log(`Nome do usuario "${nome}" aceito!!!`)
        }
    }




    validarEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (regex.test(email) == false){
            console.log("Email inválido!!!!!")
        }else{
            console.log("Email valído!")
        }
    }




    validarSenha(senha){
        const regex = /^.{8,}$/

        if (regex.test(senha) == false){
            console.log("Senha indefinida!!!! ela deve conter pelo menos 8 caracteres!")
        }else{
            console.log("Senha definida!")
        }
    }
}




let usuarioNome = new ValidarCadastro()
usuarioNome.validarNome("bill")

let usuarioEmail = new ValidarCadastro()
usuarioEmail.validarEmail("borabill@ifms.edu.br")

let usuarioSenha = new ValidarCadastro()
usuarioSenha.validarSenha("SeNha123")