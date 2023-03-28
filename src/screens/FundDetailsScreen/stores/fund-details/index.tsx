import {
  AnyAction,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import React, {PropsWithChildren} from 'react';
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
  ReactReduxContextValue,
  TypedUseSelectorHook,
} from 'react-redux';
import {IFundsAllInfos} from '../../../../mocks/funds';

const MyContext = React.createContext(
  {} as ReactReduxContextValue<IFundsAllInfos, AnyAction>,
);

export const fundDetailsSlice = createSlice({
  name: 'fundDetails',
  initialState: {} as IFundsAllInfos,
  reducers: {
    setState(state, action: PayloadAction<IFundsAllInfos>) {
      state = action.payload;
    },
  },
});

export const useFundDetailsStore = createStoreHook(MyContext);
export const useFundDetailsDispatch = createDispatchHook(MyContext);

export const useFundDetailsSelector: TypedUseSelectorHook<IFundsAllInfos> =
  createSelectorHook(MyContext);

interface FundDetailsProviderProps {
  fundAllInfos: IFundsAllInfos;
}

export function FundDetailsProvider({
  children,
  fundAllInfos,
}: PropsWithChildren<FundDetailsProviderProps>) {
  return (
    <Provider
      context={MyContext as any}
      store={configureStore({
        reducer: fundDetailsSlice.reducer,
        preloadedState: fundAllInfos,
      })}>
      {children}
    </Provider>
  );
}
