export const FooterTexts = {
    companyInfo: {
        caption: 'Company Info',
        quickLinks: [
            {
                name: 'About Us',
                url: '/about',
            },
            {
                name: 'Contact',
                url: '/contact',
            },
            {
                name: 'Blog',
                url: '/blog',
            },
        ],
    },
    products: {
        caption: 'Products',
        quickLinks: [
            {
                name: 'Male',
                url: '/about',
            },
            {
                name: 'Female',
                url: '/contact',
            },
            {
                name: 'New Arrivals',
                url: '/blog',
            },
        ],
    },
    collections: {
        caption: 'Collections',
        quickLinks: [
            {
                name: 'Winter Collection',
                url: '/about',
            },
            {
                name: 'Autumn Collection',
                url: '/contact',
            },
            {
                name: 'Summer Collection',
                url: '/blog',
            },
        ],
    },
    support: {
        caption: 'Support Center',
        quickLinks: [
            {
                name: 'Return policy',
                url: '/about',
            },
            {
                name: 'Customers',
                url: '/contact',
            },
            {
                name: 'FAQs',
                url: '/blog',
            },
        ],
    },

    copyright: `Copyright 2023 {&copy;} All Right Reserved`,
};
export const Text = ({ className, children, as = 'div' }) => {
    const Component = as || 'div';
    return <Component className={className}>{children}</Component>;
};
export const List = ({ className, children, ...rest }) => {
    return (
        <>
            <li className={className} {...rest}>
                {children}
            </li>
        </>
    );
};
