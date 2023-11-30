const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <div>
                    <img src="/images/jane-almon-7rriIaBH6JY-unsplash.jpg" alt="dog with big bug eyes" />
                    <div>
                    Photo by <a href="https://unsplash.com/@jfalmon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jane Almon</a> on <a href="https://unsplash.com/photos/white-and-brown-short-coated-dog-wearing-black-sunglasses-7rriIaBH6JY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
                    </div>
                </div>
                <p> Which way did he go george? </p>
            </main>
        </Def>
    )
}

module.exports = error404