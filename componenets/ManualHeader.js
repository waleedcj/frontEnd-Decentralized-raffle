//these components are independent and reusable bits of code, they serve the same purpose as JS funcitons, but work in
//isolation and return HTML
//its just best practice to modularize the the code and refactor it
//fucntional based component

//to give other application to use this component we use export
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

const ManualHeader = () => {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3 } = useMoralis(); //useMoralis is a hook and lets you "hook into" and helps you keep track of react app state and lifecycle features
    //to use moralis our entire application needs to be wrapped around a moralis provider we have to add the provider in the app.js
    //enableWeb3 hooks works in a way that when u connect to the dapp it will change its state based on that and rerender if u are not connect

    useEffect(() => {
        if (isWeb3Enabled) return;
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                //looking for the key in the local storage if it is there enableWeb3
                enableWeb3();
            }
        }
        // enableWeb3(); //this has a problem if u refresh it will prompt u to connect, as use effect is constantly searching in the background if you are connected and refresh the page it will still show that u connected
    }, [isWeb3Enabled]);
    //if there is no dependency array: anytime somtthing re-renders this will get called, that is why you have to be
    //careful with this bceuase it can cause circular renders.
    //blank array

    useEffect(() => {
        //takes in a function and account as a argument
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`); //when u disconnect or change account display on console
            if (account == null) {
                window.localStorage.removeItem("connected"); //if account is null remove the key from local storage
                deactivateWeb3(); //isWeb3enable is set to false so u wont get prompted until u press connect again
                console.log("Null account found");
            }
        });
    }, []); //when we disconnect the dapp should know when we disconnected and doesnt ask for connect prompts

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={
                        async () => {
                            await enableWeb3();
                            if (typeof window !== "undefined") {
                                window.localStorage.setItem("connected", "injected");
                                // we use this line of code to make sure that our dapp knows the user is connected to the dapp and stop asking them to connect everytime they hit refresh or go to another page
                                // it is saved in local storage with a "key" of connected and value of "inject"
                            }
                        } /* we are connecting with the metamask wallet just using this enableWeb3 hook and using a ? operator too validated if the account is connected or not using the accounts from moralis*/
                    }
                >
                    Connect
                </button>
            )}
        </div>
    );
};

export default ManualHeader;
