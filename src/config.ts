export const PERSOONLIJKE_INFO = {
    Voornaam        : "Rob",
    Achternaam      : "Stolte",
    Geboortejaar    : 1989,
    GeboorteMaand   : 12,
    GeboorteDag     : 27,
    Email           : "contact@robstolte.nl",
    profielfoto     : "https://a.storyblok.com/f/253533/4750x4750/fa15b61404/profiel2023-groot.png"
}

export const SIDE_BAR_MENU = [
        { id: 'home',  slug: '',        icon: 'IconHome'   },
        { id: 'blog',  slug: 'blog',    icon: 'IconBlog'   },
        { id: 'cv',    slug: 'cv',      icon: 'IconCVList' },
        { id: 'games', slug: 'games',   icon: 'IconSteam'  },
    ];
export const CONTACT_METHODS = [
        { id: 'email',    url: `mailto:${PERSOONLIJKE_INFO.Email}`,       ariaLabel:'Email',      titel: 'Stuur me een mailtje!',         icon: 'IconEmail'     },
        { id: 'linkedin', url: 'https://www.linkedin.com/in/rob-stolte/', ariaLabel:'LinkedIn',   titel: 'Bekijk mijn LinkedIn profiel!', icon: 'IconLinkedin'  },
        { id: 'github',   url: 'https://github.com/RobStolte',            ariaLabel:'GitHub',     titel: 'Bekijk mijn GitHub profiel!',   icon: 'IconGithub'    },
        { id: 'twitter',  url: 'https://twitter.com/pomp0m',              ariaLabel:'Twitter',    titel: 'Bekijk mijn Twitter profiel!',  icon: 'IconTwitter'   },
        { id: 'paypal',   url: 'https://paypal.me/RobStolte',             ariaLabel:'PayPal',     titel: 'Doneer via PayPal!',            icon: 'IconPaypal'    }
    ]
export const FAVICON = "https://a.storyblok.com/f/253533/128x130/2e98d96a6e/familiewapen-stolte-128.png";
export const SITE_TITLE = `Portfolio | ${PERSOONLIJKE_INFO.Voornaam} ${PERSOONLIJKE_INFO.Achternaam}`;
export const SITE_DESCRIPTION = `Een portfolio website van ${PERSOONLIJKE_INFO.Voornaam} ${PERSOONLIJKE_INFO.Achternaam}, waar je meer informatie kan vinden over mijn werk en hobby\'s. Ook kan je hier mijn contactgegevens vinden.`;