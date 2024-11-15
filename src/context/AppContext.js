import { useState, createContext } from 'react';

const Context = createContext();

const AppProvider = ({children}) => {
  const [ myWeb3, setMyWeb3 ] = useState(null)
  const [ walletAddress, setWalletAddress ] = useState(localStorage.getItem('wallet account'))
  const [ openModal, setOpenModal ] = useState(false)
  const [ contract, setContract ] = useState(null);
  const [ currentChainId, setCurrentChainId ] = useState('0xaa36a7');
  const [ tokenContract, setTokenContract ] = useState(null);
  const [ points, setPoints ] = useState(0)
  const [ tokenBalance, setTokenBalance ] = useState(0)
  const [ currentPrice, setCurrentPrice ] = useState(0)
  const [ nextPrice, setNextPrice ] = useState(0)
  const [ timerValue, setTimerValue ] = useState(0)
  const [ cryptoType, setCryptoType ] = useState('s_Raiser')
  const [ raiseValue, setRaiseValue ] = useState(0)
  const [ chainStatus, setChainStatus ] = useState(false)
  const [ clickStatus, setClickStatus ] = useState(false)
  const [ contributeStatus, setContributeStatus ] = useState(false)

  return (
    <Context.Provider 
      value={{
        openModal, setOpenModal,
        contract, setContract,
        currentChainId, setCurrentChainId,
        tokenContract, setTokenContract,
        points, setPoints,
        tokenBalance, setTokenBalance,
        currentPrice, setCurrentPrice,
        nextPrice, setNextPrice,
        timerValue, setTimerValue,
        cryptoType, setCryptoType,
        raiseValue, setRaiseValue,
        walletAddress, setWalletAddress,
        myWeb3, setMyWeb3,
        chainStatus, setChainStatus,
        clickStatus, setClickStatus,
        contributeStatus, setContributeStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };