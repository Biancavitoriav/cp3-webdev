# Uso de inteligência artificial

## Prompt inicial

"Você está desenvolvendo uma aplicação web simples de receitas, constituida apenas de um CRUD e login.
Quanto ao CRUD, utilize as seguintes instruções:
- **Adicionar** um item ao final da lista
- **Adicionar** um item ao início da lista
- **Ver** todos os itens exibidos dinamicamente na tela, de forma que a tela deve ser atualizada automaticamente para refletir o estado atual dos dados
- **Editar** qualquer item individualmente
- **Remover** qualquer item individualmente
Quanto ao login, utilize as seguintes instruções:
- **Usuário:** `aluno`
- **Senha:** `fiap2025`
- **Validações:** caso as credenciais estiverem incorretas, informe o usuário
"

## Prompt final

"Você é um desenvolvedor em formação, no seu primeiro semestre de faculdade e está desenvolvendo uma aplicação web simples (contendo apenas javascript e html) de receitas, constituida apenas de um CRUD e login.
Quanto ao CRUD, utilize as seguintes instruções:
- **Adicionar** um item ao final da lista
- **Adicionar** um item ao início da lista
- **Ver** todos os itens exibidos dinamicamente na tela, de forma que a tela deve ser atualizada automaticamente para refletir o estado atual dos dados
- **Editar** qualquer item individualmente
- **Remover** qualquer item individualmente
Quanto ao login, utilize as seguintes instruções:
- **Usuário:** `aluno`
- **Senha:** `fiap2025`
Quanto a validações, utilize as seguintes instruções:
- **Login:** Os campos de login não podem ser enviados vazios, caso as credenciais estiverem erradas, informe o usuário
- **Campos gerais:** Nenhum item pode ser salvo com o campo vazio — a mensagem de erro deve aparecer na tela
- **Receitas:** Ao editar um item, se o usuário cancelar ou confirmar com o campo vazio, o item original deve permanecer sem alteração. A remoção de um item deve considerar sua posição na lista, não o seu valor — para evitar que itens com o mesmo texto sejam removidos ao mesmo tempo
Quanto ao design, utilize as seguintes instruções:
- **Cores:** Utilize a cores rosa e branco como principais
- **Icones:** Utilize os icones do boxIcons (link de apoio: https://boxicons.com/icons?free=true) 
Quanto a estrutura, utilize as seguintes instruções:
- **Estrutura:**
```
projeto/
    index.html
    script.js
    style.css
```
- **Atributos:** Cada receita tem apenas nome, não queremos lidar com o complicado agora.
Me mande cada arquivo separadamente.
"

## ChatGPT (modelo gratuito)

### Com o prompt inicial

- Utilizou elementos fora do escopo estudado (localStorage, framework de componentes)
- Criou dois arquivos diferentes, para o login e listagem das receitas
- Precisei especificar que ele devia me mandar os arquivos, porque até então só tinha explicado brevemente como fazer
- Usou ```let``` mesmo que as variaveis não mudariam
- Usou ```forEach``` para renderizar as receitas
- Inventou um atributo "descrição" para as receitas

### Com o prompt final

- Ele fez exatamente o que mandei (o básico, não inventou nada)
- Precisei apenas alterar os icones dos botões de adicionar, que não condiziam com a função
- Usou ```let``` mesmo que as variaveis não mudariam, não adicionei no prompt final porque decidi mudar manualmente mesmo
- Usou ```for``` normal para renderizar as receitas

## Claude.AI (modelo Sonnet 4.6 Low)

### Com o prompt inicial

- Juntou TUDO em apenas um arquivo
- Utilizou elementos fora do escopo estudado (localStorage, framework de componentes)
- Precisei especificar que ele devia me mandar os arquivos, porque até então só me dado uma pré visualização da página
- Inventou muitos atributos para as receitas, como tempo de preparo, categoria e ingredientes
- O design ficou super simples, com um tema de folha e verde (?)

### Com o prompt final

- Mesmo depois de exigir pouca complexidade, ele criou várias variaveis para o css, além de usar nomes de classes bem abreviados, deixando tudo pouco intuitivo
- Usou querySelector nos componentes da lista
- Soube quando utilizar ```const``` e ```let``` corretamente
- Utilizou sistema de ID para as receitas
- Fez algumas verificações com regex (???)
- O design ficou extremamente agradável, provavelmente o melhor de todos

## Gemini (modelo Raciocinio)

### Com o prompt inicial

- Juntou TUDO em apenas um arquivo
- Não usou nada fora do escopo estudado
- Inventou apenas o atributo "ingredientes/resumo", além do nome da receita
- O pior em questão de acessibilidade, as tags não eram muito semânticas, porque teve muito uso desnecessário de ```div```
- O design ficou bem simples (o que não é um problema, necessariamente)
- Aproveitou os mesmos campos de cadastro para editar, ou seja, o usuário preencher os mesmos campos para tudo. Me deu uma sensação de pouco aproveitamento da UX/UI

### Com o prompt final

- Não usou nada fora do escopo estudado 
- O script.js ficou bem parecido com o que eu faria, bem simples
- Não mudou nada questão de acessibilidade, as tags não eram muito semânticas, porque teve muito uso desnecessário de ```div```
- O design ficou bem mais agradável, as animações evoluiram muito
- O UX/UI melhorou, não utilizou os mesmos campos para tudo

### IA escolhida no final

Escolhi o Gemini, já que foi o que fez o ```script.js``` mais parecido com o que fariamos com o que aprendemos. Apesar do HTML não ter boas práticas, acredito que é a parte mais fácil de modificar, preferi modificar o fácil e usar o mais dificil para ter uma boa base.