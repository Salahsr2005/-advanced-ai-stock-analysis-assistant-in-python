import {C1Chat,ThemeProvider } from '@thesysai/genui-sdk'
import "@crayonai/react-ui/styles/index.css"

import './App.css'



function App() {

  return (
    <>
      <ThemeProvider mode='dark'>
        <C1Chat apiUrl='/api/chat' />
      </ThemeProvider>
    </>
  )
}

export default App
