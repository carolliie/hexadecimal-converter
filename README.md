# hexadecimal-converter

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

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Github-pages setup


### Conclusão e Referências
