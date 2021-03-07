import React, {ReactElement} from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import {Observer} from "mobx-react-lite";
import ArticleListPage from "./components/comp";
import {useStore} from "./hooks/useStores";


function App() {


  const store = useStore("app");

  const handle = () => {
    store.setLoading(!store.isLoading);
  }







  const handleSubmit = () => {
    fetch('/app', {
      method: 'GET'
    })
      .then((res) => res.json())
      // Update the state with the received response
      .then((res) => {
        console.log(res)
      })
  }

  const { t } = useTranslation();


  return (
      <Observer>
        {(): ReactElement  => {

          return (
              <div className="App">
                <header className="App-header">

                  {store.isLoading ? 'Loading' : 'not Loading'}

                  <button onClick={handle}>set loading</button>
                  {t('title')}
                  <button
                      onClick={handleSubmit}
                  >
                    Learn React
                  </button>
                  <ArticleListPage/>
                </header>
              </div>
          );
        }}
      </Observer>
  );
}

export default App;
