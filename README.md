# wefit
## Desafio de Estruturação de Projeto React Native + TypeScript + styled-components
### Figma
https://www.figma.com/file/TETzIuf8UnkRGWSyxvPigc/Teste-Android-WeFit---2022?node-id=0%3A1

### Integração
Utilizar o endpoint https://api.github.com/users/[Usuário]/repos para integrar e alimentar os dados conforme o layout.

Ex: https://api.github.com/users/facebook/repos

Campos que serão usados: full_name, description, owner.avatar_url, stargazers_count, language e html_url

### Funcionalidades
Listagem dos repos de acordo com o retorno do endpoint.

Ao clicar no Favoritar os dados do repo devem ser persistidos localmente (ex: Async Storage) e o elemento deve ser removido da listagem dos repos.

Clicando no ícone da estrela no menu bottom deve navegar para a listagem dos repos Favoritados, ****recuperando todos os dados salvos localmente, independente de qual usuário do GitHub está selecionado.

Clicando no ícone de configurações deve abrir o modal, onde poderá mudar o repositório indicado.

Ex: Salvando o nome “appswefit" a url de integração irá passar a ser https://api.github.com/users/appswefit/repos, atualizando os valores da listagem.

Com o celular offline deve ser possível conseguir acessar a aba de Favoritos e retornar valores salvos.

Ao clicar no card deve navegar para a tela de Detalhes. Obs: o texto “Lorem ipsum” dessa tela é apenas um placeholder do layout. O texto renderizado nessa tela é apenas o campo description.

Ao clicar no botão Ver Repositório deve navegar para fora do app apontado para a rota html_url.

Os botões Favoritar e Desfavoritar tem o mesmo comportamento descrito anteriormente.

### Requisito Técnico
- Expo SDK: inicialize o projeto com o framework Expo para facilitar a execução e análise.
### Avaliação
#### Pontos avaliados:
- Fidelidade do layout do Figma;
- Funcionamento da aplicação (ausência de bugs);
- Qualidade do código:
  - Organização das pastas;
  - Domínio do TypeScript;
  - Domínio do styled-components;
  - Bom nível de Componentização UI;
- Aplicação de tecnologias;
  - Ex: aplicar uma biblioteca específica que acelere o desenvolvimento.
  - Aplicação das melhores práticas para isolar comportamento de UI da lógica de Integração;
  - Código legível e de fácil manutenção;
    - Ex: variáveis com nomes claros.
  - Código limpo
    - Ex: evitar console.log ou códigos desnecessários
