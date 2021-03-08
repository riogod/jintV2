import React, { FC, ReactElement } from 'react';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../hooks/useStores';

const ArticleListPage: FC = () => {
  const store = useStore('app');

  return (
    <Observer>
      {(): ReactElement => <>{store.isLoading ? 'Loading' : 'not Loading'}</>}
    </Observer>
  );
};

export default ArticleListPage;
