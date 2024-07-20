import NavBar from './components/navbar'
import AboutMe from './pages/AboutMe/AboutMe.page'

function App () {
  return (
    <div className='App'>
      <NavBar
        logo='HAKU'
        items={[
          { name: 'About', link: '#summary' },
          { name: 'Projects', link: '#projects' },
          { name: 'Contact', link: '#contact' }
        ]}
      />
      <AboutMe />
    </div>
  )
}

export default App
