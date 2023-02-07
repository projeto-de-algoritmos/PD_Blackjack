**PD_BlackJack** 
#  Black Jack

**Número da Lista**: Dupla 4<br>
**Conteúdo da Disciplina**: Programação Dinâmica (Dynamic programming- PD)<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0028685  |  Victor Samuel dos Santos Lucas |
| 17/0115500  |  Vinícius Vieira de Souza |

## Sobre 
Este projeto retrada o jogo BlackJack ou Vinte e um, um jogo praticado com cartas em casinos em que o objetivo é ter mais pontos do que o adversário, mas sem ultrapassar os 21.

## Algorítmo 
Este projeto foi desenvolvido usando o algoritmo knapsack, o qual é responsável por gerar dicas a cada rodada informando quais cartas o usuário deve obter para conseguir vencer a partida.

## Regras do jogo
Algumas regras do jogo foram adaptadas, sendo elas: 
- Rei vale 13
- Rainha vale 12
- Valete vale 11 
- Ás vale 1

## Sobre o jogo
Neste jogo, o usuário irá jogar contra o Dealer, e quem chegar mais perto ou alcançar 21 vence. 

## Como jogar
O jogo possui 4 botões, sendo eles: 
- Iniciar: Inicia o jogo e sorteia duas cartas para o usuário e para o Dealer. 
- Pegar Carta: Pega mais uma carta do baralho e solicita uma dica gerada pelo algoritmo Knapsack. 
- Parar: Finaliza a rodada comaprando as cartas do usuário com as do Dealer, e quem estiver mais próximo sem ultrapassar 21 irá vencer.
- Resetar: Finaliza o jogo, e para o usuário iniciar uma nova rodada deve clicar em "INICIAR".

## Screenshots
### - PARTIDA 01 - RODADA 01
![screencapture-localhost-3000-2023-02-06-16_24_32](https://user-images.githubusercontent.com/52058094/217065882-30f5ca63-0219-48ec-937a-c2c38aa8e1ed.png)
A INICIAL

### - PARTIDA 01 - RODADA 02 
![screencapture-localhost-3000-2023-02-06-16_24_47](https://user-images.githubusercontent.com/52058094/217065939-2c908827-571f-4f68-bf60-fb85189438ef.png)

### - PARTIDA 01 - RODADA 03
![screencapture-localhost-3000-2023-02-06-16_24_59](https://user-images.githubusercontent.com/52058094/217065971-8fd5007a-dca6-4110-9ad9-9d6283b4878b.png)

### - PARTIDA 01 - RODADA 04 
![screencapture-localhost-3000-2023-02-06-16_25_12](https://user-images.githubusercontent.com/52058094/217066075-70550b42-afd2-439a-92dd-4ca8a503c927.png)

### - PARTIDA 02 
![screencapture-localhost-3000-2023-02-06-16_04_14 (1)](https://user-images.githubusercontent.com/52058094/217066226-ac84d24f-e071-4b09-b76b-0dfe817784ca.png)

### - PARTIDA 02
![screencapture-localhost-3000-2023-02-06-16_04_23 (1)](https://user-images.githubusercontent.com/52058094/217066260-67c69dca-4997-4bd1-833e-e2cbafb2a205.png)

### - PARTIDA 02 - FINAL - COMPARAÇÃO COM DELAER 
![screencapture-localhost-3000-2023-02-04-20_03_24](https://user-images.githubusercontent.com/52058094/217066298-8ff3fd7c-c5db-4de9-8774-fc85b8029a63.png)

## Instalação 
**Linguagem**:  Python (Backend) / Javascript (Frontend)<br>
**Framework**: Flask (Backend) / React (Frontend)<br>
Descreva os pré-requisitos para rodar o seu projeto e os comandos necessários.

### Requisitos:
- Python: Versão 3+
- Node: Versão 16+
- Npm: Versão 6+

## Uso 
### Passo 0:
No diretório raiz do projeto instale as dependências necessárias para o backend com: 
```sh
pip3 install -r backend/src/requirements.txt
```
### Passo 1:
No diretório raiz do projeto, execute:
```sh
export FLASK_APP=backend/src/app.py
```
### Passo 2:
Coloque o backend em execução com:
```sh
flask run
```
### Passo 3: 
Em outro terminal, abra o projeto no diretório /frontend e instale o pacote de dependências do frontend com:
```sh
npm install
```
### Passo 4:
Coloque o frontend em execução com:
```sh
npm start
```
### Passo 5:
Caso não abra automáticamente, para acessar a aplicação abra seu navegador no seguinte endereço: http://localhost:3000

## OBS:
- O backend e frontend fazem uso respectivamente das portas:  http://localhost:5000 e http://localhost:3000, dessa forma certifique-se de que estejam livres para rodar a aplicação.





