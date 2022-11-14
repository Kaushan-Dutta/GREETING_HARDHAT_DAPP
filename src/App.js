import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import {useState,useEffect} from 'react';
import Lock from './artifacts/contracts/Lock.sol/Lock.json';


function App() {
  const [greeting,doGreeting]=useState(null);
  const [state,setState]=useState('');
  const [acc,setAcc]=useState();
  const [contract,setContract]=useState(null);
  const [provider,setProvider]=useState(null);

  const changeGreetings=async()=>{
    const sendMessage =await contract.methods.setGreeting(state).send({from:acc});
    
    doGreeting(state);
  }

  useEffect(()=>{
    const loadProvider=async()=>{
      const address=process.env.REACT_APP_ADDRESS_KEY;
      
      
      console.log(window.web3);
      console.log(window.ethereum);
      let provider=null;

       if(window.ethereum){
        provider=window.ethereum;
        try{
          await provider.enable();
          console.log("Enterred")
        }catch(err){console.log(err)}
      }  

     /*  if(window.web3){
        provider=window.web3.currentProvider;
        
      } */
      /* else if(!process.env.production){provider=url}*/
     /*  const accounts=await window.ethereum.request({
        method:"eth_requestAccounts"
      })
      console.log(accounts); */

      const web3=new Web3(provider); 

      
      const contract=new web3.eth.Contract(Lock.abi,address);
      console.log(contract); 
      const set=await contract.methods.greeting().call();
      const accounts=await web3.eth.getAccounts();
      const account=accounts[0];
      
      console.log(set);
      doGreeting(set);
      setContract(contract);
      setProvider(web3);
      setAcc(account);
      //await contract.methods.greeting().call().then(console.log);

    }
    loadProvider();
  },[]);

  return (
    <div className="App">
      <h3>{greeting}</h3>
      <input className='input' type="text" id="value" onChange={(event)=>{setState(event.target.value)}}/>
      <button className='button' onClick={changeGreetings} >Greeting</button>
    </div>
  );
}

export default App;
