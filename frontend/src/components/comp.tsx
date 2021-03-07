import React, {FC, ReactElement} from "react";
import {Observer} from "mobx-react-lite";
import {useStore} from "../hooks/useStores";


const ArticleListPage: FC = () => {

    const store = useStore("app");



    const handle = () => {
        store.setLoading(!store.isLoading);
    }


    return (
        <Observer>
            {(): ReactElement => (
                <>
                    {store.isLoading ? 'Loading' : 'not Loading'}

                    <button onClick={handle}>set loading</button>
                </>
            )}
        </Observer>
    );
};

export default ArticleListPage;
