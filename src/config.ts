export const PERSOONLIJKE_INFO = {
    Voornaam: "Rob",
    Achternaam: "Stolte",
    Geboortejaar: 1989,
    GeboorteMaand: 12,
    GeboorteDag: 27,
    Email: "contact@robstolte.nl"
}

export const SIDE_BAR_MENU = [
        { id: 'home',       icon: 'fa-solid fa-house',          slug: '' },
        { id: 'projecten',  icon: 'fa-solid fa-diagram-project',slug: 'projecten' },
        { id: 'blog',       icon: 'fa-solid fa-newspaper',      slug: 'blog' },
        { id: 'cv',         icon: 'fa-solid fa-address-card',   slug: 'cv' }
    ];
    export const CONTACT_METHODS = [
        { id: 'email',      icon: 'fa-solid  fa-envelope', url: `mailto:${PERSOONLIJKE_INFO.Email}`,       ariaLabel:'Email',      titel: 'Stuur me een mailtje!' },
        { id: 'linkedin',   icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/rob-stolte/', ariaLabel:'LinkedIn',   titel: 'Bekijk mijn LinkedIn profiel!' },
        { id: 'github',     icon: 'fa-brands fa-github',   url: 'https://github.com/RobStolte',            ariaLabel:'GitHub',     titel: 'Bekijk mijn GitHub profiel!' },
        { id: 'twitter',    icon: 'fa-brands fa-twitter',  url: 'https://twitter.com/pomp0m',              ariaLabel:'Twitter',    titel: 'Bekijk mijn Twitter profiel!' },
        { id: 'paypal',     icon: 'fa-brands fa-paypal',   url: 'https://paypal.me/RobStolte',             ariaLabel:'PayPal',     titel: 'Doneer via PayPal!' }
    ]
export const FAVICON = "https://a.storyblok.com/f/253533/128x130/2e98d96a6e/familiewapen-stolte-128.png";
export const SITE_TITLE = `Portfolio | ${PERSOONLIJKE_INFO.Voornaam} ${PERSOONLIJKE_INFO.Achternaam}`;
export const SITE_DESCRIPTION = `Een portfolio website van ${PERSOONLIJKE_INFO.Voornaam} ${PERSOONLIJKE_INFO.Achternaam}, waar je meer informatie kan vinden over mijn werk en hobby\'s. Ook kan je hier mijn contactgegevens vinden.`;