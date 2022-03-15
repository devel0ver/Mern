import React, {useState} from "react";

const CoinGenerator= ()=>{

    //state variable that will save the array of coins (or array of pokemon, etc;) into 
    let [coinList, setCoinList] = useState([])

    const getCoinsFromApi= ()=>{
        console.log("Getting ready to mke an api call to get coins from another application!")
        console.log("Getting ready to boil some eggs, putting the eggs into the pan to boil")

        //use fetch() to make an api call. Fetch returns a "promise". A Promise is something where we dont know how long it takes to finish executing. 
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((response)=>{
                //convert our data to json (key value pairs --> javascript object) so that our javascript application can understand it
                return response.json()
            })
            .then((response)=>{
                console.log("Got the data!!! (eggs are finished boiling.Now I can put the eggs on the toast)")
                console.log(response)
                setCoinList(response)
            })
            //.catch() will run if the fetch() process breaks for any reason (if api is down, if the url you gave the fetch() is valid, etc;)
            .catch((err)=>{
                console.log("error when fetching, something went wrong, ", err)
            })
        
        console.log("cutting up avocados")
        console.log("getting the salt and pepper out")
        console.log("smashing avocados")
    }

    return(
        <>
            <button className="btn btn-success" onClick={getCoinsFromApi}>Click here to get current coins</button>
            <p>Shout out to Coin Gecko for this API!</p>
            {
                coinList.map((coinObj, index)=>{
                    return(
                        <div>
                            <h1>{coinObj.name}</h1>
                            <p>${coinObj.current_price}</p>
                            <p>ATH price: ${coinObj.ath}</p>
                            <p><img src={coinObj.image} alt="" /></p>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default CoinGenerator;