import Head from 'next/head'
import Web3 from 'web3'
import Image from 'next/image'
import 'bulma/css/bulma.css'
import styles from '../styles/Home.module.css'

const evsmartcharging = () => {
let web3
//window.ethereum
const ConnectWalletHandler = () => {
if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
window.ethereum.request({method: "eth_requestAccounts" })
web3 = new Web3(window.ethereum)
} else {
//meta mask not installed
console.log("Please install metamask")

}

}
function showInput() {
document.getElementById('display').innerHTML = document.getElementById("fname").value;
}

return (
<div className={styles.container}>

<Head>
<title>evsmart charging</title>
<meta name="description" content="blockchain Ev charging" />

</Head>
<button onClick={ConnectWalletHandler} className="buton is-primary">Connect to Wallet</button>

<main className={styles.main}>
<h1 className={styles.title}>
Blockchain based EV-Charging
</h1>

<h2>Hourly Charging Station Price is INR 12</h2>
<form method="POST" action="Hello.php">
<label for="fname">Vechicle Registration Number:</label><br/>
<input type="text" id="fname" name="fname"/><br/>
<label for="lname">Model Number:</label><br/>
<input type="text" id="lname" name="lname"/><br/>
<label for="fname">Charging station open time(from 6am-10pm):</label><br/>
<input type="text" id="fname" name="fname"/><br/>
<label for="fname">Energy Demand(kWh):</label><br/>
<input type="text" id="fname" name="fname"/><br/>

<input type="submit" value="Submit"></input>
</form>
{/* <input type="submit" onClick="showInput();"></input>
<label>Your input: </label>
<p><span id='display'></span></p> */}
</main>

<footer className={styles.footer}>
<a
href="https://www.ibitf.co.in/"
target="_blank"
rel="noopener noreferrer"
>
Powered by{' IIT Bhilai '}
<span className={styles.logo}>
<Image src="/TIH.png"alt="TIH" width={72} height={16} />
</span>
</a>
</footer>
</div>

)
}

export default evsmartcharging