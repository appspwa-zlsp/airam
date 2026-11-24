# AIRAM — VISUAL LAB V0.1.2 — RAIZ ÚNICA DEV | NÃO PUBLICAR COMO PRODUTO FINAL
Protótipo estático de homologação. Nenhuma operação de negócio real. Não há banco, Central, APIs externas, cadastro, chat ou áudio real. Não inclua dados pessoais. O código e os placeholders do AFTER são neutros; as rotas são públicas em uma hospedagem pública. `noindex` não é controle de acesso. Não use este build como teaser oficial nem como proteção etária.

## Abrir no computador
Extraia o ZIP inteiro e abra `index.html` em um navegador moderno. Se o navegador limitar arquivos locais, use uma hospedagem estática de teste. Não requer npm, Node, PHP, XAMPP ou instalação de dependências para funcionar.

## Subir no repositório especial
1. Crie um repositório GitHub exclusivo de homologação (preferencialmente privado quando compatível com a hospedagem). Não misture com os projetos existentes.
2. Extraia o ZIP; envie **todos os arquivos diretamente na raiz**, sem pastas. As imagens também ficam ao lado do index.html. Não envie o ZIP como único arquivo. O arquivo `.nojekyll` é opcional para outros hosts.
3. Se usar GitHub Pages e o plano/repositório permitir, em Settings > Pages selecione Deploy from a branch, branch main e /(root), salve. Alternativamente, conecte o repo ao Cloudflare Pages com build estático sem comando de build e diretório de saída raiz (conforme a interface atual). Não configure nenhuma chave. Hospedagem pública não é privada mesmo com repositório privado.
4. Abra a URL gerada pela hospedagem no celular e computador. O primeiro acesso abre o teaser. Toque em Entrar no posto e depois Entrar na conveniência.
5. As rotas usam hash e caminhos relativos; a mesma base funciona em subdiretório de GitHub Pages. Se a hospedagem mantiver uma versão antiga, recarregue a página.

## Avaliação
No cabeçalho, abra o ícone de ajustes deslizantes (Visual Lab). Troque tema, era, espaçamento, raio, fonte, navegação, efeitos e estado do lançamento. Escolha a tela, escreva um parecer e salve. Exporte TXT e envie na próxima rodada. Preferências e pareceres são locais por navegador/origem; não sincronizam entre aparelhos; limpar armazenamento apaga os registros. Não coloque informações íntimas ou credenciais nas observações. O teaser público simulado não impede acesso direto às demais rotas; na publicação real será um build independente.

Os seis modelos são geometria 3D simplificada desenhada em Canvas, não modelos GLB nem retratos. Abra Ver em 3D; arraste por mouse/toque, use botões ou teclado. Modelos futuros serão integrados após recebimento, com teste de desempenho e proteção dos ativos classificados. O cenário do posto é uma ilustração vetorial original provisória; não fotografia nem render arquitetônico final. As artes oficiais selecionadas foram convertidas em WebP. Fotos e artes de figurino mais ousado não foram incluídas neste pacote.

## O que não está implementado
Jogos são telas por família; não são jogos jogáveis completos. Spotify é widget ilustrativo, sem link; jukebox cultural apenas em O Grave Também é Nosso, separada de Ouça e Prévias; pré-save, WhatsApp, login, CRM, conteúdo clínico, moderação, exportações de artes, playlists, áudio, PWA offline, notificações, instalação em todos os navegadores e segurança de produção estão pendentes. O manifesto é preliminar. O cofre de saúde não recebe registros reais. O laboratório muda CSS e estado de prévia; alguns elementos cenográficos e imagens têm paleta fixa intencional. Sem rastreamento e sem chamadas de rede externas pelo código.

## Testes
Node: verificação sintática e execução de renderizadores em DOM simulado (TESTES.json). O Chromium do ambiente bloqueou a navegação local e file://, impossibilitando teste visual e de gestos. Confira especialmente overflow, contraste, tamanhos e funcionamento em Android, iOS e desktop. Nenhuma publicação realizada. A Central e Supabase ficam adiados até homologação visual final expressa.

## Atualização V0.1.2 — raiz única
Inclui a versão mais recente de app.js com a jukebox cultural. Todas as referências antes em assets/ foram convertidas em caminhos relativos à raiz (HTML, JS, CSS e manifesto). Se já enviou uma versão anterior, substitua os arquivos de mesmo nome e envie as imagens na raiz. Uma pasta assets antiga pode permanecer sem uso. Não envie o ZIP fechado ao repositório. O arquivo .nojekyll é opcional para este pacote.
