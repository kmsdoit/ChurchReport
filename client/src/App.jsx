import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Main from '../components/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
