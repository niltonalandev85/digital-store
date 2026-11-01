# Digital Store — Projeto Final de Front-end

Aplicação web desenvolvida com **React** para o projeto final de Front-end do **Geração Tech 4.0**, baseada na documentação oficial do Digital Store e no design disponibilizado no Figma.

O projeto implementa as três páginas solicitadas: **Home**, **Listagem de Produtos** e **Visualização do Produto**.

## Funcionalidades

- **Home:** carrossel de imagens, coleções em destaque e oito produtos em alta.
- **Listagem:** pesquisa por nome, filtros de categoria e faixa de preço, ordenação por preço e contagem de resultados.
- **Detalhes:** galeria com miniaturas, informações do produto, opções de tamanho e cor e produtos recomendados.
- **Navegação:** rotas com React Router e layout compartilhado entre as páginas.
- **Responsividade:** adaptação das páginas a diferentes tamanhos de tela.

Os produtos são dados de exemplo armazenados localmente. O projeto não utiliza API ou banco de dados. Carrinho, autenticação e finalização de compras não fazem parte do escopo desta entrega.

## Tecnologias

- React
- JavaScript
- Vite
- React Router
- HTML e CSS

## Como executar

É necessário ter o **Node.js** e o **npm** instalados.

1. Baixe ou clone o repositório.
2. Abra um terminal na pasta do projeto.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173/`).

**Observação para Windows/PowerShell:** caso a execução de `npm` seja bloqueada pela política do PowerShell, utilize `npm.cmd` nos comandos, como `npm.cmd install` e `npm.cmd run dev`.

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Pré-visualiza a versão de produção |
| `npm run lint` | Analisa o código com Oxlint |

## Páginas e rotas

| Rota | Página |
| --- | --- |
| `/` | Página inicial |
| `/produtos` | Listagem de produtos |
| `/products` | Listagem de produtos (também utilizada pela pesquisa) |
| `/product/:id` | Visualização de um produto |

Os links que apontam para áreas não implementadas exibem uma mensagem de página não disponível, sem criar funcionalidades fora dos requisitos mínimos.

## Referências

- [Documentação base — Digital Store](https://github.com/digitalcollegebr/projeto-digital-store)
- [Protótipo no Figma](https://www.figma.com/design/nUk0ihM3x4u8JQtxUoAEJf/DRIP-STORE---DIGITAL-COLLEGE--Copy-?node-id=22-30)
- [Documentação do React](https://react.dev/)

## Autoria

**Desenvolvedor:** NILTON ALAN DA SILVA FERREIRA

**Curso:** Geração Tech 4.0
