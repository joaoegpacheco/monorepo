import { useObservable, useObserve } from '@legendapp/state/react';
import getProducts from '../services/product.service';

const useProducts = () => {
  const preferences$ = useObservable([]);
  const features$ = useObservable([]);
  const products$ = useObservable([]);

  // useObserve substitui useEffect - executa uma vez na montagem
  useObserve(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        const allPreferences = [];
        const allFeatures = [];

        products$.set(products);

        products.forEach((product) => {
          const productPreferences = product.preferences
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allPreferences.push(...productPreferences);

          const productFeatures = product.features
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
          allFeatures.push(...productFeatures);
        });

        preferences$.set(allPreferences);
        features$.set(allFeatures);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchData();
  });

  return {
    preferences$: preferences$,
    features$: features$,
    products$: products$
  };
};

export default useProducts;
