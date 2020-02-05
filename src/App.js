import React from 'react'
// TODO to use theme provider
// import theme from './themes/theme'

function App () {
  return (
    <>
      <header>
        <section>
          <ul>
            <li><a href="#">Healthy tools</a></li>
            <li><a href="#">Assets manager</a></li>
            <li><a href="#">Articles and tutorials</a></li>
            <li><a href="#">Links for others tools</a></li>
          </ul>
        </section>
        <section>
          <ul>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Log in</a></li>
          </ul>
        </section>
      </header>
      <main>
        <article>
        <h1>Pocketknives</h1>
          <h2>Purpose</h2>
          <p>This website is meant to be a hub to solve your daily problems.</p>
          <p>Ok, let me be honest, it is just a excuse to experiment some ideas about web development. So if you want to experiment your ideas as well you are welcome to contribute on <a href="https://github.com/WesleySabino/pocketknives">github</a>.</p>
          <p>Enjoy it!</p>
        </article>
      </main>
    </>
  )
}

export default App
