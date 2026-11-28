# AIRAM — Visual Lab V0.4.1 Imersivo + Mobile Arcade

Protótipo estático para homologação, não lançamento oficial. Novo repositório, sem alterar V0.1.2.

## Publicação de teste pelo próprio usuário
1. Extraia o ZIP. Selecione todos os arquivos (não há subpastas).
2. Crie um novo repositório GitHub para o laboratório. Faça upload dos arquivos na raiz da branch main.
3. Settings > Pages > Deploy from a branch > main > /(root), quando disponível no seu plano. O site poderá ficar publicamente acessível; no plano Free, Pages normalmente requer repositório público. Não confunda noindex com segurança. Não suba o backup privado ou o PDF respondido.
4. Abra o endereço do Pages e toque em Entrar no posto. Arraste o cenário, toque nos objetos ou use setas, mapa e zoom. A engrenagem abre o laboratório visual. Para voltar ao teaser, use mapa > Voltar ao teaser. Recarregue para sair da simulação de teaser fechado.
5. Exporte seu parecer pelo Visual Lab. O TXT/JSON contém apenas configurações e observações de design locais. Não inclua dados pessoais.

## Escopo
15 estados cenográficos (inclui teaser), 27 jogos locais jogáveis para testes e Monta Look pendente, seis personagens geométricos, cinco ambientes AFTER neutros, editor de cartaz fictício exportável, modo foto público, temas, mapa acessível e parecer local. Jukebox pública abre a prévia demonstrativa da playlist funk LGBT+; rádio separado para AIRAM. Estúdio de Eras (nome definitivo). Som sintético original nos jogos, sem faixa musical protegida. Nenhum login, chat, pagamento, serviço de dados ou verificação de idade. Sem ativos adultos reais.

## Decisão técnica / divergência do PDF
O PDF aprovou Pannellum e panoramas. A biblioteca não pôde ser obtida neste ambiente (DNS sem acesso ao CDN). Esta prova usa um motor original WebGL de geometria 3D, com câmera fixa em cada ponto e rotação horizontal completa, e um renderer de perspectiva Canvas 2D independente para aparelhos sem WebGL. Não é um panorama fotográfico/equiretangular, nem caminhada livre. A estética é deliberadamente geométrica provisória, sem acabamento fotorrealista. A alternativa técnica deve ser avaliada na homologação. Os conteúdos e coordenadas dos hotspots são separados do motor em scenes.js, facilitando migração posterior para Pannellum ou imagens panorâmicas reais. Sem bibliotecas/CDN externos.

## Testes da V0.2 (histórico preservado)
Node --check nos JS. Chromium: navegação HTTP local bloqueada por política do ambiente; teste via HTML incorporado em memória com scripts e CSS do pacote. WebGL indisponível nesse Chromium, renderer Canvas testado. Inspeção visual desktop 1100x720 e mobile emulado 393x873. Verificados: arrastar com mouse e não disparar modal, rotação completa, reset, jukebox, retorno à câmera, abertura de hotspots públicos e 27 jogos locais jogáveis para testes e Monta Look pendente, cinco salas AFTER, tema claro, modelo 3D e editor de cartaz. Zero exceções JS observadas nos fluxos executados. Acessibilidade completa, WebGL, toque em celular físico, performance e hospedagem GitHub Pages ainda pendentes. Não é certificação de segurança ou prontidão de produção.

## Arquivos
index.html, style.css, app.js, scenes.js, engine.js, canvas-engine.js, catalog.js, games.js, model.js, manifesto e artes oficiais públicas na raiz. O código não requer build ou servidor de aplicação. Manifesto básico, sem service worker/offline nesta fase, para evitar cache de homologações antigas.

## Próximas fases
Somente após homologação visual expressa: Supabase, Central PHP/XAMPP e integrações reais. Spotify oficial e links dependem de dados fornecidos. AFTER real e chat bloqueados até aferição confiável e moderação, cofre de saúde separado e revisão profissional. Não utilizar este laboratório como site de produção. Nenhum lançamento autorizado.

## V0.3 — Como testar jogos
Entre no posto > Conveniência > Fliperama/Playground. Se o hotspot estiver fora da câmera, use o mapa > Fliperama > Playground. Cada título abre uma janela com instruções e controles; fechar retorna ao cenário. Monte Seu Bailão, Batalha de Memes e POV exportam PNG; Monta Look informa que está em preparação. Jogos locais por turnos funcionam no mesmo aparelho. Nos desafios sonoros, use as pistas visuais caso o áudio não funcione. A Sala dos Jogos do AFTER tem somente cartas/roleta neutras, sem liberação adulta. Sem ranking online, cadastro, apostas ou prêmio financeiro.

A V0.3 acrescenta games.js, adapta o roteamento e o estilo do modal, atualiza a identificação visual; não modifica scenes.js, motor 3D, identidade ou arquivos originais. Os 27 títulos têm mecânicas de teste locais e simplificadas. O conteúdo editorial, as regras finais, a qualidade dos jogos, o modo multiplayer e a integração futura com progressão dependem de homologação. Ritmo é sequência de sinais, e Descobre o sample usa padrões sintéticos, não música comercial. Jogos sociais dependem de validação verbal; os resultados não são persistidos.

Testes V0.3: Chromium com HTML incorporado, viewport mobile 390×844 e desktop 1280×800, WebGL desativado. Verificadas 30 rotas (28 públicas, incluindo Monta Look pendente, e 2 atividades neutras AFTER). 27 jogos públicos interagidos, com final de ciclo em quizzes/cartas/simulações/arcades selecionados; downloads PNG de três criadores; teste parcial em ritmo, puzzle e memória. Zero exceções JS observadas. Não é teste físico, verificação de áudio audível, de performance ou produção. Consulte relatório no pacote privado.

## V0.4.1 — versão atual na main
Entre no posto > Conveniência > Fliperama > Playground. Quatro destaques jogáveis: Turbo, Rush, Passinho e Frequência. Use toque, arraste, pausa e reinício. No pátio, o novo carro de som genérico abre a prévia de música pelo hotspot ou mapa. A navegação por objetos e o restante do catálogo foram preservados. Monta Look e o personagem 3D definitivo continuam pendentes.

A entrada usa a capa, assinatura, escudo e textura oficiais já presentes no repositório. As imagens adicionais de referência do avatar e fundo ficam no pacote local, sem dependência de arquivo ausente no runtime. Nenhum modelo externo foi incorporado.

Ver REGISTRO_V041.txt e TESTES_V041.json para alterações e limites dos testes. A publicação na main é exclusivamente protótipo de homologação; não ativa backend, Central, integrações reais nem lançamento oficial.
