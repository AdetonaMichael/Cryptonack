import React from "react"
import '../css/landing.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Landing = () =>{
    return(
      <>
        <nav style={{ boxShadow: '1px 2px 9px #ddd', }} className="navbar">
        <div className="container-fluid d-flex justify-content-center">
        <div className="header-text">
        <img  height={40} onclick="window.location = 'networks.html'" class="text-center header-img" src="https://ethereum-magicians.org/uploads/default/original/1X/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png" alt="new" />
        </div>
        </div>
        </nav>
        
        <div className="row mt-5">
            <div className="col-md-12">
                <h2 style={styles.h1}>Connect Wallet</h2>

             <div className="">
             <p className="p-0 m-0">Open protocol for concerning Wallets to Dapps</p>
                <p className="p-0 m-0">Connect Your wallet to get Started</p>
             </div>

             <div className="row d-flex justify-content-center mt-2">
                 <div className="col-md-8 d-flex justify-content-around">
                 <img height={80} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt=""/>
                    <img height={80} src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png" alt=""/>
                 </div>
             </div>
            </div>
        </div>
      </>
    )
}

export default Landing;

const styles ={
    h1:{
      fontSize:35,
      fontWeight:'bold',
      color:'black',
    }
}
