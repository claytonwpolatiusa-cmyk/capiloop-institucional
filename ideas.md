# Direção de design — CapiLoop

## Três abordagens consideradas

| Tema | Introdução breve | Probabilidade |
| --- | --- | --- |
| **Horta Escultural** | Uma experiência clara e tátil, inspirada em objetos de design industrial e vegetação com formas arredondadas. O verde-lima aparece como energia em meio a tons minerais e superfícies translúcidas. | 0,07 |
| **Cidade em Órbita** | Uma composição noturna, quase editorial, onde rotas e pontos de encontro formam um mapa luminoso em profundidade. A sensação é urbana, ágil e cinematográfica. | 0,03 |
| **Clube de Bairro Futuro** | Um sistema gráfico caloroso, com padrões de feira, lettering expressivo e cores brasileiras saturadas para celebrar os pequenos estabelecimentos. | 0,08 |

## Abordagem escolhida: Horta Escultural

### Movimento de design

**Minimalismo orgânico de produto**, combinando a precisão silenciosa de interfaces premium com a materialidade suave de ilustrações 3D contemporâneas. A estética usa volumes arredondados, vidro fosco e objetos de aparência tátil, evitando a linguagem genérica de fintech ou delivery tradicional.

### Princípios centrais

1. **A capivara conduz a narrativa.** O mascote não é um enfeite: ele indica movimento, acolhimento e conexão em cada página.
2. **Contraste de matéria e ar.** Fundos minerais claros, grandes áreas de respiro e superfícies translúcidas valorizam os poucos elementos de cor intensa.
3. **Geometria suave em vez de cartões repetidos.** Blocos assimétricos, módulos elípticos e recortes circulares organizam o conteúdo sem depender de grades rígidas centralizadas.
4. **Benefícios em linguagem humana.** Cada seção comunica mobilidade simples, colaboração local e impacto cotidiano com frases diretas e otimistas.

### Filosofia de cor

O **verde-lima Capi** é uma assinatura energética usada em momentos de decisão, deslocamento e transformação. Ele é equilibrado por verde-pinho quase preto, argila clara e branco névoa para que a interface transmita confiança, calma e sofisticação, e não um visual agressivo. Transparências em verde suave criam profundidade sem recorrer a gradientes roxos ou brilho neon.

### Paradigma de layout

O site funciona como uma **trilha espacial**. Em vez de uma coluna de cards centralizados, cada página alterna entre campos abertos, placas translúcidas deslocadas, trajetórias pontilhadas e objetos 3D que invadem suavemente o espaço. A navegação mantém uma barra editorial compacta; o conteúdo acompanha uma linha de percurso que remete a uma rota urbana.

### Elementos de assinatura

1. **Órbita de rota:** traços pontilhados verde-lima descrevendo trajetos arredondados e conectando seções.
2. **Prismas de vidro fosco:** painéis leves e translúcidos, com sombra difusa e borda esbranquiçada.
3. **Sementes de movimento:** pequenas cápsulas, pinos e volumes verdes em 3D que sugerem pontos de coleta, deslocamento e recompensa.

### Filosofia de interação

As interações devem parecer **pequenos impulsos físicos**. CTAs encolhem levemente ao clique, botões projetam uma sombra curta ao hover e a capivara reage com microdeslocamentos. Navegação e leitura permanecem imediatas; os efeitos são sempre funcionais e discretos.

### Animação

Entradas usam apenas opacidade e transformação, com uma curva rápida e elástica controlada. As órbitas podem percorrer pequenos trechos de forma lenta e contínua, enquanto a capivara realiza uma flutuação quase imperceptível. Grupos de conteúdo entram em sequência de 40 a 70 ms. Para `prefers-reduced-motion`, animações decorativas ficam desativadas e o conteúdo aparece sem atraso.

### Sistema tipográfico

**DM Sans** é usada no corpo por sua legibilidade e precisão suave. **DM Serif Display** conduz títulos e números de destaque, trazendo uma assinatura editorial com personalidade. Títulos são largos, com espaçamento negativo moderado; rótulos em caixa alta utilizam DM Sans com espaçamento amplo; textos corridos preservam largura curta para leitura confortável.

### Essência de marca

**A CapiLoop transforma deslocamentos e escolhas locais em uma rotina mais leve, recompensadora e conectada para pessoas e estabelecimentos.**

Personalidade: **acolhedora, inventiva e consciente**.

### Voz da marca

O tom é próximo, positivo e preciso. Headlines soam como um convite para experimentar uma cidade mais fluida; CTAs usam verbos de movimento; microcopy explica sem jargão ou pressão comercial.

> “Seu caminho pode render mais.”

> “Leve a CapiLoop para o seu balcão.”

### Wordmark e logo

O wordmark usa uma construção própria com o “C” aberto como uma volta de rota; o símbolo é uma **capivara em silhueta arredondada dentro de uma alça orbital**, desenhada sem texto e forte o bastante para favicon, botão e assinatura de rodapé.

### Cor de assinatura

**Verde Capi — `#B9FF39`**. Um verde-lima luminoso, vegetal e inequívoco, reservado para a ação que move a experiência.

## Style Decisions

- A capivara atua como guia narrativo em todas as rotas principais, alternando entre personagem 3D, selo e companhia de trajeto.
- O Verde Capi fica concentrado em ações, palavras de ênfase, sementes de rota e transições; superfícies minerais e prismas translúcidos dominam o campo visual.
- Cada página preserva a tipografia editorial, mas muda o arranjo de rota, objeto e vidro para que a navegação seja percebida como uma trilha contínua, e não como uma sequência de templates.
