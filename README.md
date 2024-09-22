## Cartão de Visita - React Native

Este é um aplicativo simples de cartão de visita desenvolvido com React Native. Ele permite que o usuário visualize informações de perfil e de negócios, capture a tela do cartão e compartilhe com outros usuários através de várias plataformas.

## Funcionalidades

- Exibição de informações de perfil e contato.
- Captura de tela do cartão de visita.
- Compartilhamento da captura através de redes sociais ou outros aplicativos.
- Design responsivo e consistente com o tema do dispositivo.


## Dependências

- [React Native 0.75](https://reactnative.dev/)
- [@react-native-community/cli](https://github.com/react-native-community/cli).
- [Node](https://nodejs.org/pt)

Projeto criado com React Native CLI (sem uso do framework Expo)

- [React Native Paper](https://reactnativepaper.com/)
  - [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

React Native Paper - Biblioteca de componentes UI, baseada no Material Desisgn (Design System mantido pelo Google), para o React Native
React Native Vector Icons - Biblioteca de ícones que é utilizada no React Native Paper

- [React Native QR Code Skia](https://github.com/enzomanuelmangano/react-native-qrcode-skia)
  - [React Native Skia](https://shopify.github.io/react-native-skia/)

Funcionalidade para exibir um QR Code foi construído com a biblioteca React Native QR Code Skia

- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context#readme)

Biblioteca que fornece informações das safe areas dos dispositivos. Utilizada para evitar quebra do layout em dispositivos com safe area (câmeras e demais cortes na tela)

- [React Native View Shot](https://github.com/gre/react-native-view-shot)
- [React Native Share](https://github.com/react-native-share/react-native-share)

Bibliotecas utilizadas para captura da tela e compartilhamento da imagem capturada

- [Fonte Nexa](https://www.dafont.com/nexa.font)

Utilizada font Nexa para tipografia

## Dependências de desenvolvimento

- [Typescript](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org/)
- [Jest](https://jestjs.io/pt-BR/)

Bibliotecas de desenvolvimento

## Como Rodar o Projeto

### Pré-requisitos

- Node.js e npm/yarn instalados.
- React Native CLI configurado.
- Emulador Android ou dispositivo iOS/Android configurado.

### Passos para Rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/Eliane-orlandin/CartaoDeVisita.git
   ```

2. Instale as dependências:

   ```bash
   cd seu-repositorio
   npm install
   ```

3. Execute o projeto:

   Para iOS:
   ```bash
   npx react-native run-ios
   ```

   Para Android:
   ```bash
   npx react-native run-android
   ```

## Estrutura do Projeto

- `App.tsx`: Arquivo principal do aplicativo, que contém a lógica da interface e funcionalidades.
- `components/Avatar.tsx`: Componente para renderização do avatar.
- `components/FABGroup.tsx`: Componente para o botão de ação flutuante.
- `constants/index.ts`: Arquivo com constantes relacionadas ao perfil e aos negócios.
- `assets/`: Diretório de recursos estáticos como imagens.


## Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias e novas funcionalidades.


---



