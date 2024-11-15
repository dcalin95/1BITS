import React, { useContext, useState } from "react"
import { Box, Grid } from "@mui/material"

import {
  CryptoTypeField,
  TokenBalanceField,
  DurationField,
  RaisedField,
  ValueTypeField,
} from './'

import { CustomButton } from "../../../components/CustomButton"
import { Context } from "../../../context/AppContext"
import { addressSet } from "../../../constant/addressSet"

import headerImg from '../../../assets/images/home/header-img.png'
import a_eth from '../../../assets/images/home/a_eth.png'

const styles = { width: '100%' }

export const Cryptocurrency = () => {
  const {
    setOpenModal,
    setCurrentChainId,
    currentChainId,
    contract,
    tokenContract,
    points,
    tokenBalance,
    currentPrice,
    nextPrice,
    timerValue,
    cryptoType,
    setCryptoType,
    raiseValue,
    walletAddress,
    setChainStatus,
    chainStatus,
    setContributeStatus,
    contributeStatus,
  } = useContext(Context)
  const [ selectedTokenIcon, setSelectedTokenIcon ] = useState(a_eth)
  const [ buyValue, setBuyValue ] = useState(0)
  const [ pointsValue, setPointsValue ] = useState(0)

  const handleOpenModalClick = () => {
    setOpenModal(true)
  }

  const handleBuyNowClick = async () => {
    try {
      let value = window.web3.utils.toWei(buyValue.toString(), 'ether');
      let currentWContractAddress
      let currentContractAddress
      if(cryptoType !== "a_Raiser" || cryptoType !== "b_Raiser" || cryptoType !== "s_Raiser") {
        currentWContractAddress = addressSet.find(( item ) => item.chainId === currentChainId && item.estimate === true )
        currentContractAddress = addressSet.find(( item ) => item.chainId === currentChainId && item.erc20 === false )
      } else {
        currentWContractAddress = addressSet.find(( item ) => item.cryptoType === cryptoType && item.chainId === currentChainId && item.erc20 === true )
        currentContractAddress = addressSet.find(( item ) => item.chainId === currentChainId && item.erc20 === false )
      }

      await tokenContract?.methods.allowance(walletAddress, currentContractAddress.testnet).call()
      .then( async res=>{
        if(cryptoType !== "a_Raiser" && cryptoType !== "b_Raiser" && cryptoType !== "s_Raiser") {
          if(Number(res) === 0) {
            await tokenContract?.methods.approve(currentContractAddress.testnet, value).send({ from: walletAddress })
              .then(async res1 => {
                console.log("Buy Now res1", res1.blockHash);
                await contract?.methods.contribute(currentWContractAddress.testnet, value).send({value: res, from: walletAddress})
                .then(res2 => {
                  if(res2.status === true) {
                    setContributeStatus(!contributeStatus)
                    setBuyValue(0)
                    setPointsValue(0)
                  }
                })
              })
          }
        }
        await contract?.methods.contribute(currentWContractAddress.testnet, res).send({value: value, from: walletAddress})
          .then(res3 => {
            console.log('res3.status', res3.status)
            if(res3.status === true) {
              setContributeStatus(!contributeStatus)
              setBuyValue(0)
              setPointsValue(0)
            }
          })
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <Box sx={{
      background: '#f1f4f4',
    }}>
      <Box id='buy$ART' sx={{
        maxWidth: '1440px',
        margin: 'auto',
      }}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
          }}>
            <Box component={'img'} src={headerImg} alt='' sx={{}} width={'100%'} />
          </Grid>
          <Grid item sm={6} xs={12}
            display='flex'
            flexDirection='column'
            justifyContent={'space-between'}
            sx={{
              background: '#8000',
              padding: { md: '24px 48px !important', sm: '24px 32px !important', xs: '24px 16px 24px 24px !important' },
            }}
          >
            <Box>
              <CryptoTypeField
                cryptoType={cryptoType}
                setCurrentChainId={setCurrentChainId}
                currentChainId={currentChainId}
                setCryptoType={setCryptoType}
                setSelectedTokenIcon={setSelectedTokenIcon}
                setChainStatus={setChainStatus}
                chainStatus={chainStatus}
              />
              <TokenBalanceField
                cryptoType={cryptoType}
                points={points}
                tokenBalance={tokenBalance}
                currentPrice={currentPrice}
                nextPrice={nextPrice}
                walletAddress={walletAddress}
              />
              <DurationField  timerValue={timerValue} />
              <RaisedField raisedValue={raiseValue} />
            </Box>
            <ValueTypeField
              selectedTokenIcon={selectedTokenIcon}
              tokenBalance={tokenBalance}
              buyValue={buyValue}
              setBuyValue={setBuyValue}
              pointsValue={pointsValue}
              setPointsValue={setPointsValue}
              currentChainId={currentChainId}
            />

            <Box mt={4} width={'100%'}>
              <CustomButton
                title={ walletAddress === 'undefined' ? 'CONNECT WALLET' : 'BUY NOW'}
                styles={styles}
                handleClick={
                  walletAddress === 'undefined' ? handleOpenModalClick : handleBuyNowClick }
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
