
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import logo from './logo.png';


const useAppDefaults = () => {

    const [isExpanded, setIsExpanded] = useState(true);

    const { isLoading } = useContext(AppContext);

    useEffect(() => {

        const body = document.body;

        if (isLoading) {

            body.style.cssText += "max-height: 100vh; overflow:hidden";

        } else {

            body.style.cssText += "max-height: initial; overflow:initial";

        }

        // Clean up
        return () => { };
    }, [isLoading]);

    return { isExpanded, setIsExpanded };
}

const useTableDefaults = (list) => {

    const [selectedEntries, setSelectedEntries] = useState({ name: 5, code: 5 });

    const entries = [];

    // Fetch Entries 
    list?.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    return { selectedEntries, setSelectedEntries, entries };

}

const useSetLogo = () => {

    const location = useLocation().pathname;

    useEffect(() => {
        // Create a new link element to represent the favicon
        const headIcon = document.createElement('link');

        // Select all existing link elements in the head with rel="icon"
        const removeOldestLogo = document.querySelectorAll('head link[rel="icon"]');

        // Remove all existing favicon link elements
        removeOldestLogo.forEach((item) => item.remove());

        // Set the rel and href attributes of the newly created link element
        headIcon.setAttribute('rel', 'icon');
        headIcon.setAttribute('href', logo);

        // Append the new link element to the head of the document
        document.head.appendChild(headIcon);

    }, [location]);

}

const useAppHooks = () => {
    return { useAppDefaults, useTableDefaults, useSetLogo };
}

export {
    useAppHooks
}