var 
        player,
        ePlayer,
        IA,
        eIA,
        vencedor,
        pPlayer = 0,
        pIA = 0;
    
/*Quando o jogador escolher a Pedra essa função sera executada, adicionando o valor "pedra" as variaveis player e ePlayer, 
depois será gerado o número aleatório de 1 a 3 para a CPU escolher um dos personagens. Após isso o resultado será printado na tela*/
	function pedra(){
        
		player = "pedra";
        ePlayer = "Pedra";
        
        var eIA = Math.round(Math.random() * 2); //Gera o numero aleatorio de 1 a 3
        
        if(eIA == 0){
            IA = "pedra";
            eIA = "Pedra";
        }
        else if(eIA == 1){
            IA = "papel";
            eIA = "Papel";
        }else if(eIA == 2){
            IA = "tesoura";
            eIA = "Tesoura"
            }
        
		result = compara(player,IA);
        document.getElementById("ePlayer").innerHTML = ePlayer;
        document.getElementById("eIA").innerHTML = eIA;
        
        if(result == "VCganhou"){
            document.getElementById("ePlayer").classList.add('wpn-win');
            document.getElementById("win").classList.add('win-1');
            document.getElementById("win2").classList.remove("win-2");
            document.getElementById("eIA").classList.remove("wpn-win2");
        }else if(result == "IAganhou"){
            document.getElementById("eIA").classList.add('wpn-win2');
            document.getElementById("win2").classList.add('win-2');
            document.getElementById("win").classList.remove("win-1");
            document.getElementById("ePlayer").classList.remove("wpn-win");
        }else if(result == "empate"){
            document.getElementById("ePlayer").classList.add('wpn-win');
            document.getElementById("eIA").classList.add('wpn-win2');
            document.getElementById("win").classList.remove("win-1");
            document.getElementById("win2").classList.remove("win-2");
        }
        
        document.getElementById("ptPlayer").innerHTML = pPlayer;
        document.getElementById("ptIA").innerHTML = pIA;
	}

/*Quando o jogador escolher a Papel essa função sera executada, adicionando o valor "papel" as variaveis player e ePlayer, 
depois será gerado o número aleatório de 1 a 3 para a CPU escolher um dos personagens. Após isso o resultado será printado na tela*/
	function papel(){
        
		player = "papel";
        ePlayer = "Papel";
        
        var eIA = Math.round(Math.random() * 2); //Gera o numero aleatorio de 1 a 3
        
        if(eIA == 0){
            IA = "pedra";
            eIA = "Pedra";
        }
        else if(eIA == 1){
            IA = "papel";
            eIA = "Papel";
        }else if(eIA == 2){
            IA = "tesoura";
            eIA = "Tesoura"
            }
        
		result = compara(player,IA);
        document.getElementById("ePlayer").innerHTML = ePlayer;
        document.getElementById("eIA").innerHTML = eIA;
        
        if(result == "VCganhou"){
            document.getElementById("ePlayer").classList.add('wpn-win');
            document.getElementById("win").classList.add('win-1');
            document.getElementById("win2").classList.remove("win-2");
            document.getElementById("eIA").classList.remove("wpn-win2");
        }else if(result == "IAganhou"){
            document.getElementById("eIA").classList.add('wpn-win2');
            document.getElementById("win2").classList.add('win-2');
            document.getElementById("win").classList.remove("win-1");
            document.getElementById("ePlayer").classList.remove("wpn-win");
        }else if(result == "empate"){
            document.getElementById("ePlayer").classList.add('wpn-win');
            document.getElementById("eIA").classList.add('wpn-win2');
            document.getElementById("win").classList.remove("win-1");
            document.getElementById("win2").classList.remove("win-2");
        }
        
        document.getElementById("ptPlayer").innerHTML = pPlayer;
        document.getElementById("ptIA").innerHTML = pIA;
	}

/*Quando o jogador escolher a Tesoura essa função sera executada, adicionando o valor "tesoura" as variaveis player e ePlayer, 
depois será gerado o número aleatório de 1 a 3 para a CPU escolher um dos personagens. Após isso o resultado será printado na tela*/
	function tesoura(){
        
		player = "tesoura";
        ePlayer = "Tesoura";
        
        var eIA = Math.round(Math.random() * 2); //Gera o numero aleatorio de 1 a 3
        
        if(eIA == 0){
            IA = "pedra";
            eIA = "Pedra";
        }
        else if(eIA == 1){
            IA = "papel";
            eIA = "Papel";
        }else if(eIA == 2){
            IA = "tesoura";
            eIA = "Tesoura"
        }
        
		result = compara(player,IA);
        document.getElementById("ePlayer").innerHTML = ePlayer;
        document.getElementById("eIA").innerHTML = eIA;
        
        if(result == "VCganhou"){
            document.getElementById("ePlayer").classList.add('wpn-win');
            document.getElementById("win").classList.add('win-1');
            document.getElementById("win2").classList.remove("win-2");
            document.getElementById("eIA").classList.remove("wpn-win2");
        }else if(result == "IAganhou"){
            document.getElementById("eIA").classList.add('wpn-win2');
            document.getElementById("win2").classList.add('win-2');
            document.getElementById("win").classList.remove("win-1");
            document.getElementById("ePlayer").classList.remove("wpn-win");
        } else if(result == "empate"){
            document.getElementById("ePlayer").classList.add('wpn-win');
            document.getElementById("eIA").classList.add('wpn-win2');
            document.getElementById("win").classList.remove("win-1");
            document.getElementById("win2").classList.remove("win-2");
        }
        
        document.getElementById("ptPlayer").innerHTML = pPlayer;
        document.getElementById("ptIA").innerHTML = pIA;
	}
	
	
/*Funcao responsavel por verificar quem foi o vencedor, comparando a resposta do player e da cpu*/
function compara(op1, op2){

	if(op1 == op2){
        pIA = pIA;
        pPlayer = pPlayer;
		return("empate");
	}
	
	if(op1 == "pedra"){
		if(op2 == "papel"){
            pIA++; //Incrementa os pontos da CPU
			return("IAganhou");
		}
	}else if(op1 == "papel"){
		if(op2 == "pedra"){
            pPlayer++; //Incrementa os pontos do Player
            return("VCganhou");
		}
	}
	
	if(op1 == "papel"){
		if(op2 == "tesoura"){
            pIA++; //Incrementa os pontos da CPU
			return("IAganhou");
		}
	}else if(op1 == "tesoura"){
		if(op2 == "papel"){
            pPlayer++; //Incrementa os pontos do Player
            return("VCganhou");
		}
	}
	
	if(op1 == "tesoura"){
		if(op2 == "pedra"){
            pIA++; //Incrementa os pontos da CPU
			return("IAganhou");
		}
	}else if(op1 == "pedra"){
		if(op2 == "tesoura"){
            pPlayer++; //Incrementa os pontos do Player
		    return("VCganhou");
		}
	}
}