// Girls Futsal / Fútbol de las Niñas: program facts and the page's words in
// the three languages the site supports. The people in the photos are models,
// not current BISA players, so the copy never calls them "our players".

export const GF = {
  phone: '854-216-2168',
  tel: 'tel:+18542162168',
  sms: 'sms:+18542162168',
  address: '1050 Discovery Dr., Ladson, SC',
  venue: 'Sangaree Middle School',
  mapQuery: 'Sangaree Middle School, 1050 Discovery Dr, Ladson, SC',
  start: '2026-12-04',
};

type Copy = {
  badge: string;
  title1: string;
  title2: string;
  alt: string;
  lead: string;
  ctaFree: string;
  ctaSchedule: string;
  heroStickers: [string, string, string];
  motto: [string, string, string];
  mottoSub: string;
  whyKicker: string;
  whyTitle: string;
  why: { title: string; text: string }[];
  galleryTitle: string;
  gallerySub: string;
  galleryStickers: [string, string, string];
  whenKicker: string;
  whenTitle: string;
  dayLabel: string;
  day: string;
  time: string;
  startLabel: string;
  start: string;
  whereLabel: string;
  openMap: string;
  finalBadge: string;
  finalTitle: string;
  finalText: string;
  call: string;
  text: string;
  finalNote: string;
};

export const GF_COPY: Record<'en' | 'pt' | 'es', Copy> = {
  en: {
    badge: 'New · BISA’s first girls futsal program',
    title1: 'Girls',
    title2: 'Futsal',
    alt: 'Fútbol de las Niñas',
    lead: 'A fast, fun indoor game on a small court, made for girls. Every Friday night in Ladson. Your first session is on us.',
    ctaFree: 'First session free',
    ctaSchedule: 'See when & where',
    heroStickers: ['No experience needed', 'Let’s play!', 'New friends'],
    motto: ['Her game.', 'Her team.', 'Her way.'],
    mottoSub: 'Kick. Pass. High five. Smile.',
    whyKicker: 'Why she’ll love it',
    whyTitle: 'Made for girls who want to play',
    why: [
      { title: 'No experience needed', text: 'Never touched a ball? Perfect. Coaches start from zero and every girl plays.' },
      { title: 'New friends', text: 'A team of girls her age, cheering each other on every Friday.' },
      { title: 'Pure fun', text: 'Games, goals and high fives. One hour that ends the week with a smile.' },
      { title: 'Real futsal skills', text: 'The small court means more touches, quicker feet and confidence with the ball.' },
    ],
    galleryTitle: 'Kick. Pass. Smile.',
    gallerySub: 'Indoor futsal: a smaller court, a lighter bounce and the ball at her feet all night.',
    galleryStickers: ['High five!', 'Her way', 'Goal!'],
    whenKicker: 'When & where',
    whenTitle: 'Fridays are for futsal',
    dayLabel: 'Every',
    day: 'Friday',
    time: '6:30 – 7:30 PM',
    startLabel: 'Starts',
    start: 'December 4, 2026',
    whereLabel: 'Where',
    openMap: 'Open in Maps',
    finalBadge: 'Let’s play!',
    finalTitle: 'First session free',
    finalText: 'Call or text to save her spot. No experience needed, just bring sneakers and a smile.',
    call: 'Call',
    text: 'Text',
    finalNote: 'Fridays · 6:30–7:30 PM · Sangaree Middle School, Ladson',
  },
  pt: {
    badge: 'Novo · o primeiro programa de futsal feminino da BISA',
    title1: 'Girls',
    title2: 'Futsal',
    alt: 'Fútbol de las Niñas',
    lead: 'Um jogo rápido e divertido, em quadra reduzida, feito para meninas. Toda sexta à noite em Ladson. A primeira aula é por nossa conta.',
    ctaFree: 'Primeira aula grátis',
    ctaSchedule: 'Ver dia e local',
    heroStickers: ['Não precisa de experiência', 'Bora jogar!', 'Novas amigas'],
    motto: ['O jogo dela.', 'O time dela.', 'Do jeito dela.'],
    mottoSub: 'Chuta. Passa. Toca aqui. Sorri.',
    whyKicker: 'Por que ela vai amar',
    whyTitle: 'Feito para meninas que querem jogar',
    why: [
      { title: 'Não precisa de experiência', text: 'Nunca jogou? Perfeito. Os treinadores começam do zero e todas jogam.' },
      { title: 'Novas amigas', text: 'Um time de meninas da idade dela, torcendo umas pelas outras toda sexta.' },
      { title: 'Pura diversão', text: 'Jogos, gols e high fives. Uma hora que fecha a semana com um sorriso.' },
      { title: 'Técnica de verdade', text: 'Na quadra reduzida ela toca mais na bola, ganha agilidade e confiança.' },
    ],
    galleryTitle: 'Chuta. Passa. Sorri.',
    gallerySub: 'Futsal na quadra coberta: espaço menor, bola que quica menos e ela com a bola no pé a noite toda.',
    galleryStickers: ['Toca aqui!', 'Do jeito dela', 'Gol!'],
    whenKicker: 'Dia e local',
    whenTitle: 'Sexta é dia de futsal',
    dayLabel: 'Toda',
    day: 'Sexta',
    time: '18h30 – 19h30',
    startLabel: 'Começa',
    start: '4 de dezembro de 2026',
    whereLabel: 'Onde',
    openMap: 'Abrir no Maps',
    finalBadge: 'Bora jogar!',
    finalTitle: 'Primeira aula grátis',
    finalText: 'Ligue ou mande mensagem para garantir a vaga dela. Não precisa de experiência, só tênis e um sorriso.',
    call: 'Ligar',
    text: 'Mensagem',
    finalNote: 'Sextas · 18h30–19h30 · Sangaree Middle School, Ladson',
  },
  es: {
    badge: 'Nuevo · el primer programa de futsal femenino de BISA',
    title1: 'Girls',
    title2: 'Futsal',
    alt: 'Fútbol de las Niñas',
    lead: 'Un juego rápido y divertido en cancha reducida, hecho para niñas. Todos los viernes por la noche en Ladson. La primera sesión es gratis.',
    ctaFree: 'Primera sesión gratis',
    ctaSchedule: 'Ver día y lugar',
    heroStickers: ['No necesita experiencia', '¡A jugar!', 'Nuevas amigas'],
    motto: ['Su juego.', 'Su equipo.', 'A su manera.'],
    mottoSub: 'Patea. Pasa. Choca esos cinco. Sonríe.',
    whyKicker: 'Por qué le va a encantar',
    whyTitle: 'Hecho para niñas que quieren jugar',
    why: [
      { title: 'No necesita experiencia', text: '¿Nunca ha jugado? Perfecto. Los entrenadores empiezan desde cero y todas juegan.' },
      { title: 'Nuevas amigas', text: 'Un equipo de niñas de su edad, apoyándose cada viernes.' },
      { title: 'Pura diversión', text: 'Partidos, goles y choques de manos. Una hora que cierra la semana con una sonrisa.' },
      { title: 'Técnica de verdad', text: 'En la cancha reducida toca más el balón y gana rapidez y confianza.' },
    ],
    galleryTitle: 'Patea. Pasa. Sonríe.',
    gallerySub: 'Futsal bajo techo: cancha más pequeña, un balón que rebota menos y ella con el balón en los pies toda la noche.',
    galleryStickers: ['¡Choca esos cinco!', 'A su manera', '¡Gol!'],
    whenKicker: 'Día y lugar',
    whenTitle: 'Los viernes son de futsal',
    dayLabel: 'Todos los',
    day: 'Viernes',
    time: '6:30 – 7:30 PM',
    startLabel: 'Empieza',
    start: '4 de diciembre de 2026',
    whereLabel: 'Dónde',
    openMap: 'Abrir en Maps',
    finalBadge: '¡A jugar!',
    finalTitle: 'Primera sesión gratis',
    finalText: 'Llame o envíe un mensaje para reservar su lugar. No necesita experiencia, solo tenis y una sonrisa.',
    call: 'Llamar',
    text: 'Mensaje',
    finalNote: 'Viernes · 6:30–7:30 PM · Sangaree Middle School, Ladson',
  },
};
