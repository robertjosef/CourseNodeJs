function obterusuario(callback, ) {
    setTimeout(function() {
        return callback (null, {
            id: 1, 
            nome: 'Robert', 
            dataNascimento:  new Date()
        })

    }, 1000)

}

function obtertelefone(idUsuario,callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '110980880',
            ddd: 11
        })
    },2000 );

}

function obterendereco(idUsuario,callback) {
    setTimeout(() => {
        return callback (null,{
            rua: 'teste',
            numero: 00
        })


    },200); 
}

function resolverusuario(erro, usuario){
    console.log('Usuário', usuario)
}

obterusuario(function resolverusuario(error, usuario){
    if(error){
        console.log('Deu Ruim no Usuário');
        return
    }
    obtertelefone(usuario.id, function resolvertelefone (error1, telefone) {
        if(error1){                      
            console.log('Deu Ruim no Telefone')
            return;
        }

        obterendereco(usuario.id, function resolverendereco (error2, endereco ){
            if(error2){
                console.log('Deu Ruim no Endereco')
                return;

            }
            console.log(`
            
            Nome: ${usuario.nome},
            Rua: ${endereco.rua}
            
            `)

    

        })

    })
   
})
