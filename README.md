# IFrame hosted OpenChat proof of concept in React

<img width="1021" alt="image" src="https://github.com/open-chat-labs/signals-integration/assets/86620/83f2f2f1-2d33-4733-b88e-c147dfef8cee">


This is an example react integration with OpenChat based on the Signals user-case. Signals would like to interact with a Signals themed instance of OpenChat restricted to Direct chats only.

This integration example shows how we can show the chat selection left panel in OpenChat or simply allow the direct chats to be selected by the host site.

We make use of the [openchat-xframe](https://github.com/open-chat-labs/openchat-xframe) library to manage the communication between the host page and the instances of OpenChat running in the iframes.

The library allows us to set an initial theme and to change path which is all we need in this case.

This sample site uses React boostrapped using Vite. You can run it locally by running the following commands from the root directory.

```
npm i
npm run dev
```
