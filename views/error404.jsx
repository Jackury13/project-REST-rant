const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p> which way did he go george? </p>
            </main>
        </Def>
    )
}

module.exports = error404