import './BaseButton.scss';

export default function BaseButton({
        children,
        type, 
        srOnly, 
        onclick, 
        title, 
        href, 
        target, 
        square, 
        activeTab,
        
    }) {

    let buttonBaseClass = "astro__button_base" + (square ? ' astro__button_square' : ' astro__button_round');
    buttonBaseClass += activeTab ? ' astro__button_base_activeTab' : '';

    const handleOnClick = () => {
        if (onclick)
            eval(onclick);
    };

    return href 
        ? (
            <a href={href} target={target} title={title} className={buttonBaseClass}>
                { children }
            </a>
        ) : (
            <button type={type} onClick={handleOnClick} className={buttonBaseClass}>
                { children }
                <span class="sr-only">{srOnly}</span>
            </button>
        );
};