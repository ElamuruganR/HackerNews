import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/organisms/header/Header';
import * as Pages from './components/organisms/pages/Pages';
import Footer from './components/organisms/footer/Footer';

function App() {
  return (
    <div className="App">
      <center>
        <table id="hnmain" border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
          <BrowserRouter>
            <tbody>
              <tr><td bgcolor="#ff6600"><Header /></td></tr>
              <tr id="pagespace" title="New links" style={{height:'10px'}}></tr>
              <tr>
                <td>
                <Switch>
                  <Route path="/" exact><Pages.News /></Route>
                  <Route path="/news" exact><Pages.News /></Route>
                  <Route path="/newest" exact><Pages.New /></Route>
                  <Route path="/top" exact><Pages.Top /></Route>
                  <Route path="/best" exact><Pages.Best /></Route>
                  <Route path="/ask" exact><Pages.Ask /></Route>
                  <Route path="/show" exact><Pages.Show /></Route>
                  <Route path="/jobs" exact><Pages.Jobs /></Route>
                </Switch>
                </td>
              </tr>
              <tr><td><Footer /></td></tr>
            </tbody>
          </BrowserRouter>
        </table>
      </center>
    </div>
  );
}

export default App;

