# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro
Deve ser possivel listar todas as categorias

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente
Não deve ser possível alterar a placa de um carro já cadastrado
O carro deve ser cadastrado com disponibilidade por padrão
Somente admistradores podem cadastrar um novo carro

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis
Deve ser possivel listar todos os carros disponíveis pelo nome da categoria
Deve ser possivel listar todos os carros disponíveis pelo nome da marca
Deve ser possivel listar todos os carros disponíveis pelo nome do carro

**RN**
O úsuario não precisa está logado no sistema para realizar a listagem

## Cadastro de Especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro
Deve ser possivel listar todas as especificações
Deve ser possivel listar todos os carros

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
Somente admistradores podem cadastrar um novo carro

## Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
Deve ser possivel cadastrar mais de uma imagem para o mesmo carro
Somente admistradores podem cadastrar as imagens do  carro

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
