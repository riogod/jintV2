import React, {ReactElement, useEffect} from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import {Observer} from "mobx-react-lite";
import ArticleListPage from "./components/comp";
import {useStore} from "./hooks/useStores";
import {Link, useRouteNode} from "react-router5";


function App() {


  const store = useStore("app");

  const handle = () => {
    store.setLoading(!store.isLoading);
  }


  useEffect(() => {
    if(!store.isLoading) {
      console.log('STOR',store);
    }
  },[store])



  const handleSubmit = () => {
    console.log(store.features);
  }

  const { t } = useTranslation();

  const { route } = useRouteNode('')

  return (
      <Observer>
        {(): ReactElement  => {
          console.log(store.features)
          return (
              <div className="App">
                <header className="App-header">
                  <nav>
                    <Link routeName="main"
                    >
                      home
                    </Link>
                    <Link routeName="test">
                      page
                    </Link>
                  </nav>

                  {route.name === 'main' && <>main </>}
                  {route.name === 'test' && <>test </>}

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