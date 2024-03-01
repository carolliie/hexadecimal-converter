# hexadecimal-converter

<img loading="lazy" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img loading="lazy" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img loading="lazy" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img loading="lazy" src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img loading="lazy" src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white"/> 
<img loading="lazy" src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"/>


Este repositório foi criado para publicação de um conversor de número hexadecimal/binário para decimal. Feito em React, com a linguagem Javascript, o projeto foi desenvolvido como forma de avaliação para a matéria de laboratório de programação.

### Conversão Hexadecimal

A conversão hexadecimal é amplamente utilizada na programação e ciência da computação como uma forma mais compacta e legível de representar números binários. Hexadecimal é uma base-16, o que significa que utiliza 16 símbolos para representar valores, de 0 a 9 e de A a F (onde A representa 10, B representa 11, e assim por diante). Cada dígito hexadecimal é equivalente a quatro dígitos binários, facilitando a representação e leitura de grandes números binários.

#### Principais Usos da Conversão Hexadecimal:

Representação de Endereços de Memória: Em programação de baixo nível, como na linguagem de montagem, os endereços de memória são frequentemente expressos em hexadecimal para facilitar a leitura e manipulação.

Cores em Computação Gráfica e Web: No formato RGB, as cores são frequentemente representadas como valores hexadecimais. Cada componente (vermelho, verde, azul) varia de 00 a FF, proporcionando uma gama mais extensa de cores em comparação com a notação decimal.

Identificação de Bytes e Octetos: Em redes e protocolos de comunicação, endereços MAC, números de IP e outras informações são frequentemente apresentados em formato hexadecimal.

Chaves e Hashes Criptográficos: Algoritmos criptográficos muitas vezes geram ou manipulam chaves, hashes ou identificadores únicos em formato hexadecimal.

### Conversão Binária

A conversão binária é a representação de números usando apenas os dígitos 0 e 1. Ela é a base fundamental do sistema de numeração utilizado pelos computadores, que operam em linguagem de máquina utilizando bits (0s e 1s). A conversão binária é essencial para entender o funcionamento interno dos computadores, como processadores realizam operações lógicas e arquivos são armazenados em formato binário.

#### Principais Usos da Conversão Binária

Linguagem de Máquina: Todas as instruções executadas por um processador são representadas em linguagem de máquina, que utiliza código binário para indicar operações e operandos.

Sistema de Armazenamento Digital: Dados em computadores são armazenados em formato binário, seja em arquivos, bancos de dados ou em unidades de armazenamento como discos rígidos e SSDs.

Redes de Computadores: Na comunicação entre dispositivos em redes, a informação é frequentemente transmitida em forma de pacotes binários, onde 0s e 1s representam bits de dados.

Operações Lógicas e Booleanas: A lógica binária é fundamental em operações lógicas, álgebra booleana e design de circuitos digitais.

### Programação funcional x Programação funcional com React

A programação funcional busca a transparência referencial, permitindo substituir uma expressão por seu valor sem alterar o comportamento do programa. Essa abordagem é suportada por linguagens como Haskell, Lisp, Scala e outras, mas também pode ser aplicada em linguagens de propósito geral como JavaScript e Python.

O paradigma de programação funcional com React refere-se à aplicação de conceitos e práticas da programação funcional ao desenvolver aplicações usando o framework para Web. Embora React não seja um framework com linguagem de programação funcional pura, ele incorpora e encoraja certos princípios dessa abordagem.

O projeto tem como base as definições de programação com o paradigma funcional, sendo os principais conceitos aplicados: <a href="">Funções Anônimas (Lambda)</a>, <a href="">First-Class e Higher-Order Functions</a>, <a href="">e Composição de Funções</a>.

## O que seria React?

React é uma biblioteca JavaScript de código aberto mantida pelo Facebook e por uma comunidade de desenvolvedores. É comumente usada para criar interfaces de usuário (UI) interativas e reativas para aplicativos web. 

O React permite que os desenvolvedores construam componentes reutilizáveis que gerenciam seu próprio estado e podem ser compostos para criar interfaces de usuário complexas. 

Uma das características marcantes do React é a virtual DOM, que permite atualizações eficientes da interface do usuário, melhorando o desempenho das aplicações.

## Código

O código deste projeto é um componente React que cria um formulário de conversão entre números binários, hexadecimais e decimais. 

O componente exibe campos de entrada para o número binário ou hexadecimal, permite a seleção do tipo de número a ser convertido (binário ou hexadecimal) por meio de um menu suspenso (dropdown), e exibe o resultado da conversão em formato decimal.

#### Vamos entender as principais partes do código:

#### useState:

São utilizados hooks useState para criar quatro estados (binario, hexadecimal, decimal, selectedOption) que mantêm o estado atual dos campos de entrada e a opção selecionada.

#### handleOptionChange:

Esta função é chamada quando a opção no menu suspenso é alterada, atualizando o estado selectedOption com o valor selecionado.
converter:

A função converter é acionada quando o botão "Converter" é clicado. Ela verifica qual tipo de conversão deve ser realizada (binário para decimal ou hexadecimal para decimal) e chama a função correspondente (binarioConverter ou hexadecimalConverter).

#### hexadecimalConverter e binarioConverter:

Estas funções convertem números hexadecimais e binários para decimais, respectivamente. O resultado da conversão é armazenado no estado decimal.

#### JSX (HTML dentro do JavaScript):

O código JSX renderiza os elementos do formulário, incluindo o título, o menu suspenso, os campos de entrada e o botão "Converter". Dependendo da opção escolhida (selectedOption), o componente renderiza um campo de entrada para binário ou hexadecimal.

#### Resultados e readOnly:

O resultado da conversão é exibido em um campo de entrada de texto com a propriedade readOnly para impedir a edição direta pelo usuário.

#### +++

Além disso, outros componentes também foram utilizados para serem renderizados na tela. Como o Footer, que possui o Copyright e o ano atual.


## React-setup



## Github-pages setup

A página web está disponível para acesso por meio de um deploy feito no GitHub Pages.

O GitHub Pages é um serviço oferecido pelo GitHub que possibilita a hospedagem gratuita de sites estáticos diretamente a partir de repositórios Git. 

Ele permite que desenvolvedores publiquem documentações, projetos pessoais, portfólios, páginas de documentação, blogs e outros conteúdos web de maneira simples e acessível, utilizando o próprio GitHub como plataforma de hospedagem. 

As páginas são servidas a partir do domínio username.github.io ou de um domínio customizado, facilitando a exposição e compartilhamento de projetos online.

### Setup

Projetos simples, que contenham apenas Javascript, HTML e CSS, podem ser publicados com apenas o setup feito com o repositório.

Branch -> Settings -> Pages -> Depoly from a branch

### Setup para aplicação React

Para o setup deste projeto, por possuir o framework React, foi necessário outra forma de configuração do GitHub Pages para o deploy da página web.

#### Início

Para criar a aplicação React, é necessário o comando `create-react-app`, o qual desenvolve um projeto-base.

Para a publicação do website no Github Pages, instala-se o `gh-pages`, um pacote npm utilizado para fazer deploy no serviço web do Github.

#### Requisitos

<ul>
    <li>Possuir node e npm instalados</li>
    <li>Ter o Git instalado</li>
    <li>Conta no Github</li>
</ul>

#### Etapas

1. Crie um repositório no Github
</br>
2. Crie um projeto React com </br>`npx create-react-app`
</br>
3. Entre na pasta criada
</br>
4. Instale o gh-pages (pacote npm) com </br>`$ npm install gh-pages --save-dev`
</br>
5. Adicione a propriedade `homepage` no `package.json` </br> Neste formato: 
  `"name": "my-app",`
  `"version": "0.1.0",`
 `"homepage": "https://{username}.github.io/{nome-do-repositorio}",`
  `"private": true,`
</br>
6. Adicione um script de deploy no arquivo `package.json`</br> <ul><li>Insira uma propriedade de `predeploy` e uma propriedade de `deploy` nos scripts.</li><ul> </br> Neste formato:
`"scripts": {`
`"predeploy": "npm run build",`   
`"deploy": "gh-pages -d build",`   
`"start": "react-scripts start",`    
`"build": "react-scripts build",`    
</ul>
</br>
7. Adicione um "remote" que aponte para o repositório Github </br> $ `git remote add origin https://github.com/{username}/{repo-name}.git`
</br>
8. Deploy do app React no GitHub Pages </br> `$ npm run deploy` ou </br> `$ npm run deploy -- -m "Deploy React app to GitHub Pages"`
</br>

#### Fim!

Assim, o GitHub Pages vai detectar automaticamente os commits publicados pela branch gh-pages do repositrio.

Lembre-se de mudar a branch, na área "Pages" do Github. Para a página web funcionar normalmente. Ao contrário, apenas o README.md será mostrado.

Ao detectar a branch, irá acontecer a distribuição do projeto React para qualquer um visitar, seguindo a URL homepage especificada no `package.json`.

Para instalação melhor explicada e exemplos, confira este tutorial: <a href="https://blog.logrocket.com/deploying-react-apps-github-pages/">Deploying React apps to GitHub Pages</a>

### Conclusão e Referências

Em conclusão, este projeto oferece um conversor de números hexadecimais/binários para decimais, desenvolvido em React, utilizando conceitos de programação funcional. Ele explora a importância da conversão hexadecimal e binária na programação, destacando seus usos comuns. 

Além disso, o código inclui uma configuração para o GitHub Pages, permitindo a fácil hospedagem do aplicativo web. O projeto combina elementos de programação funcional, React e GitHub Pages para criar uma aplicação útil e acessível. 

Para informações detalhadas sobre o setup e implementação, consulte as referências fornecidas.

#### Links e vídeos

<a href="https://www.theserverside.com/tip/Binary-and-hexadecimal-numbers-explained-for-developers">_Binary and hexadecimal numbers explained for developers_</a> By Bob Reselman

<a href="https://create-react-app.dev/docs/getting-started">_Create React App_ </a> by Facebook Open Source

<a href="https://blog.logrocket.com/deploying-react-apps-github-pages/">_Deploying React apps to GitHub Pages_</a> by Nelson Michael