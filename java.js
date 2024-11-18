function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }
        
function mascara_cpf()
         { var cpf_formatado = document.getElementById("cpf").value

           if(cpf_formatado[3]!=".")
           {
              if(cpf_formatado[3]!=undefined)
              {
                 document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
      
              }
           }
           
         
           if(cpf_formatado[7]!=".")    
           {
             if(cpf_formatado[7]!=undefined)
             {
                 document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
             }
           }

           if(cpf_formatado[11]!="-")
           {
              if(cpf_formatado[11]!=undefined)
              {
                document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
              }
           }

    
        }

 // Modal e botões
    var modal = document.getElementById("myModal");
    var openModalBtn = document.getElementById("openModalBtn");
    var closeModalBtn = document.getElementsByClassName("close")[0];
    
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }
    
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Função para salvar os dados no localStorage
    document.getElementById("registrationForm").onsubmit = function(event) {
        event.preventDefault();

        var user = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            cpf: document.getElementById("cpf").value,
            senha: document.getElementById("senha").value
        };

        const usuario = {
            nome,
            email,
            telefone,
            cpf,
            senha
        };



        // Salvar dados no localStorage
        localStorage.setItem("userData", JSON.stringify(usuario));

        // Exibir mensagem de sucesso
        alert("Seu cadastro foi realizado!");

        // Fechar o modal e redirecionar para a página de perfil
        modal.style.display = "none";
        window.location.href = "index2.html";
    }

    // Puxando os dados do localStorage
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {
        // Preencher os dados no perfil
        document.getElementById("nomePerfil").textContent = usuario.nome;
        document.getElementById("emailPerfil").textContent = usuario.email;
        document.getElementById("telefonePerfil").textContent = usuario.telefone;
        document.getElementById("cpfPerfil").textContent = usuario.cpf;
    } 

        
        