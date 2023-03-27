/**
 * A Vite plugin that injects the current date into the HTML.
 */
export function injectDate() {
    return {
        name: 'inject-date',
        transformIndexHtml(html) {
            html =  inject_date_string(html);
            html =  inject_language(html);
            html =  inject_random_color(html);
            html =  inject_timezone(html);
            return html;
        }
    }
}

/**
 * Finds the pattern *{{ date }}* in the HTML and replaces it with the current date.
 * @param {string} html 
 * @returns {string}
 */
function inject_date_string(html) {
    const date_string =  new Date().toLocaleString("en", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })



    return handlebars("date")(html, date_string);
}

/**
 * @param {string} html 
 * @returns {string}
 */
const inject_language = (html) => handlebars("lang")(html, "en");

const inject_random_color = (html) => {

    const random = Math.random();
    const inverted_random = random * -1 + 1;

    //A random HSL color
    const color = `hsl(${random * 360}, 100%, 50%)`;

    html = handlebars("color")(html, color);
    return html;
}


const inject_timezone = (html) => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return handlebars("timezone")(html, timezone);
}

/**
 * Returns a function that takes a string and a value, and replaces all instances of *{{ pattern }}* with the value.
 * 
 * @param {string} pattern - A pattern to search for, e.g "date", which would replace all instances of *{{ date }}*.
 */
function handlebars(pattern) {
    const regex = new RegExp(`{{\\s*${pattern}\\s*}}`, "g");

    /**
     * @param {string} html - The HTML to search.
     * @param {string} value - The value to replace the pattern with.
     */
    return (html, value) => html.replace(regex, value);
}