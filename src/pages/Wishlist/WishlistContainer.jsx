import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Wishlist from "./Wishlist";
import Loading from '../../components/Loading';

import { useStore } from "../../context/storeContext";
import TYPES from "../../context/types";

import { getWishlist, removeFromWishlist } from '../../services/userSvc';


const WishlistContainer = () => {
  const { state, dispatch } = useStore();
  const [ userWishlist, setUserWishlist ] = useState();
  const [ isLoading, setLoading ] = useState(true);

  const onAddToCart = (e, product) => {
    e.preventDefault();

    dispatch({ 
      type: TYPES.addItem, 
      payload: { item: product, quantity: 1 } 
    });
  }

  const onRemoveItem = async (e, product) => {
    e.preventDefault();
    await removeFromWishlist(state.auth.uid, product.uid);
    await getFetchWishlist();
  }

  const getFetchWishlist = useCallback( 
    async () => {
      try {
        setLoading(true);

        const resp = await getWishlist(state.auth.uid);
        setUserWishlist(resp);

        setLoading(false);
      } catch (error) {
        toast.error("Something went wrong. Try later", { theme: "dark", position: 'bottom-right' });
      }
    },
    [state.auth]
  );
  

  useEffect( () => {

    getFetchWishlist();

  },[getFetchWishlist])


  return ( isLoading ? 
    <Loading isFullPage />
    :
    <div className='main-page-margin'>
      <Wishlist list={userWishlist} addToCart={onAddToCart} removeItem={onRemoveItem}/>
    </div>
  )
}


export default WishlistContainer;