# Expedição Ciclos da Vida

Aula interativa de Biologia para o Ensino Médio sobre os ciclos biogeoquímicos da água, do carbono e do nitrogênio.

## Arquivos
- `index.html`: aula interativa que será publicada pelo GitHub Pages.
- `Code.gs`: backend Google Apps Script para registrar respostas em uma planilha Google.

## Publicar a aula no GitHub Pages
1. Abra **Settings** do repositório.
2. Entre em **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
5. Aguarde a URL de publicação aparecer na mesma página.

## Conectar a uma planilha Google
1. Crie uma planilha em [Google Planilhas](https://sheets.google.com/).
2. Copie o ID do endereço da planilha: o trecho entre `/d/` e `/edit`.
3. Abra [Google Apps Script](https://script.google.com/) e crie um projeto.
4. Copie o conteúdo de `Code.gs` deste repositório para o arquivo `Code.gs` do projeto.
5. Em **Configurações do projeto → Propriedades do script**, adicione `PLANILHA_ID` com o ID da planilha.
6. Em **Implantar → Nova implantação**, selecione **Aplicativo da web**; execute como você e escolha quem pode acessar de acordo com as regras da conta escolar. O envio de alunos sem login pode exigir acesso amplo, que deve ser aprovado pela escola.
7. Autorize a implantação e copie a URL terminada em `/exec`.
8. Edite `index.html` neste repositório e localize `const API_CONFIG = { endpoint: '' };`. Cole a URL `/exec` dentro das aspas vazias e faça commit.
9. Teste com uma resposta fictícia e confirme que a linha apareceu na aba **Respostas** da planilha antes de usar com estudantes.

## Privacidade e segurança
- Não guarde respostas reais, nomes de estudantes, IDs da planilha ou chaves secretas no repositório público.
- A API foi preparada para receber envios e não para exibir as respostas. Consulte os registros diretamente na planilha, compartilhada somente com pessoas autorizadas.
- O endpoint de envio fica acessível pela internet se a implantação aceitar usuários anônimos; ele pode receber envios indevidos. Verifique as regras da escola e colete somente os dados necessários.
- A página hospedada no GitHub Pages não consegue confirmar a resposta HTTP do Apps Script, por isso a mensagem no navegador não substitui o teste de conferência na planilha.
