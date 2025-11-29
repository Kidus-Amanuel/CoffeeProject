import { useEffect } from 'react';

const PageMeta = ({ title, description }) => {
    useEffect(() => {
        // Update document title
        document.title = `${title} | Coffee Export`;

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description;
    }, [title, description]);

    return null;
};

export default PageMeta;
