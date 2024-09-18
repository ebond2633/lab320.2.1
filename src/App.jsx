import Header from './assets/components/Header'
import Content from './assets/components/Content'
import Footer from './assets/components/Footer'

function App() {
  
  return (
    <>
      <Header/>
      <Content color="blue" text="This is my first React Application" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer/>
    </>
  )
}

export default App
