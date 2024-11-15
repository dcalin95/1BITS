import React, { useEffect, useCallback } from "react"
import { Box, Button, Typography, MenuItem, FormControl, Select, Tab, InputLabel } from "@mui/material"
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { palette } from "../../../themes"
import { cryptoTypes, networks } from "../../../config/wallet_config";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const changeDefault = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");

    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ ...networks[networkName] }]
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const CryptoTypeField = ({ 
  setCurrentChainId,
  cryptoType, 
  setCryptoType, 
  setSelectedTokenIcon,
  setChainStatus,
}) => {
  const [value, setValue] = React.useState('1');

  const handleNetworkChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDefaultSwitch = async (networkName) => {
    await changeDefault({ networkName });
  };

  const networkChanged = useCallback( (chainId) => {
    if(chainId === '0xaa36a7')
    {
      setValue('1');
    } else
    if(chainId === '0x61') {
      setValue('2');
    } else
    if(chainId === '0x66eed') {
      setValue('3');
    }
    setCurrentChainId(chainId)
    setChainStatus(true)
  }, [setCurrentChainId, setChainStatus]);

  useEffect(() => {
    if(window.ethereum) {
      handleDefaultSwitch('sepolia')
      window.ethereum.on("chainChanged", networkChanged);
  
      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }
  }, [networkChanged]); 

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCryptoType(value);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleNetworkChange} aria-label="lab API tabs example">
            <Tab label="Ethereum" value="1" sx={{ 
              color: 'black', fontSize: 16, padding: '0px'
            }} />
            <Tab label="BSC" value="2" sx={{ 
              color: 'black', fontSize: 16, padding: '0px'
            }}/>
            <Tab label="Arbitrum" value="3" sx={{ 
              color: 'black', fontSize: 16, padding: '0px'
            }} />
          </TabList>
        </Box>
        {
          Object.keys(cryptoTypes).map((key, i) => {
            return (
              <TabPanel value={`${i+1}`} key={i}>
                <Box
                  display={{ sm: 'flex', xs: 'none' }} 
                  justifyContent={'start'} 
                  alignItems={'center'} 
                  flexWrap={'wrap'}
                  gap={2}
                >
                  {
                    i === 0 ?
                    cryptoTypes['ethereum'].map((item, j) => (
                      <Button key={j}
                        onClick={() =>
                          {
                            // setCurrentChainId(item.chainId)
                            setCryptoType(item.type)
                            setSelectedTokenIcon(item.symbol1)
                            // item.networkType === "bnb" ?
                            // handleNetworkSwitch(item.networkType) :
                            handleDefaultSwitch(item.networkType)
                          } 
                        }
                        sx={{
                          width: '110px',
                          background: cryptoType === item.type ? palette.common.white : '',
                          border: '2px solid #943537',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          '&:hover': {
                            background: '#f6e1ce',
                          }
                        }}
                      >
                        <Box component={'img'} alt=""
                          src={ cryptoType !== item.type ? item.symbol : item.symbol1 }
                        />
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                          <Typography variant="h4" sx={{
                            color: cryptoType === item.type ? palette.common.black : '#cc6263',
                          }}>{item.name}</Typography>
                          <Typography variant="h5" sx={{
                            color: '#cc6263 !important',
                          }}>{item.token}</Typography>
                        </Box>
                      </Button>
                    )) :
                    i === 1 ?
                    cryptoTypes['bsc'].map((item, j) => (
                      <Button key={j}
                        onClick={() =>
                          {
                            // setCurrentChainId(item.chainId)
                            setCryptoType(item.type)
                            setSelectedTokenIcon(item.symbol1)
                            // item.networkType === "bnb" ?
                            // handleNetworkSwitch(item.networkType) :
                            handleDefaultSwitch(item.networkType)
                          } 
                        }
                        sx={{
                          width: '110px',
                          background: cryptoType === item.type ? palette.common.white : '',
                          border: '2px solid #943537',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          '&:hover': {
                            background: '#f6e1ce',
                          }
                        }}
                      >
                        <Box component={'img'} alt=""
                          src={ cryptoType !== item.type ? item.symbol : item.symbol1 }
                        />
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                          <Typography variant="h4" sx={{
                            color: cryptoType === item.type ? palette.common.black : '#cc6263',
                          }}>{item.name}</Typography>
                          <Typography variant="h5" sx={{
                            color: '#cc6263 !important',
                          }}>{item.token}</Typography>
                        </Box>
                      </Button>
                    )) :
                    cryptoTypes['arbitrum'].map((item, j) => (
                      <Button key={j}
                        onClick={() =>
                          {
                            // setCurrentChainId(item.chainId)
                            setCryptoType(item.type)
                            setSelectedTokenIcon(item.symbol1)
                            // item.networkType === "bnb" ?
                            // handleNetworkSwitch(item.networkType) :
                            handleDefaultSwitch(item.networkType)
                          } 
                        }
                        sx={{
                          width: '110px',
                          background: cryptoType === item.type ? palette.common.white : '',
                          border: '2px solid #943537',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          '&:hover': {
                            background: '#f6e1ce',
                          }
                        }}
                      >
                        <Box component={'img'} alt=""
                          src={ cryptoType !== item.type ? item.symbol : item.symbol1 }
                        />
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                          <Typography variant="h4" sx={{
                            color: cryptoType === item.type ? palette.common.black : '#cc6263',
                          }}>{item.name}</Typography>
                          <Typography variant="h5" sx={{
                            color: '#cc6263 !important',
                          }}>{item.token}</Typography>
                        </Box>
                      </Button>
                    ))
                  }
                </Box>
                <Box display={{ sm: 'none', xs: 'block' }}>
                  <FormControl sx={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-label" sx={{ textTransform: 'capitalize', color: '#019c77', fontWeight: 700 }}>{key}</InputLabel>
                    <Select
                      sx={{
                        border: '2px solid #202025',
                        borderRadius: '4px',
                      }}
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      // value={cryptoType}
                      onChange={handleChange} 
                      MenuProps={MenuProps}
                    >
                      { i === 0 ?
                        cryptoTypes['ethereum'].map((item, j) => (
                          <MenuItem
                            key={j}
                            value={item.type}
                            onClick={()=> {
                              setCryptoType(item.type)
                              setSelectedTokenIcon(item.symbol1)
                              handleDefaultSwitch(item.networkType)
                            }}
                          >
                            <Box display={'flex'} justifyContent={'cemter'} alignItems={'center'} gap={2}>
                              <Box component={'img'} src={item.symbol1} alt="" />
                              <Box>
                                <Typography variant="h4" sx={{
                                  color: palette.common.black,
                                }}>{item.name}</Typography>
                                <Typography variant="h5" sx={{
                                  color: '#cc6263 !important',
                                }}>{item.token}</Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        )) : i === 1 ?
                        cryptoTypes['bsc'].map((item, j) => (
                          <MenuItem
                            key={j}
                            value={item.type}
                            onClick={()=>{
                              setCryptoType(item.type)
                              setSelectedTokenIcon(item.symbol1)
                              handleDefaultSwitch(item.networkType)
                            }}
                          >
                            <Box display={'flex'} justifyContent={'cemter'} alignItems={'center'} gap={2}>
                              <Box component={'img'} src={item.symbol1} alt="" />
                              <Box>
                                <Typography variant="h4" sx={{
                                  color: palette.common.black,
                                }}>{item.name}</Typography>
                                <Typography variant="h5" sx={{
                                  color: '#cc6263 !important',
                                }}>{item.token}</Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        )) :
                        cryptoTypes['arbitrum'].map((item, j) => (
                          <MenuItem
                            key={j}
                            value={item.type}
                            onClick={()=>{
                              setCryptoType(item.type)
                              setSelectedTokenIcon(item.symbol1)
                              handleDefaultSwitch(item.networkType)
                            }}
                          >
                            <Box display={'flex'} justifyContent={'cemter'} alignItems={'center'} gap={2}>
                              <Box component={'img'} src={item.symbol1} alt="" />
                              <Box>
                                <Typography variant="h4" sx={{
                                  color: palette.common.black,
                                }}>{item.name}</Typography>
                                <Typography variant="h5" sx={{
                                  color: '#cc6263 !important',
                                }}>{item.token}</Typography>
                              </Box>
                            </Box>
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </Box>
              </TabPanel>
            )
          })
        }
      </TabContext>
    </>
  )
}