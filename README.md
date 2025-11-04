# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.

## Missão

Sua missão é desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js pré-existente. Você deverá implementar a lógica que permite aos usuários selecionar suas preferências e funcionalidades desejadas, e então receber recomendações de produtos correspondentes.

## Contexto

Este projeto é parte de uma etapa técnica do processo seletivo para a vaga de desenvolvedor front-end na RD Station. A estrutura básica da aplicação já está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos.

Seu foco deve ser na implementação da lógica de recomendação e na integração desta funcionalidade com a interface do usuário existente. A aplicação já possui um layout básico utilizando Tailwind CSS.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

## Requisitos Técnicos

### Familiaridade com Tailwind CSS

O layout da aplicação foi desenvolvido utilizando Tailwind CSS. Familiaridade básica com este framework de CSS utilitário será útil para entender e potencialmente modificar o layout existente.

### Versão do Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha): npm install -g n

2. Instale e use a versão 18.3 do Node.js: n 18.3

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.

## Foco do Desenvolvimento

Para completar este teste, você deve concentrar-se principalmente em três arquivos específicos:

1. `App.js`: Neste componente, você encontrará o comentário "Dadas atualizações no formulário, necessário atualizar a lista de recomendações". Implemente a lógica necessária para atualizar a lista de recomendações com base nas entradas do usuário.

2. `Form.js`: Este componente contém o comentário "Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações". Desenvolva a lógica para processar as entradas do usuário e gerar as recomendações apropriadas.

3. `recommendation.service.js`: Neste arquivo de serviço, você verá o comentário "Crie aqui a lógica para retornar os produtos recomendados." Implemente a lógica de negócios para determinar quais produtos devem ser recomendados com base nos critérios fornecidos.

## Observações Adicionais

- Sinta-se à vontade para implementar melhorias na cobertura de testes e no layout da aplicação, caso tenha tempo adicional.
- O código existente serve como base para sua implementação. Concentre-se em desenvolver a funcionalidade de recomendação de produtos conforme especificado nos requisitos do projeto e nos arquivos mencionados acima.

## Requisitos

- Implementar a lógica de recomendação de produtos com base nas preferências do usuário.
- Utilizar React.js para o desenvolvimento do front-end.
- Consumir a API fornecida pelo json-server para obter os dados dos produtos.
- Seguir as boas práticas de desenvolvimento e organização de código.
- Implementar testes unitários para as funcionalidades desenvolvidas.

## Como Executar

1. Clone o repositório: `git clone git@github.com:joaoegpacheco/monorepo.git`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh` 
4. Inicie a aplicação: `yarn start`

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

## Critérios de Aceite

1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.
6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.

Certifique-se de que todos os critérios de aceite são atendidos durante o desenvolvimento do projeto.

## Melhorias Implementadas

Durante o desenvolvimento do projeto, foram implementadas várias melhorias que vão além dos requisitos básicos do desafio:

### Performance e Gerenciamento de Estado

- **Migração para @legendapp/state**: Todo o gerenciamento de estado foi migrado de `useState` e `useEffect` para `@legendapp/state`, uma biblioteca reativa que oferece até 4x mais performance. Isso inclui:
  - Substituição de `useState` por `useObservable` para estado reativo
  - Substituição de `useEffect` por `useObserve` para efeitos colaterais
  - Uso de `useComputed` para valores derivados e memoizados
  - Implementação de `useSelector` para renderização reativa e otimizada

### Design Responsivo e Mobile-First

- **Conversão para Mobile-First**: Todo o layout foi convertido de desktop-first para mobile-first utilizando Tailwind CSS, garantindo uma experiência otimizada em dispositivos móveis:
  - Breakpoints responsivos (`sm:`, `md:`, `lg:`) aplicados em todos os componentes
  - Espaçamentos e tamanhos de fonte adaptativos
  - Layout em grid que se adapta de coluna única (mobile) para múltiplas colunas (desktop)

### Identidade Visual da RD Station

- **Branding RD Station**: Aplicação das cores oficiais da marca RD Station em todos os componentes:
  - Cor principal (#0073E6) aplicada em botões, checkboxes e radio buttons selecionados
  - Cores secundárias (light e dark) para estados hover e active
  - Remoção de focus outlines para uma experiência visual mais limpa
  - Background branco em checkboxes e radio buttons não selecionados para melhor legibilidade

### Correções e Melhorias de UX

- **Correção de Bugs Críticos**:
  - Resolvido problema de checkboxes não clicáveis através de melhorias no componente `Checkbox`
  - Corrigida validação do formulário que não estava habilitando o botão corretamente
  - Implementada sincronização reativa entre componentes para garantir que os dados sejam exibidos corretamente

- **Melhorias de Acessibilidade**:
  - Labels adequados para todos os inputs
  - Área de clique expandida para melhor usabilidade
  - Feedback visual em estados hover e active

### Qualidade de Código

- **Testes Unitários**: Adicionados 10 novos casos de teste para cobrir cenários edge cases e garantir robustez do serviço de recomendação
- **Organização e Estrutura**: Código organizado seguindo princípios de Clean Code
- **Commits Padronizados**: Todos os commits seguem o padrão Conventional Commits para melhor rastreabilidade

### Arquivos Modificados

Os seguintes arquivos foram modificados ou criados durante as melhorias:

**Hooks:**
- `src/hooks/useProducts.js` - Migrado para `@legendapp/state`
- `src/hooks/useForm.js` - Implementado com `useObservable` e `useComputed`
- `src/hooks/useRecommendations.js` - Otimizado para trabalhar com observables

**Componentes:**
- `src/App.js` - Migrado para estado reativo e design mobile-first
- `src/components/Form/Form.js` - Reatividade completa e validação corrigida
- `src/components/Form/Fields/Preferences.js` - Estado reativo e cores RD Station
- `src/components/Form/Fields/Features.js` - Estado reativo e cores RD Station
- `src/components/Form/Fields/RecommendationType.js` - Radio buttons nativos com cores RD Station
- `src/components/shared/Checkbox.js` - Melhorias de usabilidade e estilização
- `src/components/Form/SubmitButton/SubmitButton.js` - Cores RD Station e design mobile-first
- `src/components/RecommendationList/RecommendationList.js` - Design mobile-first

**Estilos e Configuração:**
- `tailwind.config.js` - Adicionadas cores da marca RD Station
- `src/tailwind.css` - Estilos customizados para inputs sem focus outline

## Autor

Desenvolvido por João Pacheco

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
