
module.exports = class Page {

    open (path) {
        return browser.url(`https://ramirodicarlo.github.io/week-14/${path}`)
    }
}
