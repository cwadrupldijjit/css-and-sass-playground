const notPseudoSelectorPattern = /:not\(((?:.|\r|\n)*)\)/ig;
const pseudoElementNames = [ 'before', 'after', 'first-line', 'first-letter', 'selection' ];
const pseudoSelectorPattern = /:{1,2}(?:[\w\-])+(?:\((?:.|\r|\n)*\))?/gi;

function parseSelector(selector: string, isStyle = false, includesImportant = false) {
    if (isStyle) {
        return {
            element: 0,
            class: 0,
            id: 0,
            style: 1,
            important: +includesImportant,
        };
    }

    const result = {
        element: 0,
        class: 0,
        id: 0,
        style: 0,
        important: +includesImportant,
    };

    // grab references to all :not items
    const notPseudoClasses = selector.match(notPseudoSelectorPattern) || [];

    notPseudoClasses.forEach(s => {
        const innerSpecificity = parseSelector(s.slice(s.indexOf('(') + 1, -1), false, false);

        result.element += innerSpecificity.element;
        result.class += innerSpecificity.class;
        result.id += innerSpecificity.id;
    });
    selector = selector.replace(notPseudoSelectorPattern, '');

    const pseudoSelectors = selector.match(pseudoSelectorPattern) || [];

    pseudoSelectors.forEach(sel => {
        const [ _, colons, name ] = sel.match(/(:{1,2})([\w\-]+)\(?/i) || [] as string[];

        if (pseudoElementNames.includes(name.toLowerCase())) {
            return result.element++;
        }

        result.class++;
    });

    selector = selector.replace(pseudoSelectorPattern, '');

    const pathSections = selector.split(/[\s\n\r]*(?:[+>~*](?!=))+[\s\n\r]*|[\s\n\r]/m);
    pathSections
        .forEach((section) => {
            const matches = section.match(/\[(?:.|\n|\r)*\]|(?:#|\.)?[\w\-]+/ig) || [];

            matches.forEach(sel => {
                if (sel[0] == '#') {
                    return result.id++;
                }

                if (sel[0] == '.') {
                    return result.class++;
                }

                result.element++;
            });
        });

    return result;
}

export {
    parseSelector,
};
