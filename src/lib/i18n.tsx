import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, string>;

const pt: Dict = {
  // Header nav
  "nav.about": "Sobre",
  "nav.experience": "Experiência",
  "nav.education": "Formação",
  "nav.certifications": "Certificações",
  "nav.skills": "Habilidades",
  "nav.projects": "Projetos",
  "nav.contact": "Contato",
  "nav.menu": "Menu",
  "nav.toggleTheme": "Alternar tema",
  "nav.toggleLang": "Mudar para inglês",

  // Hero
  // Hero
  "hero.greeting": "Olá, eu sou",
  "hero.description":
    "Estagiário de QA na CESAR, com foco em automação de testes para web e mobile. Estudante de Análise e Desenvolvimento de Sistemas na CESAR School.",
  "hero.cta": "Ver Projetos",
  "hero.stat.experience": "Experiência em QA",
  "hero.stat.certified": "Certificado",
  "hero.stat.focus": "Mentalidade QA",
  "hero.stat.focusValue": "Detalhista",

  // Skill tags (shared)
  "skill.testAutomation": "Automação de Testes",
  "skill.manualTesting": "Testes Manuais",
  "skill.testPlanning": "Planejamento de Testes",
  "skill.testManagement": "Gestão de Testes",
  "skill.apiTesting": "Testes de API",
  "skill.teamwork": "Trabalho em Equipe",
  "skill.logistics": "Logística",
  "skill.processMgmt": "Gestão de Processos",
  "skill.communication": "Comunicação",
  "skill.gameDev": "Desenvolvimento de Jogos",
  "skill.gameDesign": "Game Design",
  "skill.prototyping": "Prototipação",
  "skill.itSupport": "Suporte de TI",
  "skill.hrAssist": "Assistência de RH",
  "skill.organization": "Organização",

  // About
  "about.index": "01",
  "about.title": "Sobre Mim",
  "about.p1.a": "Sou um ",
  "about.p1.role": "QA Engineer em formação",
  "about.p1.b": ", atualmente como estagiário no ",
  "about.p1.cesar": "CESAR",
  "about.p1.c":
    " — um dos maiores centros de inovação do Brasil. Trabalho com automação de testes web (Selenium + Pytest) e mobile (Appium + Pytest), além de testes manuais, planejamento e gestão de testes.",
  "about.p2.a": "Meu caminho começou no ",
  "about.p2.gamedev": "desenvolvimento de jogos",
  "about.p2.b":
    " — passei anos construindo experiências em Unity e C#, participando de game jams e projetos universitários. Essa base em criar coisas que precisam funcionar perfeitamente me trouxe naturalmente para a QA: hoje meu prazer é encontrar os bugs antes que cheguem ao usuário final.",
  "about.badge.ctfl": "Certified Tester Foundation Level (CTFL)",
  "about.badge.istqb": "ISTQB®",
  "about.badge.ads": "Análise e Desenvolvimento de Sistemas",
  "about.card.passion.tag": "// paixão",
  "about.card.passion.body": "Caça aos bugs & engenharia de qualidade",
  "about.card.background.tag": "// background",
  "about.card.background.body": "Game Dev — Unity, C#, Game Design",
  "about.card.languages.tag": "// idiomas",
  "about.lang.pt": "Português",
  "about.lang.ptLevel": "Nativo",
  "about.lang.en": "Inglês",
  "about.lang.enLevel": "Profissional pleno",

  // Experience
  "exp.index": "02",
  "exp.title": "Experiência Atual",
  "exp.subtitle": "Onde estou aprendendo, quebrando e consertando agora.",
  "exp.role": "Estagiário de QA",
  "exp.tag": "\"O centro mais avançado de inovação e conhecimento do Brasil\"",
  "exp.period": "Jul 2025 — Presente",
  "exp.location": "Recife, PE",
  "exp.type": "Estágio",
  "exp.body.a":
    "Desenvolvendo e aplicando conceitos de testes manuais e automatizados na prática. Criação de casos de teste automatizados para web com ",
  "exp.body.sel": "Selenium + Pytest",
  "exp.body.b": " e para dispositivos mobile com ",
  "exp.body.app": "Appium + Pytest",
  "exp.body.c": ". ",
  "exp.body.d":
    "Além de testes manuais para sistemas iOS e macOS com testes automatizados com Swift e XCUITests.",

  // Certifications
  "cert.index": "04",
  "cert.title": "Certificações",
  "cert.subtitle": "Reconhecimento formal das competências em qualidade de software.",
  "cert.international": "Certificação Internacional",
  "cert.fullName": "Certified Tester Foundation Level",
  "cert.body":
    " pelo International Software Testing Qualifications Board — o padrão global para profissionais de QA, reconhecido em mais de 130 países.",
  "cert.link": "Sobre o ISTQB",

  // Education
  "edu.index": "03",
  "edu.title": "Formação",
  "edu.status.ongoing": "Em andamento",
  "edu.status.done": "Concluído",
  "edu.cesar.course": "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  "edu.cesar.period": "Ago 2024 — Dez 2026",
  "edu.cesar.note":
    "Uma das escolas de tecnologia mais inovadoras do Brasil, ligada ao CESAR — centro de inovação referência nacional.",
  "edu.unicap.course": "Tecnólogo em Jogos Digitais",
  "edu.unicap.period": "Ago 2021 — Jun 2024",
  "edu.unicap.note":
    "Formação em desenvolvimento de jogos digitais, com projetos de RA, game design e programação.",

  // Skills
  "skills.index": "05",
  "skills.title": "Stack de QA",
  "skills.subtitle": "Ferramentas e práticas que uso no dia a dia.",
  "skills.group.automation": "Automação de Testes",
  "skills.group.types": "Tipos de Teste",
  "skills.item.manual": "Testes Manuais",
  "skills.item.api": "Testes de API (REST)",
  "skills.item.mobile": "Testes Mobile",
  "skills.item.web": "Testes Web",
  "skills.item.mgmt": "Planejamento e Gestão de Testes",

  // Projects
  "projects.index": "06",
  "projects.title": "Projetos",
  "projects.p1.desc":
    "Projeto de automação de testes para a plataforma Swag Labs usando Python e Pytest.",
  "projects.p2.desc": "Projeto de automação de testes desenvolvido no contexto do CESAR.",
  "projects.p3.name": "Casos de Teste",
  "projects.p3.desc":
    "Planilha de casos de teste e documentação de QA — planejamento, rastreabilidade e cobertura de testes.",
  "projects.p4.desc":
    "Jogo desenvolvido em Unity e publicado na itch.io, da minha fase de desenvolvimento de jogos.",

  // Timeline
  "tl.index": "07",
  "tl.title": "Histórico Profissional",
  "tl.j1.role": "Estagiário de QA",
  "tl.j1.period": "Jul 2025 — Presente",
  "tl.j1.location": "Recife, PE",
  "tl.j1.desc":
    "Estágio em Quality Assurance no CESAR, um dos maiores centros de inovação do Brasil. Atuo no desenvolvimento e execução de testes manuais e automatizados, com foco em automação web (Selenium + Pytest) e mobile (Appium + Pytest). Aplico na prática conceitos do CTFL — ISTQB® em planejamento, design e gestão de testes.",
  "tl.j2.role": "Jovem Aprendiz",
  "tl.j2.period": "Jun 2024 — Jul 2025",
  "tl.j2.location": "Recife, PE",
  "tl.j2.desc":
    "Atuei em rotinas administrativas e logísticas dentro da operação da Unilever, apoiando o time na gestão de processos, controle de documentos e organização de fluxos diários. Desenvolvi visão de processo, trabalho em equipe e atenção aos detalhes — habilidades que hoje aplico diretamente em QA.",
  "tl.j3.role": "Desenvolvedor de Jogos",
  "tl.j3.period": "Mar 2022 — Jul 2022",
  "tl.j3.location": "Recife, PE · Híbrido",
  "tl.j3.desc":
    "Participei do desenvolvimento de projetos em Unity e C# dentro da agência universitária, contribuindo em game design, prototipação rápida e implementação de mecânicas. Essa experiência me fez entender de perto a importância de iterar, testar e validar — base que me trouxe naturalmente para a área de qualidade de software.",
  "tl.j4.role": "Assistente Administrativo",
  "tl.j4.period": "Abr 2021 — Jan 2022",
  "tl.j4.location": "Jaboatão dos Guararapes, PE",
  "tl.j4.desc":
    "Apoiei áreas de TI e Recursos Humanos com suporte administrativo, organização de processos internos e atendimento a colaboradores. Foi minha primeira experiência profissional formal, onde desenvolvi responsabilidade, organização e a base do raciocínio analítico.",

  // Contact
  "contact.index": "08",
  "contact.title": "Contato",
  "contact.subtitle":
    "Vamos conversar sobre QA, automação, jogos ou qualquer bug inesperado.",
  "contact.quote.a": "\"Qualidade não é um ato,",
  "contact.quote.b": "é um ",
  "contact.quote.habit": "hábito",
  "contact.quote.c": ".\"",
  "contact.cta": "Enviar mensagem",
  "contact.label.email": "Email",
  "contact.label.phone": "Telefone",
  "contact.label.location": "Localização",
  "contact.location.value": "Recife, PE — Brasil",

  // Footer
  "footer.title": "Veja meu currículo",
  "footer.sub": "Currículo completo em PDF.",
  "footer.cta": "Baixar Currículo",
};

const en: Dict = {
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.education": "Education",
  "nav.certifications": "Certifications",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "nav.toggleTheme": "Toggle theme",
  "nav.toggleLang": "Switch to Portuguese",

  "hero.greeting": "Hi, I'm",
  "hero.description":
    "QA Intern at CESAR, focused on test automation for web and mobile. Systems Analysis & Development student at CESAR School.",
  "hero.cta": "See Projects",
  "hero.stat.experience": "QA Experience",
  "hero.stat.certified": "Certified",
  "hero.stat.focus": "QA Mindset",
  "hero.stat.focusValue": "Detail-Oriented",

  "skill.testAutomation": "Test Automation",
  "skill.manualTesting": "Manual Testing",
  "skill.testPlanning": "Test Planning",
  "skill.testManagement": "Test Management",
  "skill.apiTesting": "API Testing",
  "skill.teamwork": "Teamwork",
  "skill.logistics": "Logistics",
  "skill.processMgmt": "Process Management",
  "skill.communication": "Communication",
  "skill.gameDev": "Game Development",
  "skill.gameDesign": "Game Design",
  "skill.prototyping": "Prototyping",
  "skill.itSupport": "IT Support",
  "skill.hrAssist": "HR Assistance",
  "skill.organization": "Organization",

  "about.index": "01",
  "about.title": "About Me",
  "about.p1.a": "I'm a ",
  "about.p1.role": "QA Engineer in training",
  "about.p1.b": ", currently a QA intern at ",
  "about.p1.cesar": "CESAR",
  "about.p1.c":
    " — one of the largest innovation centers in Brazil. I work on web test automation (Selenium + Pytest) and mobile (Appium + Pytest), as well as manual testing, planning and test management.",
  "about.p2.a": "My path started in ",
  "about.p2.gamedev": "game development",
  "about.p2.b":
    " — I spent years building experiences in Unity and C#, taking part in game jams and university projects. That foundation of building things that have to work perfectly led me naturally into QA: today my pleasure is finding bugs before they reach the end user.",
  "about.badge.ctfl": "Certified Tester Foundation Level (CTFL)",
  "about.badge.istqb": "ISTQB®",
  "about.badge.ads": "Systems Analysis & Development",
  "about.card.passion.tag": "// passion",
  "about.card.passion.body": "Bug hunting & quality engineering",
  "about.card.background.tag": "// background",
  "about.card.background.body": "Game Dev — Unity, C#, Game Design",
  "about.card.languages.tag": "// languages",
  "about.lang.pt": "Portuguese",
  "about.lang.ptLevel": "Native",
  "about.lang.en": "English",
  "about.lang.enLevel": "Full Professional",

  "exp.index": "02",
  "exp.title": "Current Experience",
  "exp.subtitle": "Where I'm learning, breaking and fixing right now.",
  "exp.role": "QA Intern",
  "exp.tag": "\"The most advanced center for innovation and knowledge in Brazil\"",
  "exp.period": "Jul 2025 — Present",
  "exp.location": "Recife, PE",
  "exp.type": "Internship",
  "exp.body.a":
    "Developing and applying manual and automated testing concepts in practice. Building automated test cases for web with ",
  "exp.body.sel": "Selenium + Pytest",
  "exp.body.b": " and for mobile devices with ",
  "exp.body.app": "Appium + Pytest",
  "exp.body.c": ". ",
  "exp.body.d":
    "Plus manual testing for iOS and macOS systems, and automated testing with Swift and XCUITests.",

  "cert.index": "04",
  "cert.title": "Certifications",
  "cert.subtitle": "Formal recognition of software quality skills.",
  "cert.international": "International Certification",
  "cert.fullName": "Certified Tester Foundation Level",
  "cert.body":
    " by the International Software Testing Qualifications Board — the global standard for QA professionals, recognized in more than 130 countries.",
  "cert.link": "About ISTQB",

  "edu.index": "03",
  "edu.title": "Education",
  "edu.status.ongoing": "In progress",
  "edu.status.done": "Completed",
  "edu.cesar.course": "Associate Degree in Systems Analysis & Development",
  "edu.cesar.period": "Aug 2024 — Dec 2026",
  "edu.cesar.note":
    "One of Brazil's most innovative tech schools, tied to CESAR — a national reference innovation center.",
  "edu.unicap.course": "Associate Degree in Digital Games",
  "edu.unicap.period": "Aug 2021 — Jun 2024",
  "edu.unicap.note":
    "Training in digital game development, with AR projects, game design and programming.",

  "skills.index": "05",
  "skills.title": "QA Stack",
  "skills.subtitle": "Tools and practices I use day-to-day.",
  "skills.group.automation": "Test Automation",
  "skills.group.types": "Testing Types",
  "skills.item.manual": "Manual Testing",
  "skills.item.api": "API Testing (REST)",
  "skills.item.mobile": "Mobile Testing",
  "skills.item.web": "Web Testing",
  "skills.item.mgmt": "Test Planning & Management",

  "projects.index": "06",
  "projects.title": "Projects",
  "projects.p1.desc":
    "Test automation project for the Swag Labs platform using Python and Pytest.",
  "projects.p2.desc": "Test automation project built in the CESAR context.",
  "projects.p3.name": "Test Cases",
  "projects.p3.desc":
    "Test case spreadsheet and QA documentation — test planning, traceability and coverage.",
  "projects.p4.desc":
    "Game built in Unity and published on itch.io, from my game development days.",

  "tl.index": "07",
  "tl.title": "Work History",
  "tl.j1.role": "QA Intern",
  "tl.j1.period": "Jul 2025 — Present",
  "tl.j1.location": "Recife, PE",
  "tl.j1.desc":
    "QA internship at CESAR, one of Brazil's largest innovation centers. I work on the development and execution of manual and automated tests, focusing on web automation (Selenium + Pytest) and mobile (Appium + Pytest). I apply CTFL — ISTQB® concepts in planning, design and test management.",
  "tl.j2.role": "Young Apprentice",
  "tl.j2.period": "Jun 2024 — Jul 2025",
  "tl.j2.location": "Recife, PE",
  "tl.j2.desc":
    "I worked on administrative and logistics routines inside Unilever's operation, supporting the team in process management, document control and daily flow organization. I developed process awareness, teamwork and attention to detail — skills I now apply directly in QA.",
  "tl.j3.role": "Game Developer",
  "tl.j3.period": "Mar 2022 — Jul 2022",
  "tl.j3.location": "Recife, PE · Hybrid",
  "tl.j3.desc":
    "I took part in Unity and C# projects inside the university agency, contributing to game design, fast prototyping and mechanics implementation. This experience showed me up close the importance of iterating, testing and validating — the base that brought me naturally into software quality.",
  "tl.j4.role": "Administrative Assistant",
  "tl.j4.period": "Apr 2021 — Jan 2022",
  "tl.j4.location": "Jaboatão dos Guararapes, PE",
  "tl.j4.desc":
    "I supported IT and HR areas with administrative help, internal process organization and employee support. It was my first formal professional experience, where I built responsibility, organization and the base of analytical reasoning.",

  "contact.index": "08",
  "contact.title": "Contact",
  "contact.subtitle":
    "Let's talk about QA, automation, games or any unexpected bug.",
  "contact.quote.a": "\"Quality is not an act,",
  "contact.quote.b": "it's a ",
  "contact.quote.habit": "habit",
  "contact.quote.c": ".\"",
  "contact.cta": "Send a message",
  "contact.label.email": "Email",
  "contact.label.phone": "Phone",
  "contact.label.location": "Location",
  "contact.location.value": "Recife, PE — Brazil",

  "footer.title": "Take a look at my resume",
  "footer.sub": "Full résumé as PDF.",
  "footer.cta": "Download Resume",
};

const dicts: Record<Lang, Dict> = { pt, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (k: string) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
    }
  };
  const toggle = () => setLang(lang === "pt" ? "en" : "pt");
  const t = (k: string) => dicts[lang][k] ?? dicts.pt[k] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, toggle, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
