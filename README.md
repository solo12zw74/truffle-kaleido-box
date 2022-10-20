![Truffle & Kaleido](https://github.com/kaleido-io/truffle-kaleido-box/blob/master/box-img-sm.png "Truffle & Kaleido")

# Truffle & Kaleido Truffle Box

This box gives you a boilerplate to get up and running quickly with Truffle on a Kaleido chain.

## Installation

First ensure you are in a new and empty directory. Choose one of the following options to download and install the Kaleido Truffle box

1. In your preferred directory run the `unbox` command with `npx`. This will install all necessary dependencies.

```
npx truffle unbox kaleido-io/truffle-kaleido-box
```

2. Alternatively, install Truffle globally and then run the `unbox` command in your preferred directory.

```
npm install -g truffle
truffle unbox kaleido-io/truffle-kaleido-box
```

## Connect to Kaleido

1. In the Kaleido console, navigate to your environment, click on "Security" in the left hand navigation menu, then click on "App Creds"

2. Click "New App Cred" and give it a name. Do not close this window until we have completed the steps below

3. Navigate to where you downloaded the Kaleido Truffle Box in the section above.  Open up the truffle-config.js file in your preferred IDE

4. Back in the Kaleido console, copy the JSON/RPC HTTP endpoint that's generated in the right hand menu.

5. Paste this full URL into Line 9 where you see 'nodeConnectionURL'. Make sure to keep the URL that you insert inside quotation marks

6. If you are using Quorum in this environment, ensure to uncomment the `type: "quorum"` property on your network object.

7. Migrate your contracts to your Kaleido chain!

```
truffle migrate
```

## Running Truffle

1. Run the development console. This will instantiate a local chain for you to test that Truffle is working properly.

```
truffle develop
```

2. Ensure that you're able to both compile, test, and finally migrate your contracts to your local chain.

```
compile
test
migrate
```

5. If everything looks good, you can exit the Truffle console with `.exit`.