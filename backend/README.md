# Teste Zaply

## NodeJS, Express, Typescript, TypeORM, React, Styled Components, Bootstrap.

A linguagem escolhida foi o Javascript pois era o necessário para a vaga. Os frameworks idem, pois eram os necessários e também sugeridos no Notion. Além disso, são os que estudo desde o início da minha carreira. Me identifico.

Styled components usado porque é similar ao React e é mais limpo que um CSS normal. Typescript e TypeORM porque facilita a vida da criatura e dos desenvolvedores que vão trabalhar no projeto. Existem vários outros motivos técnicos, mas, nesse momento, é só pra mostrar que eu sei trabalhar com tecnologias atuais que estão sendo adotadas largamente por muitas empresas, por serem não só escaláveis e confiáveis, como também carregadas de bibliotecas, frameworks e alternativas para os problemas do dia-a-dia.

Poderia ter feito em GraphQL e NextJS, mas, por ter mais familiaridade com Express, escolhi este framework pra fazer. Questão de tempo X deadline. Teria usado o UUID para os ids dos itens, porém, como já vieram prontos, resolvi não alterar.

## How to

O projeto foi criado com Yarn.

Portanto, para instalar as dependências, basta acessar a pasta raíz e escrever `yarn` para isntalar.

O back-end foi criado em Postgres, com Docker, como pode ser visto no ormconfig.json. Caso queira fazer algo diferente disso, tem que configurar esse para o seu banco local.

Para realizar a migration da tabela, depois de configurar a database é só escrever na raiz do projeto: `yarn typeorm migration:run`
