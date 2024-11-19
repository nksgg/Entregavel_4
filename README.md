# Testes em JavaScript com Jest

Este repositório contém exemplos de funções em JavaScript e seus respectivos testes utilizando a biblioteca Jest.

## Pré-requisitos

Antes de executar os testes, você precisa ter o **Node.js** e o **npm** (Node Package Manager) instalados. Se você ainda não tiver o Node.js instalado, siga as instruções abaixo; caso já tenha, pule para o item `2.`

### Passos para instalar o Node.js e o Jest:

1. **Baixar e instalar Node.js**:
    - Acesse [https://nodejs.org](https://nodejs.org) e faça o download da versão estável para seu sistema operacional.
    - Durante a instalação, o npm será instalado automaticamente.

2. **Verificar se o Node.js e o npm estão instalados**:
    - Execute os seguintes comandos no terminal ou prompt de comando para verificar a versão instalada:

    ```bash
    node -v
    npm -v
    ```

## Instalação dos Testes

1. **Clone ou baixe o repositório**:

    ```bash
    git clone https://github.com/nksgg/Entregavel_4
    ```

2. **Instale as dependências necessárias (Jest)**:
    - No diretório testes do projeto, execute o seguinte comando para instalar as dependências do projeto:

    ```bash
    cd testes
    npm init
    npm install --save-dev jest
    ```

## Executando os Testes

1. **Dependências necessárias (Jest)**:
    - Para que o Jest funcione corretamente e os testes sejam executados, você precisa ajustar o `package.json` para apontar para o Jest como a ferramenta de testes e também configurar o script de teste adequadamente.

Aqui está o `package.json` atualizado:

  ```json
      {
      "name": "testes",
      "version": "1.0.0",
      "main": "calcularMDC.test.js",
      "scripts": {
        "test": "jest"
      },
      "author": "",
      "license": "ISC",
      "description": "",
      "devDependencies": {
        "jest": "^29.7.0"
      }
    }
   ```
- Após modificar, salve utilizando `Ctrl + S`.

2. **Rodar os testes**:
    - Após instalar as dependências, você pode executar os testes com o seguinte comando:

    ```bash
    npm test
    ```

  3. **Resultado esperado**:
    - O Jest irá buscar todos os arquivos com a extensão `.test.js` e executar os testes. Você verá algo como:

  ```bash
    > testes@1.0.0 test
    > jest

    PASS  ./calcularMDC.test.js
    PASS  ./contarAprovados.test.js
    ...

    Test Suites: 6 passed, 6 total
    Tests:       19 passed, 19 total
    Snapshots:   0 total
    Time:        0.639 s, estimated 1 s
    Ran all test suites.
  ```

### Observações:

- Certifique-se de que todos os testes estejam com a função `test()` corretamente definida e importada.
- Se houver algum erro no teste, o Jest irá exibir uma mensagem de erro indicando onde o problema está ocorrendo.


## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
