import React, { FC, ReactElement } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Observer } from 'mobx-react-lite';
import ArticleListPage from './components/comp';
import { useStore } from './hooks/useStores';
import { Link, useRouteNode } from 'react-router5';

const App: FC = () => {
  const store = useStore('app');

  const { t } = useTranslation();

  const { route } = useRouteNode('');

  return (
    <Observer>
      {(): ReactElement => {
        return (
          <div className="App">
            <header className="App-header">
              <nav>
                <Link routeName="main">home</Link>
                <Link routeName="test">page</Link>
              </nav>
              <br />
              {route.name === 'main' && <>main </>}
              {route.name === 'test' && <>test </>}
              <br />
              {store.isLoading ? 'Loading' : 'not Loading'}

              <br />
              {t('title')}
              <br />
              <ArticleListPage />
            </header>
          </div>
        );
      }}
    </Observer>
  );
};

export default App;
