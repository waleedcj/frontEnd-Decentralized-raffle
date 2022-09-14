//these components are independent and reusable bits of code, they serve the same purpose as JS funcitons, but work in
//isolation and return HTML
//its just best practice to modularize the the code and refactor it
//fucntional based component

//to give other application to use this component we use export
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

const ManualHeader = () => {
    const { enableWeb3, account } = useMoralis(); //useMoralis is a hook and lets you "hook into" and helps you keep track of react app state and lifecycle features
    //to use moralis our entire application needs to be wrapped around a moralis provider we have to add the provider in the app.js
    //enableWeb3 hooks works in a way that when u connect to the dapp it will change its state based on that and rerender if u are not connect

    useEffect(() => {}, []);
    //if there is no dependency array: anytime somtthing re-renders this will get called, that is why you have to be
    //careful with this bceuase it can cause circular renders.
    //blank array

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
