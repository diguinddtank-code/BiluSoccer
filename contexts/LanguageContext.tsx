'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.tryouts': 'Tryouts',
    'nav.contact': 'Contact',
    'nav.register': 'Register Now',
    
    // Hero Section
    'hero.title1': 'Where Champions',
    'hero.title2': 'Are Built',
    'hero.subtitle': 'Elite youth soccer development in Metro Charleston, SC',
    'hero.cta.primary': 'Register Now',
    'hero.cta.secondary': 'View Programs',
    'hero.marquee.1': 'Junior Academy',
    'hero.marquee.2': 'Select',
    'hero.marquee.3': 'Elite',
    'hero.marquee.4': 'Futsal',
    'hero.marquee.5': 'Summer Camps',
    'hero.marquee.6': 'U4 TO U18',
    
    // AcademyHeroVisual
    'visual.quote': 'Developing the next generation of players.',
    'visual.card1.title': 'Elite',
    'visual.card1.subtitle': 'Training',
    'visual.card3.title': 'Pro Pathway',
    
    // Lead Form
    'form.title': 'Get in Touch',
    'form.subtitle': 'Interested in joining Bilu Soccer Academy? Fill out the form below and our team will get back to you.',
    'form.parentName': 'Parent/Guardian Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.playerName': 'Player Name',
    'form.birthYear': 'Player Birth Year',
    'form.program': 'Program of Interest',
    'form.program.notSure': 'Not Sure Yet',
    'form.message': 'Message / Questions',
    'form.messagePlaceholder': 'How can we help you?',
    'form.submit': 'Send Message',
    'form.success.title': 'Message Sent!',
    'form.success.message': 'Thank you for reaching out. We will contact you shortly.',
    'form.success.button': 'Send another message',
    'form.error': 'There was an error sending your message. Please try again later.',

    // Projeto Bilu
    'projetobilu.label': '// SOCIAL PROJECT',
    'projetobilu.title': 'Football That Transforms Lives',
    'projetobilu.subtitle': 'Projeto BILU is a global humanitarian initiative that uses football as a tool for social transformation, present in 10 countries and impacting children worldwide.',
    'projetobilu.stat1.value': '10',
    'projetobilu.stat1.label': 'Countries',
    'projetobilu.stat2.value': '23',
    'projetobilu.stat2.label': 'Centers',
    'projetobilu.stat3.value': '153+',
    'projetobilu.stat3.label': 'Volunteers',
    'projetobilu.cta': 'Discover the Project',

    // Sponsors
    'sponsors.title': 'Our Partners & Sponsors',
    'sponsors.subtitle': 'Proudly supported by organizations that believe in the power of youth development and social transformation.',
    'sponsors.comingSoon': 'Coming Soon',
    'sponsors.becomePartner': 'Become a Partner',

    // Projeto Bilu Page
    'pb.hero.sub1': 'Football as an instrument of',
    'pb.hero.sub2': 'human transformation',
    'pb.scroll': 'Discover',
    'pb.whatis.title': 'What Is ',
    'pb.whatis.titleHighlight': 'Projeto BILU?',
    'pb.whatis.p1': 'Projeto BILU is a global social initiative founded by Coach PC that uses football as a tool to ensure a dignified childhood for vulnerable children around the world.',
    'pb.whatis.p2.1': 'We operate with permanent centers in ',
    'pb.whatis.p2.2': '10 countries',
    'pb.whatis.p2.3': ' and point-in-time humanitarian campaigns in ',
    'pb.whatis.p2.4': '13 others',
    'pb.whatis.p2.5': ', with an army of volunteers passionate about transforming lives.',
    'pb.numbers.title': 'Impact in Numbers',
    'pb.numbers.l1': 'Countries with Centers',
    'pb.numbers.l2': 'Countries with Campaigns',
    'pb.numbers.l3': 'Countries Reached',
    'pb.numbers.l4': 'Volunteers (Brazil only)',
    'pb.numbers.l5': 'Centers in Brazil',
    'pb.global.title': 'Global Presence',
    'pb.global.desc': 'Where we operate our 10 permanent centers promoting inclusion through sports.',
    'pb.global.otherTitle': 'Humanitarian Campaigns in 13 Countries',
    'pb.global.otherDesc': 'Bolivia, Colombia, Uruguay, Paraguay, Costa Rica, El Salvador, Nicaragua, Senegal, Mozambique, Angola, Guinea-Bissau and 2 more...',
    'pb.brazil.title': 'Brazil in Detail',
    'pb.brazil.desc': 'Distribution of our 17 centers across the Brazilian territory.',
    'pb.brazil.centers': 'Centers',
    'pb.brazil.volunteers': 'Volunteers',
    'pb.actions.title': 'What We Do',
    'pb.actions.1.title': 'Solidarity Christmas',
    'pb.actions.1.desc': 'Gathering and delivering toys and food for vulnerable families.',
    'pb.actions.2.title': 'Happy Easter',
    'pb.actions.2.desc': 'Distributing chocolates and messages of hope in supported communities.',
    'pb.actions.3.title': 'Social Projects',
    'pb.actions.3.desc': 'Continuous community actions working on moral, educational, and civic foundations.',
    'pb.actions.4.title': 'Humanitarian Campaigns',
    'pb.actions.4.desc': 'Support and humanitarian aid in regions impacted by crises and disasters worldwide.',
    'pb.actions.5.title': 'Child Development',
    'pb.actions.5.desc': 'Football as the main master tool in physical and cognitive child development.',
    'pb.gallery.title': 'Our Gallery',
    'pb.gallery.desc': 'Unforgettable moments in our centers across Brazil and the world.',
    'pb.gallery.soon': 'Coming Soon',
    'pb.cta.title': 'Be Part of this Transformation',
    'pb.cta.btn1': 'Be a Volunteer',
    'pb.cta.btn2': 'Back to Site',

    // Summer Camps Page
    'sc.hero.badge': 'JUNE & JULY · SANGAREE MIDDLE SCHOOL',
    'sc.hero.title1': 'BILU',
    'sc.hero.title2': 'SUMMER CAMPS',
    'sc.hero.subtitle': 'Two trainings per week. An intramural tournament. A summer your child will never forget.',
    'sc.hero.btn1': 'SECURE YOUR SPOT \u2192',
    'sc.hero.btn2': 'SEE PROGRAM DETAILS',
    
    'sc.ticker.1': 'Sangaree Middle School',
    'sc.ticker.2': 'June & July',
    'sc.ticker.3': '2x Per Week',
    'sc.ticker.4': 'Intramural Tournament',
    'sc.ticker.5': 'Limited Spots',
    'sc.ticker.6': 'Open Registration',

    'sc.overview.badge': 'The Program',
    'sc.overview.title': 'PROGRAM OVERVIEW',
    'sc.ov.1.title': 'June & July',
    'sc.ov.1.desc': 'Two full months of elite soccer development',
    'sc.ov.2.title': 'Sangaree Middle School',
    'sc.ov.2.desc': 'Convenient, safe, and familiar location',
    'sc.ov.3.title': '2x Per Week',
    'sc.ov.3.desc': 'Consistent training rhythm that builds real skills',
    'sc.ov.4.title': 'Intramural Tournament',
    'sc.ov.4.desc': 'Compete, win, grow — all within the camp community',

    'sc.features.title': 'WHAT YOUR CHILD WILL EXPERIENCE',
    'sc.feat.1.title': 'Elite Coaching',
    'sc.feat.1.desc': 'Certified coaches with international experience and real passion for player development',
    'sc.feat.2.title': 'Skill Development',
    'sc.feat.2.desc': 'Technical, tactical, and physical training adapted to every age and level',
    'sc.feat.3.title': 'Team Culture',
    'sc.feat.3.desc': 'Build friendships, learn to communicate, and grow as part of a real team',
    'sc.feat.4.title': 'Intramural Tournament',
    'sc.feat.4.desc': 'Every player competes in our internal championship — the highlight of the camp',
    'sc.feat.5.title': 'Safe Environment',
    'sc.feat.5.desc': 'Full supervision, inclusive atmosphere, and care for every individual',
    'sc.feat.6.title': 'Summer Memories',
    'sc.feat.6.desc': 'Games, laughs, growth — an experience that goes way beyond the pitch',

    'sc.global.title1': 'A GLOBAL COMMUNITY, ',
    'sc.global.title2': 'TRAINING TOGETHER',
    'sc.global.desc': 'Our players come from all over the world — soccer is the only language that matters.',

    'sc.join.title1': 'HOW TO ',
    'sc.join.title2': 'JOIN',
    'sc.step.1.num': '01',
    'sc.step.1.title': 'Click Register',
    'sc.step.1.desc': 'Hit the button and fill out the quick sign-up form on PlayMetrics',
    'sc.step.2.num': '02',
    'sc.step.2.title': 'Confirm Your Spot',
    'sc.step.2.desc': 'You\'ll receive a confirmation with all details about location and schedule',
    'sc.step.3.num': '03',
    'sc.step.3.title': 'Show Up Ready',
    'sc.step.3.desc': 'Bring cleats, shin guards, and your best attitude — we handle the rest',
    'sc.step.4.num': '04',
    'sc.step.4.title': 'Play. Compete. Grow.',
    'sc.step.4.desc': 'Train twice a week and compete in our intramural tournament',
    'sc.join.btn': 'REGISTER NOW \u2192',

    'sc.faq.title': 'FREQUENTLY ASKED QUESTIONS',
    'sc.faq.1.q': 'Who can participate?',
    'sc.faq.1.a': 'The camp is open to players of all skill levels. If your child loves soccer, they belong here.',
    'sc.faq.2.q': 'Where exactly is the camp?',
    'sc.faq.2.a': 'Sangaree Middle School. Address and parking details are sent after registration.',
    'sc.faq.3.q': 'How often are the sessions?',
    'sc.faq.3.a': 'Twice per week throughout June and July.',
    'sc.faq.4.q': 'What is the Intramural Tournament?',
    'sc.faq.4.a': 'At the end of the camp, all players compete in an internal championship organized within our own camp community. Every player gets to compete.',
    'sc.faq.5.q': 'What should my child bring?',
    'sc.faq.5.a': 'Cleats, shin guards, socks, water bottle, and athletic clothing. A full list is sent by email after sign-up.',
    'sc.faq.6.q': 'How do I register?',
    'sc.faq.6.a': 'Click any Register button on this page to be redirected to our secure sign-up form on PlayMetrics.',

    'sc.cta.badge': 'Don\'t wait',
    'sc.cta.title': 'DON\'T LET YOUR CHILD MISS THIS SUMMER',
    'sc.cta.subtitle': 'Limited spots available. June & July at Sangaree Middle School.',
    'sc.cta.btn': 'REGISTER NOW \u2192',
    'sc.cta.micro': 'Quick sign-up via PlayMetrics · Secure & easy',
  },
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.programs': 'Programas',
    'nav.tryouts': 'Seletivas',
    'nav.contact': 'Contato',
    'nav.register': 'Inscreva-se',
    
    // Hero Section
    'hero.title1': 'Onde Campeões',
    'hero.title2': 'São Construídos',
    'hero.subtitle': 'Desenvolvimento de futebol juvenil de elite na região de Charleston, SC',
    'hero.cta.primary': 'Inscreva-se Agora',
    'hero.cta.secondary': 'Ver Programas',
    'hero.marquee.1': 'Academia Júnior',
    'hero.marquee.2': 'Seleção',
    'hero.marquee.3': 'Elite',
    'hero.marquee.4': 'Futsal',
    'hero.marquee.5': 'Acampamentos de Verão',
    'hero.marquee.6': 'U4 AO U18',
    
    // AcademyHeroVisual
    'visual.quote': 'Desenvolvendo a próxima geração de jogadores.',
    'visual.card1.title': 'Treinamento',
    'visual.card1.subtitle': 'de Elite',
    'visual.card3.title': 'Caminho Profissional',
    
    // Lead Form
    'form.title': 'Entre em Contato',
    'form.subtitle': 'Interessado em se juntar à Bilu Soccer Academy? Preencha o formulário abaixo e nossa equipe entrará em contato.',
    'form.parentName': 'Nome do Responsável',
    'form.email': 'Endereço de E-mail',
    'form.phone': 'Número de Telefone',
    'form.playerName': 'Nome do Jogador',
    'form.birthYear': 'Ano de Nascimento do Jogador',
    'form.program': 'Programa de Interesse',
    'form.program.notSure': 'Ainda não tenho certeza',
    'form.message': 'Mensagem / Dúvidas',
    'form.messagePlaceholder': 'Como podemos ajudar?',
    'form.submit': 'Enviar Mensagem',
    'form.success.title': 'Mensagem Enviada!',
    'form.success.message': 'Obrigado por entrar em contato. Retornaremos em breve.',
    'form.success.button': 'Enviar outra mensagem',
    'form.error': 'Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.',

    // Projeto Bilu
    'projetobilu.label': '// PROJETO SOCIAL',
    'projetobilu.title': 'O Futebol Que Transforma Vidas',
    'projetobilu.subtitle': 'Projeto BILU é uma iniciativa humanitária global que usa o futebol como ferramenta de transformação social, presente em 10 países e impactando crianças em todo o mundo.',
    'projetobilu.stat1.value': '10',
    'projetobilu.stat1.label': 'Países',
    'projetobilu.stat2.value': '23',
    'projetobilu.stat2.label': 'Núcleos',
    'projetobilu.stat3.value': '153+',
    'projetobilu.stat3.label': 'Voluntários',
    'projetobilu.cta': 'Conheça o Projeto',

    // Sponsors
    'sponsors.title': 'Patrocinadores e Parceiros',
    'sponsors.subtitle': 'Apoiados com orgulho por organizações que acreditam no poder do desenvolvimento juvenil e na transformação social.',
    'sponsors.comingSoon': 'Em Breve',
    'sponsors.becomePartner': 'Seja um Parceiro',

    // Projeto Bilu Page
    'pb.hero.sub1': 'Futebol como instrumento de',
    'pb.hero.sub2': 'transformação humana',
    'pb.scroll': 'Descubra',
    'pb.whatis.title': 'O Que É O ',
    'pb.whatis.titleHighlight': 'Projeto BILU?',
    'pb.whatis.p1': 'O Projeto BILU é uma iniciativa social global fundada pelo Coach PC que usa o futebol como ferramenta para garantir uma infância digna para crianças em situação de vulnerabilidade ao redor do mundo.',
    'pb.whatis.p2.1': 'Atuamos com núcleos permanentes em ',
    'pb.whatis.p2.2': '10 países',
    'pb.whatis.p2.3': ' e campanhas humanitárias pontuais em outros ',
    'pb.whatis.p2.4': '13',
    'pb.whatis.p2.5': ', com um exército de voluntários apaixonados por transformar vidas.',
    'pb.numbers.title': 'Impacto em Números',
    'pb.numbers.l1': 'Países com Núcleos',
    'pb.numbers.l2': 'Países com Ações Pontuais',
    'pb.numbers.l3': 'Países Alcançados',
    'pb.numbers.l4': 'Voluntários (Somente BR)',
    'pb.numbers.l5': 'Núcleos no Brasil',
    'pb.global.title': 'Presença Global',
    'pb.global.desc': 'Onde operamos nossos 10 núcleos permanentes promovendo a inclusão pelo esporte.',
    'pb.global.otherTitle': 'Ações Humanitárias Pontuais em 13 Países',
    'pb.global.otherDesc': 'Bolívia, Colômbia, Uruguai, Paraguai, Costa Rica, El Salvador, Nicarágua, Senegal, Moçambique, Angola, Guiné-Bissau e mais 2...',
    'pb.brazil.title': 'Brasil em Detalhes',
    'pb.brazil.desc': 'Distribuição dos nossos 17 núcleos ao longo do território brasileiro.',
    'pb.brazil.centers': 'Núcleos',
    'pb.brazil.volunteers': 'Voluntários',
    'pb.actions.title': 'O Que Fazemos',
    'pb.actions.1.title': 'Natal Solidário',
    'pb.actions.1.desc': 'Ações de arrecadação e entrega de brinquedos e alimentos para famílias vulneráveis.',
    'pb.actions.2.title': 'Páscoa Feliz',
    'pb.actions.2.desc': 'Distribuição de chocolates e mensagens de esperança nas comunidades apoiadas.',
    'pb.actions.3.title': 'Projetos Sociais',
    'pb.actions.3.desc': 'Ações contínuas junto à comunidade trabalhando as bases morais, educacionais e civis.',
    'pb.actions.4.title': 'Campanhas Humanitárias',
    'pb.actions.4.desc': 'Suporte e ajuda humanitária em regiões impactadas por crises e desastres pelo mundo.',
    'pb.actions.5.title': 'Desenvolvimento Infantil',
    'pb.actions.5.desc': 'O futebol como a principal ferramenta mestra no desenvolvimento físico e cognitivo da criança.',
    'pb.gallery.title': 'Nossa Galeria',
    'pb.gallery.desc': 'Momentos inesquecíveis nos nossos núcleos pelo Brasil e pelo mundo.',
    'pb.gallery.soon': 'Em Breve',
    'pb.cta.title': 'Faça Parte dessa Transformação',
    'pb.cta.btn1': 'Seja Voluntário',
    'pb.cta.btn2': 'Voltar para o Site',

    // Summer Camps Page
    'sc.hero.badge': 'JUNHO E JULHO · SANGAREE MIDDLE SCHOOL',
    'sc.hero.title1': 'BILU',
    'sc.hero.title2': 'SUMMER CAMPS',
    'sc.hero.subtitle': 'Dois treinos por semana. Um torneio interno. Um verão que seu filho nunca esquecerá.',
    'sc.hero.btn1': 'GARANTA SUA VAGA \u2192',
    'sc.hero.btn2': 'VER DETALHES DO PROGRAMA',
    
    'sc.ticker.1': 'Sangaree Middle School',
    'sc.ticker.2': 'Junho e Julho',
    'sc.ticker.3': '2x Por Semana',
    'sc.ticker.4': 'Torneio Interno',
    'sc.ticker.5': 'Vagas Limitadas',
    'sc.ticker.6': 'Inscrições Abertas',

    'sc.overview.badge': 'O Programa',
    'sc.overview.title': 'VISÃO DO PROGRAMA',
    'sc.ov.1.title': 'Junho e Julho',
    'sc.ov.1.desc': 'Dois meses inteiros de desenvolvimento de futebol de elite',
    'sc.ov.2.title': 'Sangaree Middle School',
    'sc.ov.2.desc': 'Localização conveniente, segura e familiar',
    'sc.ov.3.title': '2x Por Semana',
    'sc.ov.3.desc': 'Ritmo de treinamento consistente que constrói habilidades reais',
    'sc.ov.4.title': 'Torneio Interno',
    'sc.ov.4.desc': 'Competição, vitórias e crescimento — tudo dentro da comunidade do acampamento',

    'sc.features.title': 'O QUE O SEU FILHO VAI EXPERIMENTAR',
    'sc.feat.1.title': 'Treinamento de Elite',
    'sc.feat.1.desc': 'Treinadores certificados com experiência internacional e paixão real pelo desenvolvimento de jogadores',
    'sc.feat.2.title': 'Desenvolvimento de Habilidades',
    'sc.feat.2.desc': 'Treinamento técnico, tático e físico adaptado a todas as idades e níveis',
    'sc.feat.3.title': 'Cultura de Equipe',
    'sc.feat.3.desc': 'Construir amizades, aprender a se comunicar e crescer como parte de uma verdadeira equipe',
    'sc.feat.4.title': 'Torneio Interno',
    'sc.feat.4.desc': 'Todo jogador compete no nosso campeonato interno — o grande destaque do acampamento',
    'sc.feat.5.title': 'Ambiente Seguro',
    'sc.feat.5.desc': 'Supervisão total, atmosfera inclusiva e cuidado com cada indivíduo',
    'sc.feat.6.title': 'Memórias de Verão',
    'sc.feat.6.desc': 'Brincadeiras, risadas e crescimento — uma experiência muito além do campo',

    'sc.global.title1': 'UMA COMUNIDADE GLOBAL, ',
    'sc.global.title2': 'TREINANDO JUNTA',
    'sc.global.desc': 'Nossos jogadores vêm de todas as partes do mundo — o futebol é a única linguagem que importa.',

    'sc.join.title1': 'COMO ',
    'sc.join.title2': 'PARTICIPAR',
    'sc.step.1.num': '01',
    'sc.step.1.title': 'Clique em Registrar',
    'sc.step.1.desc': 'Aperte o botão e preencha o rápido formulário de inscrição no PlayMetrics',
    'sc.step.2.num': '02',
    'sc.step.2.title': 'Confirme sua Vaga',
    'sc.step.2.desc': 'Você receberá uma confirmação com todos os detalhes sobre localização e cronograma',
    'sc.step.3.num': '03',
    'sc.step.3.title': 'Esteja Preparado',
    'sc.step.3.desc': 'Traga as chuteiras, as caneleiras e sua melhor atitude — do resto a gente cuida',
    'sc.step.4.num': '04',
    'sc.step.4.title': 'Jogue. Compita. Cresça.',
    'sc.step.4.desc': 'Treine duas vezes por semana e participe do nosso torneio interno',
    'sc.join.btn': 'REGISTRE-SE AGORA \u2192',

    'sc.faq.title': 'PERGUNTAS FREQUENTES',
    'sc.faq.1.q': 'Quem pode participar?',
    'sc.faq.1.a': 'O acampamento é aberto a jogadores de todos os níveis de habilidade. Se seu filho ama futebol, o lugar dele é aqui.',
    'sc.faq.2.q': 'Onde exatamente é o acampamento?',
    'sc.faq.2.a': 'Sangaree Middle School. O endereço e detalhes do estacionamento serão enviados após a inscrição.',
    'sc.faq.3.q': 'Com que frequência são os treinos?',
    'sc.faq.3.a': 'Duas vezes por semana durante junho e julho.',
    'sc.faq.4.q': 'O que é o Torneio Interno?',
    'sc.faq.4.a': 'No final do acampamento, todos os jogadores competem num campeonato interno organizado dentro da nossa própria comunidade do acampamento.',
    'sc.faq.5.q': 'O que o meu filho deve levar?',
    'sc.faq.5.a': 'Chuteiras, caneleiras, meião, garrafa de água e roupas de treino. Uma lista completa é enviada por e-mail após a inscrição.',
    'sc.faq.6.q': 'Como faço para me inscrever?',
    'sc.faq.6.a': 'Clique em qualquer botão de Registro nesta página para ser redirecionado para nosso formulário seguro de inscrição no PlayMetrics.',

    'sc.cta.badge': 'Não espere',
    'sc.cta.title': 'NÃO DEIXE SEU FILHO PERDER ESTE VERÃO',
    'sc.cta.subtitle': 'Vagas limitadas. Junho e Julho no Sangaree Middle School.',
    'sc.cta.btn': 'REGISTRE-SE AGORA \u2192',
    'sc.cta.micro': 'Inscrição rápida pelo PlayMetrics · Seguro e fácil',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.programs': 'Programas',
    'nav.tryouts': 'Pruebas',
    'nav.contact': 'Contacto',
    'nav.register': 'Regístrate',
    
    // Hero Section
    'hero.title1': 'Donde los Campeones',
    'hero.title2': 'Se Construyen',
    'hero.subtitle': 'Desarrollo de fútbol juvenil de élite en el área de Charleston, SC',
    'hero.cta.primary': 'Regístrate Ahora',
    'hero.cta.secondary': 'Ver Programas',
    'hero.marquee.1': 'Academia Junior',
    'hero.marquee.2': 'Selección',
    'hero.marquee.3': 'Élite',
    'hero.marquee.4': 'Futsal',
    'hero.marquee.5': 'Campamentos de Verano',
    'hero.marquee.6': 'U4 AL U18',
    
    // AcademyHeroVisual
    'visual.quote': 'Desarrollando la próxima generación de jugadores.',
    'visual.card1.title': 'Entrenamiento',
    'visual.card1.subtitle': 'de Élite',
    'visual.card3.title': 'Camino Profesional',
    
    // Lead Form
    'form.title': 'Ponte en Contacto',
    'form.subtitle': '¿Interesado en unirte a Bilu Soccer Academy? Completa el formulario a continuación y nuestro equipo se comunicará contigo.',
    'form.parentName': 'Nombre del Padre/Tutor',
    'form.email': 'Correo Electrónico',
    'form.phone': 'Número de Teléfono',
    'form.playerName': 'Nombre del Jugador',
    'form.birthYear': 'Año de Nacimiento del Jugador',
    'form.program': 'Programa de Interés',
    'form.program.notSure': 'Aún no estoy seguro',
    'form.message': 'Mensaje / Preguntas',
    'form.messagePlaceholder': '¿Cómo podemos ayudarte?',
    'form.submit': 'Enviar Mensaje',
    'form.success.title': '¡Mensaje Enviado!',
    'form.success.message': 'Gracias por contactarnos. Nos comunicaremos contigo en breve.',
    'form.success.button': 'Enviar otro mensaje',
    'form.error': 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',

    // Projeto Bilu
    'projetobilu.label': '// PROYECTO SOCIAL',
    'projetobilu.title': 'El Fútbol Que Transforma Vidas',
    'projetobilu.subtitle': 'Proyecto BILU es una iniciativa humanitaria global que usa el fútbol como herramienta de transformación social, presente en 10 países e impactando niños en todo el mundo.',
    'projetobilu.stat1.value': '10',
    'projetobilu.stat1.label': 'Países',
    'projetobilu.stat2.value': '23',
    'projetobilu.stat2.label': 'Centros',
    'projetobilu.stat3.value': '153+',
    'projetobilu.stat3.label': 'Voluntarios',
    'projetobilu.cta': 'Conoce el Proyecto',

    // Sponsors
    'sponsors.title': 'Nuestros Socios y Patrocinadores',
    'sponsors.subtitle': 'Apoyados con orgullo por organizaciones que creen en el poder del desarrollo juvenil y la transformación social.',
    'sponsors.comingSoon': 'Próximamente',
    'sponsors.becomePartner': 'Conviértete en Socio',

    // Projeto Bilu Page
    'pb.hero.sub1': 'El fútbol como instrumento de',
    'pb.hero.sub2': 'transformación humana',
    'pb.scroll': 'Descubre',
    'pb.whatis.title': '¿Qué es el ',
    'pb.whatis.titleHighlight': 'Proyecto BILU?',
    'pb.whatis.p1': 'El Proyecto BILU es una iniciativa social global fundada por el Coach PC que utiliza el fútbol como herramienta para garantizar una infancia digna a niños vulnerables en todo el mundo.',
    'pb.whatis.p2.1': 'Operamos con centros permanentes en ',
    'pb.whatis.p2.2': '10 países',
    'pb.whatis.p2.3': ' y campañas humanitarias puntuales en otros ',
    'pb.whatis.p2.4': '13',
    'pb.whatis.p2.5': ', con un ejército de voluntarios apasionados por transformar vidas.',
    'pb.numbers.title': 'Impacto en Números',
    'pb.numbers.l1': 'Países con Centros',
    'pb.numbers.l2': 'Países con Campañas',
    'pb.numbers.l3': 'Países Alcanzados',
    'pb.numbers.l4': 'Voluntarios (Solo BR)',
    'pb.numbers.l5': 'Centros en Brasil',
    'pb.global.title': 'Presencia Global',
    'pb.global.desc': 'Donde operamos nuestros 10 centros permanentes promoviendo la inclusión a través del deporte.',
    'pb.global.otherTitle': 'Campañas Humanitarias en 13 Países',
    'pb.global.otherDesc': 'Bolivia, Colombia, Uruguay, Paraguay, Costa Rica, El Salvador, Nicaragua, Senegal, Mozambique, Angola, Guinea-Bisáu y 2 más...',
    'pb.brazil.title': 'Brasil en Detalle',
    'pb.brazil.desc': 'Distribución de nuestros 17 centros a lo largo del territorio brasileño.',
    'pb.brazil.centers': 'Centros',
    'pb.brazil.volunteers': 'Voluntarios',
    'pb.actions.title': 'Lo Que Hacemos',
    'pb.actions.1.title': 'Navidad Solidaria',
    'pb.actions.1.desc': 'Recolección y entrega de juguetes y alimentos para familias vulnerables.',
    'pb.actions.2.title': 'Feliz Pascua',
    'pb.actions.2.desc': 'Distribución de chocolates y mensajes de esperanza en las comunidades apoyadas.',
    'pb.actions.3.title': 'Proyectos Sociales',
    'pb.actions.3.desc': 'Acciones comunitarias continuas trabajando en bases morales, educativas y cívicas.',
    'pb.actions.4.title': 'Campañas Humanitarias',
    'pb.actions.4.desc': 'Apoyo y ayuda humanitaria en regiones afectadas por crisis y desastres en todo el mundo.',
    'pb.actions.5.title': 'Desarrollo Infantil',
    'pb.actions.5.desc': 'El fútbol como herramienta principal en el desarrollo físico y cognitivo infantil.',
    'pb.gallery.title': 'Nuestra Galería',
    'pb.gallery.desc': 'Momentos inolvidables en nuestros centros por Brasil y el mundo.',
    'pb.gallery.soon': 'Próximamente',
    'pb.cta.title': 'Sé Parte de esta Transformación',
    'pb.cta.btn1': 'Sé un Voluntario',
    'pb.cta.btn2': 'Volver al Sitio',

    // Summer Camps Page
    'sc.hero.badge': 'JUNIO Y JULIO · SANGAREE MIDDLE SCHOOL',
    'sc.hero.title1': 'BILU',
    'sc.hero.title2': 'SUMMER CAMPS',
    'sc.hero.subtitle': 'Dos entrenamientos por semana. Un torneo interno. Un verano que tu hijo nunca olvidará.',
    'sc.hero.btn1': 'ASEGURA TU LUGAR \u2192',
    'sc.hero.btn2': 'VER DETALLES DEL PROGRAMA',
    
    'sc.ticker.1': 'Sangaree Middle School',
    'sc.ticker.2': 'Junio y Julio',
    'sc.ticker.3': '2x Por Semana',
    'sc.ticker.4': 'Torneo Interno',
    'sc.ticker.5': 'Cupos Limitados',
    'sc.ticker.6': 'Inscripciones Abiertas',

    'sc.overview.badge': 'El Programa',
    'sc.overview.title': 'RESUMEN DEL PROGRAMA',
    'sc.ov.1.title': 'Junio y Julio',
    'sc.ov.1.desc': 'Dos meses completos de desarrollo de fútbol de élite',
    'sc.ov.2.title': 'Sangaree Middle School',
    'sc.ov.2.desc': 'Ubicación conveniente, segura y familiar',
    'sc.ov.3.title': '2x Por Semana',
    'sc.ov.3.desc': 'Ritmo de entrenamiento constante que construye habilidades reales',
    'sc.ov.4.title': 'Torneo Interno',
    'sc.ov.4.desc': 'Compite, gana, crece — todo dentro de la comunidad del campamento',

    'sc.features.title': 'LO QUE EXPERIMENTARÁ TU HIJO',
    'sc.feat.1.title': 'Entrenamiento de Élite',
    'sc.feat.1.desc': 'Entrenadores certificados con experiencia internacional y verdadera pasión por el desarrollo',
    'sc.feat.2.title': 'Desarrollo de Habilidades',
    'sc.feat.2.desc': 'Entrenamiento técnico, táctico y físico adaptado a todas las edades y niveles',
    'sc.feat.3.title': 'Cultura de Equipo',
    'sc.feat.3.desc': 'Construir amistades, aprender a comunicarse y crecer como parte de un verdadero equipo',
    'sc.feat.4.title': 'Torneo Interno',
    'sc.feat.4.desc': 'Cada jugador compite en nuestro campeonato interno — lo más destacado del campamento',
    'sc.feat.5.title': 'Entorno Seguro',
    'sc.feat.5.desc': 'Supervisión completa, ambiente inclusivo y cuidado individual',
    'sc.feat.6.title': 'Recuerdos de Verano',
    'sc.feat.6.desc': 'Juegos, risas y crecimiento — una experiencia que va mucho más allá de la cancha',

    'sc.global.title1': 'UNA COMUNIDAD GLOBAL, ',
    'sc.global.title2': 'ENTRENANDO JUNTOS',
    'sc.global.desc': 'Nuestros jugadores provienen de todas partes del mundo — el fútbol es el único lenguaje que importa.',

    'sc.join.title1': 'CÓMO ',
    'sc.join.title2': 'UNIRSE',
    'sc.step.1.num': '01',
    'sc.step.1.title': 'Haz Clic en Registrar',
    'sc.step.1.desc': 'Presiona el botón y completa el rápido formulario de registro en PlayMetrics',
    'sc.step.2.num': '02',
    'sc.step.2.title': 'Confirma tu Asiento',
    'sc.step.2.desc': 'Recibirás una confirmación con todos los detalles de ubicación y horarios',
    'sc.step.3.num': '03',
    'sc.step.3.title': 'Llega Preparado',
    'sc.step.3.desc': 'Trae tacos, espinilleras y tu mejor actitud — nosotros nos encargamos del resto',
    'sc.step.4.num': '04',
    'sc.step.4.title': 'Juega. Compite. Crece.',
    'sc.step.4.desc': 'Entrena dos veces por semana y compite en nuestro torneo.',
    'sc.join.btn': 'REGÍSTRATE AHORA \u2192',

    'sc.faq.title': 'PREGUNTAS FRECUENTES',
    'sc.faq.1.q': '¿Quién puede participar?',
    'sc.faq.1.a': 'El campamento está abierto a jugadores de todos los niveles de habilidad. Si a tu hijo le encanta el fútbol, su lugar está aquí.',
    'sc.faq.2.q': '¿Dónde es exactamente el campamento?',
    'sc.faq.2.a': 'Sangaree Middle School. La dirección y los detalles de estacionamiento se envían después del registro.',
    'sc.faq.3.q': '¿Con qué frecuencia son las sesiones?',
    'sc.faq.3.a': 'Dos veces por semana durante junio y julio.',
    'sc.faq.4.q': '¿Qué es el Torneo Interno?',
    'sc.faq.4.a': 'Al final del campamento, todos los jugadores compiten en un campeonato interno organizado dentro de la propia comunidad del camp.',
    'sc.faq.5.q': '¿Qué debe llevar mi hijo/a?',
    'sc.faq.5.a': 'Tacos, espinilleras, calcetines, botella de agua y ropa deportiva. Se enviará una lista completa por email tras registrarte.',
    'sc.faq.6.q': '¿Cómo me inscribo?',
    'sc.faq.6.a': 'Haz clic en cualquier botón de Registro de esta página para ir a nuestro formulario seguro en PlayMetrics.',

    'sc.cta.badge': 'No esperes',
    'sc.cta.title': 'NO DEJES QUE TU HIJO SE PIERDA ESTE VERANO',
    'sc.cta.subtitle': 'Cupos limitados. Junio y Julio en Sangaree Middle School.',
    'sc.cta.btn': 'REGÍSTRATE AHORA \u2192',
    'sc.cta.micro': 'Inscripción rápida a través de PlayMetrics · Seguro y fácil',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage if available
    const savedLang = localStorage.getItem('bisa_language') as Language;
    if (savedLang && ['en', 'pt', 'es'].includes(savedLang)) {
      // @ts-ignore
      // eslint-disable-next-line
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('bisa_language', lang);
  };

  const t = (key: string): string => {
    // Return translation or fallback to key if not found
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
