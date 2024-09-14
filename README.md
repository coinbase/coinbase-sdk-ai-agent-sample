# Coinbase-SDK - Onchain Machine Learning

The Onchain Machine Learning template provides a simple app for Reinforcement Learning from Human Feedback
using the [CDP SDK](https://docs.cdp.coinbase.com/cdp-sdk/docs/welcome).
The application shows how to create an [MPC wallet](https://docs.cdp.coinbase.com/mpc-wallet/docs/welcome), fund the wallet,
and send Base Sepolia to a recipient who controls a [Coinbase Smart Wallet](https://www.smartwallet.dev/why).

<p align="center">
    <video src="https://github.com/user-attachments/assets/fd9969e9-b389-4552-bb0b-46d6e9586e71" width="352" height="720"></video>
</p>

## Getting Started

To start, [create a CDP API Key](https://portal.cdp.coinbase.com/access/api).

Then, set the following environment variables - for example, within a `.env` file, or by using
[Replit Secret Manager](https://docs.replit.com/replit-workspace/workspace-features/secrets)
(if you are accessing this template from Replit).

```text
API_KEY_NAME="YOUR_API_KEY_NAME"
API_KEY_PRIVATE_KEY="YOUR_API_KEY_PRIVATE"
```

Install the dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to use the application.

## Learn More

To learn more about the CDP SDK, take a look at the following resources:

- [Coinbase Developer Platform](https://portal.cdp.coinbase.com/access/api)
- [CDP API Documentation](https://docs.cdp.coinbase.com/cdp-sdk/docs/quickstart) - CDP SDK documentation.

## Deploy on Vercel

If you are accessing this template from GitHub, you can click the button below to deploy your own copy of the AI Feedback tool:

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcoinbase%2Fcoinbase-sdk-ai-agent-sample&env=API_KEY_PRIVATE_KEY,API_KEY_NAME&envDescription=API_KEY_PRIVATE_KEY%20and%20API_KEY_NAME%20are%20the%20API%20private%20key%20and%20name%20of%20the%20key%20you%20download%20from%20Coinbase%20Developer%20Platform%20portal.&envLink=https%3A%2F%2Fdocs.cdp.coinbase.com%2Fdeveloper-platform%2Fdocs%2Fcdp-keys&project-name=ai-wallet-coinbase-sdk&repository-name=ai-wallet-coinbase-sdk"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
</p>

## References

The images in the demo are sourced from [Unsplash](https://unsplash.com/).
