// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [dogData, setDogData] = useState("")
    const URL = "https://dog.ceo/api/breeds/image/random"

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setDogData(data.message))
    }, [])

    return (
        <>
            {dogData ? (
                <img
                    src={dogData}
                    alt="A Random Dog"
                ></img>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default App;