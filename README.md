<!-- Logotipo -->
<div align="center">
   <img src="./Assets/logo.png"/>
</div>

<!-- Title -->
<h1 align="center">Seven Coders - DevRiseWeek</h1>

<!-- Subtitle -->
<h2 align="center"> Projeto : Find Houses 🏘️ </h2>

| Data  | Programação               | Status |
| ----- | ------------------------- | ------ |
| 24/03 | Conhecendo o Projeto      | ✔️      |
| 25/03 | Arquitetura Atomic        | ✔️      |
| 26/03 | Lista de Imóveis via API  | 📺      |
| 27/03 | Navegação e Estado Global | 🚧      |
| 28/03 | Finalizando a Aplicação   | 🚧      |

<!-- Badges -->
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brunoemferreira/DevRiseWeek?color=%2304D361?style=flat-square">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunoemferreira/DevRiseWeek?style=flat-square">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunoemferreira/DevRiseWeek?style=flat-square">
</p>

<!-- Sobre o Projeto -->
<a id="sobre-o-projeto"></a>
## 🚀 Sobre o Projeto
O projeto desenvolvido é um App Mobile de busca de imóveis utilizando a api da [Realtor](https://www.realtor.com/) com ele é possível, filtrar imóveis por tamanho, preço, quantidade de quartos e banheiros é possível uma busca por localização do imóvel sendo a mesma utilizando autocomplete, há também a exibição dos dados do imóvel com a imagem do mesmo, opção de contatar o anunciante do imóvel e fazer marcações de seus imóveis favoritos.   

<a id="funcionalidades"></a>
### ✅ Funcionalidades 
- [X] Splash Screen 
- [ ] Listagem de Imóveis ( com informações e imagem )
- [ ] Busca de imóveis por localização com autocomplete
- [ ] Opções de Filtragem :
  - [ ] Tamanho ( Mínimo / Máximo )
  - [ ] Preço ( Mínimo / Máximo )
  - [ ] Quartos ( Mínimo )
  - [ ] Banheiros ( Mínimo )  
- [ ] Detalhes do Imóvel
- [ ] Opção de Contatar o anunciante
- [ ] Opção de Colocar o imóvel como favorito

<a id="imagens-do-projeto"></a>
## 🖼️ Imagens do Projeto

<div align="center">
   <img src="./Assets/SplashScreen.png"/>
</div>

<a id="tecnologias-e-bibliotecas"></a>
## 🧰 Tecnologias e Bibliotecas
* [React Native](https://reactnative.dev/)
  * [Styled Components]()
  * [React Native Vector Icons]()
  * [Axios]()
  * [React Native DotEnv]()
  * [StoryBook]()
* [Google Fonts - Montserrat Font]()

<a id="configurações"></a>
## ☑️ Configurações
É necessário se registrar no site da [Rapid API](https://rapidapi.com/) para ter acesso a documentação da API da [Realtor](https://www.realtor.com/) e a sua chave para validação e consulta da API.

Após o Registro no [Rapid API](https://rapidapi.com/) faça uma busca procurando pela palavra [Realtor](https://www.realtor.com/) assim você receberá como resultado a página da documentação e configuração da API [Realtor](https://www.realtor.com/) : 

Selecione esse Resultado da Busca :

<img src="./assets/apirealtor.png"/>

Então será aberto a página com toda a documentação disponível e como pode ser configurada a api, se atente as informações que estão na Aba Code Snipets, aqui se encontram a sua chave de validação da API e as configurações necessárias para as requisições que devem ser informadas no header, como exemplo abaixo : 

```javascript
req.headers({
	"x-rapidapi-key": AQUI FICA A SUA CHAVE DE VALIDAÇÃO,
	"x-rapidapi-host": "realtor.p.rapidapi.com",
	"useQueryString": true
});

```
Atento a estas informações acima, elas serão muito importantes para a configuração do arquivo **.env** que conterá as suas informações de acesso e utilização da API :

```env
API_URL=https://realtor.p.rapidapi.com
XRAPIDAPIKEY=AQUI FICA A SUA CHAVE DE VALIDAÇÃO
XTAPIDAPIHOST=realtor.p.rapidapi.com
```

<a id="links-úteis"></a>
### 🔗 Links Úteis
* [Rapid API](https://rapidapi.com/) - Documentação para Utilização da API da Realtor.com 
* [Realtor.com](https://www.realtor.com/) - Site de Venda e Aluguel de imóveis nos Estados Unidos.

<a id="rodando-o-projeto"></a>
## ⚙️ Rodando o Projeto
> Antes de Rodar o projeto é necessário fazer todo o processo de configuração mencionado anteriormente.
```bash
# Clone este repositório para a pasta anterior
$ git clone https://github.com/brunoemferreira/DevRiseWeek.git
# ou use a opção de download.

# Acesse a pasta dtmoney
$ cd FindHouses

# Instale as dependências
$ yarn install
ou
$ npm install

# Execute este comando para linkar os assets a aplicação
$ yarn link

# Executando o Projeto
$ yarn android 

# Caso necessite em algum momento remover o cache do app utilize o comando abaixo
$ react-native start --reset-cache

```
## 📋 Referências


---