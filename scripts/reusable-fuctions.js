const toggleClass = (element, CSSClass) => {
    return element.classList.toggle(CSSClass);
};

const addClass = (element, ...classes) => {
    classes.forEach((CSSClass) => {
        return element.classList.add(CSSClass);
    });
};

const removeClass = (element, CSSClass) => {
    return element.classList.remove(CSSClass);
};

const addAttribute = (element, name, value) => {
    return element.setAttribute(name, value);
};

const getAttribute = (element, name) => {
    return element.getAttribute(name);
};

const createElement = (element) => {
    return document.createElement(element);
};

const appendElement = (appender, ...elements) => {
    elements.forEach((element) => {
        return appender.append(element);
    });
};

const observeElement = (observer, elements) => {
    elements.forEach((element) => {
        observer.observe(element);
    });
};
