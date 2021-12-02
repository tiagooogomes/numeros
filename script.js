function submeterDados(){

    let primeiroValor = document.getElementById('primario').value;
    let segundoValor = document.getElementById('secundario').value;
    let terceiroValor = document.getElementById('terciario').value;
    let quartoValor = document.getElementById('quartenario').value;
    let primeiro = document.getElementById('primeiro');

    const listaDeValores =  new Array ();

    listaDeValores.push(primeiroValor, segundoValor, terceiroValor, quartoValor);

    primeiro.innerHTML = listaDeValores[0];
    segundo.innerHTML = listaDeValores[1];
    terceiro.innerHTML = listaDeValores[2];
    quarto.innerHTML = listaDeValores[3];

    // console.log(listaDeValores[2]);
}

function inverterDados(){

    let primeiroValor = document.getElementById('primario').value;
    let segundoValor = document.getElementById('secundario').value;
    let terceiroValor = document.getElementById('terciario').value;
    let quartoValor = document.getElementById('quartenario').value;
    let primeiro = document.getElementById('primeiro');

    const listaDeValores =  new Array ();

    listaDeValores.push(primeiroValor, segundoValor, terceiroValor, quartoValor);

    primeiro.innerHTML = listaDeValores[3];
    segundo.innerHTML = listaDeValores[2];
    terceiro.innerHTML = listaDeValores[1];
    quarto.innerHTML = listaDeValores[0];

    // console.log(listaDeValores[2]);
}

function ordenarDados(){

    let primeiroValor = document.getElementById('primario').value;
    let segundoValor = document.getElementById('secundario').value;
    let terceiroValor = document.getElementById('terciario').value;
    let quartoValor = document.getElementById('quartenario').value;
    let primeiro = document.getElementById('primeiro');

    const listaDeValores =  new Array ();

    listaDeValores.push(primeiroValor, segundoValor, terceiroValor, quartoValor);



    if(primeiroValor < segundoValor && primeiroValor < terceiroValor && primeiroValor < quartoValor){

        primeiro.innerHTML = listaDeValores[0];

        if(segundoValor < terceiroValor && segundoValor < quartoValor){

            segundo.innerHTML = listaDeValores[1];

            if(terceiroValor < quartoValor){

                terceiro.innerHTML = listaDeValores[2];
                quarto.innerHTML = listaDeValores[3];

            }else if(terceiroValor > quartoValor){

                terceiro.innerHTML = listaDeValores[3];
                quarto.innerHTML = listaDeValores[2];
            }
    
        }else if(terceiroValor < segundoValor && terceiroValor < quartoValor){

            segundo.innerHTML = listaDeValores[2];

            if(segundoValor < quartoValor){

                terceiro.innerHTML = listaDeValores[1];
                quarto.innerHTML = listaDeValores[3];

            }else if(segundoValor > quartoValor){

                terceiro.innerHTML = listaDeValores[3];
                quarto.innerHTML = listaDeValores[1];
            }

        }else if(quartoValor < segundoValor && quartoValor < terceiroValor){

            segundo.innerHTML = listaDeValores[3];

            if(segundoValor < terceiroValor){

                terceiro.innerHTML = listaDeValores[1];
                quarto.innerHTML = listaDeValores[2];

            }else if(segundoValor > terceiroValor){

                terceiro.innerHTML = listaDeValores[2];
                quarto.innerHTML = listaDeValores[1];
            }
        }


    }else if(segundoValor < primeiroValor && segundoValor < terceiroValor && segundoValor < quartoValor){

        primeiro.innerHTML = listaDeValores[1];
            
        if(primeiroValor < terceiroValor && primeiroValor < quartoValor){

            segundo.innerHTML = listaDeValores[0];

            if(terceiroValor < quartoValor){

                terceiro.innerHTML = listaDeValores[2];
                quarto.innerHTML = listaDeValores[3];

            }else  if(terceiroValor > quartoValor){

                terceiro.innerHTML = listaDeValores[3];
                quarto.innerHTML = listaDeValores[2];
            }
               
        }else if(terceiroValor < primeiroValor && terceiroValor < quartoValor){

            segundo.innerHTML = listaDeValores[2];

            if(primeiroValor < quartoValor){

                terceiro.innerHTML = listaDeValores[0];
                quarto.innerHTML = listaDeValores[3];
            }else if(primeiroValor > quartoValor){

                terceiro.innerHTML = listaDeValores[3];
                quarto.innerHTML = listaDeValores[0];
            }

        }else if(quartoValor < terceiroValor && quartoValor < primeiroValor){

            segundo.innerHTML = listaDeValores[3];

            if(terceiroValor < primeiroValor){

                terceiro.innerHTML = listaDeValores[2];
                quarto.innerHTML = listaDeValores[0];
            }else if(terceiroValor > primeiroValor){

                terceiro.innerHTML = listaDeValores[0];
                quarto.innerHTML = listaDeValores[2];
            }            
        }



    }else if(terceiroValor < primeiroValor && terceiroValor < segundoValor && terceiroValor < quartoValor){

        primeiro.innerHTML = listaDeValores[2];
        
        if(primeiroValor < segundoValor && primeiroValor < quartoValor){

            segundo.innerHTML = listaDeValores[0];

            if(segundoValor < quartoValor){

                terceiro.innerHTML = listaDeValores[1];
                quarto.innerHTML = listaDeValores[3];
            }else if(segundoValor > quartoValor){

                terceiro.innerHTML = listaDeValores[3];
                quarto.innerHTML = listaDeValores[1];
            }
             
        }else if(segundoValor < primeiroValor && segundoValor < quartoValor){

            segundo.innerHTML = listaDeValores[1];

            if(primeiroValor < quartoValor){

                terceiro.innerHTML = listaDeValores[0];
                quarto.innerHTML = listaDeValores[3];
            }else if(primeiroValor > quartoValor){

                terceiro.innerHTML = listaDeValores[3];
                quarto.innerHTML = listaDeValores[0];
            }


        }else if(quartoValor < primeiroValor && quartoValor < segundoValor){

            segundo.innerHTML = listaDeValores[3];

            if(primeiroValor < segundoValor){

                terceiro.innerHTML = listaDeValores[0];
                quarto.innerHTML = listaDeValores[1];
            }else if(primeiroValor > segundoValor){

                terceiro.innerHTML = listaDeValores[1];
                quarto.innerHTML = listaDeValores[0];
            }
        }


    }else if(quartoValor < primeiroValor && quartoValor < segundoValor && quartoValor < terceiroValor){

        primeiro.innerHTML = listaDeValores[3];
        
        if(primeiroValor < segundoValor && primeiroValor < terceiroValor){

            segundo.innerHTML = listaDeValores[0];

            if(segundoValor < terceiroValor){

                terceiro.innerHTML = listaDeValores[1];
                quarto.innerHTML = listaDeValores[2];
            }else if(segundoValor > terceiroValor){

                terceiro.innerHTML = listaDeValores[2];
                quarto.innerHTML = listaDeValores[1];
            }

        }else if(segundoValor < terceiroValor && segundoValor < primeiroValor){

            segundo.innerHTML = listaDeValores[1];

            if(terceiroValor < primeiroValor){

                terceiro.innerHTML = listaDeValores[2];
                quarto.innerHTML = listaDeValores[0];
            }else if(terceiroValor > primeiroValor){

                terceiro.innerHTML = listaDeValores[0];
                quarto.innerHTML = listaDeValores[2];
            }


        }else if(terceiroValor < primeiroValor && terceiroValor < segundoValor){

            segundo.innerHTML = listaDeValores[2];

            if(primeiroValor < segundoValor){

                terceiro.innerHTML = listaDeValores[0];
                quarto.innerHTML = listaDeValores[1];
            }else if(primeiroValor > segundoValor){

                terceiro.innerHTML = listaDeValores[1];
                quarto.innerHTML = listaDeValores[0];
            }  

        }

    }
     

    








    // primeiro.innerHTML = listaDeValores[0];
    // segundo.innerHTML = listaDeValores[1];
    // terceiro.innerHTML = listaDeValores[2];
    // quarto.innerHTML = listaDeValores[3];

    // console.log(listaDeValores[2]);
}