import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        //restore the command to open the link in a new window with ctrl
        // or command in mac
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);
        //tell the route component that the url has changed:
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;