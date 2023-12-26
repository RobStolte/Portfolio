export const PERSOONLIJKE_INFO = {
    Voornaam: "Rob",
    Achternaam: "Stolte",
    Geboortejaar: 1989,
    GeboorteMaand: 12,
    GeboorteDag: 27,
    Email: "contact@robstolte.nl"
}
export const SIDE_BAR_MENU = [
    { id: 'home', icon: 'fas fa-house-user', slug: '' },
    { id: 'projecten', icon: 'fab fa-product-hunt', slug: 'projecten' },
    { id: 'blog', icon: 'fab fa-blogger-b', slug: 'blog' },
        { id: 'cv', icon: 'fas fa-list-check', slug: 'cv' }
    ];
    export const CONTACT_METHODS = [
        { id: 'email', icon: 'fas fa-envelope', url: `mailto:${PERSOONLIJKE_INFO.Email}`, ariaLabel:'Email', titel: 'Stuur me een mailtje!' },
        { id: 'linkedin', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/rob-stolte/', ariaLabel:'LinkedIn', titel: 'Bekijk mijn LinkedIn profiel!' },
        { id: 'github', icon: 'fab fa-github', url: 'https://github.com/RobStolte', ariaLabel:'GitHub', titel: 'Bekijk mijn GitHub profiel!' },
        { id: 'twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/pomp0m', ariaLabel:'Twitter', titel: 'Bekijk mijn Twitter profiel!' },
        { id: 'paypal', icon: 'fab fa-paypal', url: 'https://paypal.me/RobStolte', ariaLabel:'PayPal', titel: 'Doneer via PayPal!' }
    ]

export const SITE_TITLE = `Portfolio | ${PERSOONLIJKE_INFO.Voornaam} ${PERSOONLIJKE_INFO.Achternaam}`;
export const SITE_DESCRIPTION = `Een portfolio website van ${PERSOONLIJKE_INFO.Voornaam} ${PERSOONLIJKE_INFO.Achternaam}, waar je meer informatie kan vinden over mijn werk en hobby\'s. Ook kan je hier mijn contactgegevens vinden.`;