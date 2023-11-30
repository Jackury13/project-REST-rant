const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/taylor-kiser-EvoIiaIVRzU-unsplash.jpg" alt="Salads with fruit" />
                    <div>
                    Photo by <a href="https://unsplash.com/@foodfaithfit?   utm_content=creditCopyText&utm_medium=referral&    utm_source=unsplash">Taylor Kiser</a> on <a href="https://unsplash. com/photos/vegetable-salad-on-white-ceramic-bowl-EvoIiaIVRzU?    utm_content=creditCopyText&utm_medium=referral& utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}


module.exports = home
