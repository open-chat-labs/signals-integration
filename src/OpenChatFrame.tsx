import { useEffect, useRef, useState } from "react";
import "./OpenChatFrame.css";
import { initialise } from "@open-ic/openchat-xframe";
import { OpenChatXFrame } from "@open-ic/openchat-xframe/lib/types";

function initialiseOpenChatFrame(
  path: string,
  iframe: HTMLIFrameElement
): Promise<OpenChatXFrame> {
  return initialise(iframe, {
    targetOrigin: "http://localhost:5001",
    initialPath: path,
    onUserIdentified: openChatUserSignedIn,
    theme: {
      name: "signals",
      base: "light",
      overrides: {},
    },
    settings: {
      disableLeftNav: true,
    },
  });
}

type Props = {
  path: string;
};

function openChatUserSignedIn(userId: string) {
  console.log(`OpenChat user signed in: ${userId}`);
}

function OpenChatFrame({ path }: Props) {
  // capture a reference to the iframe so that we can pass it into the xframe library
  const iframe = useRef<HTMLIFrameElement>(null);

  // create a state hook to store the openchat xframe client for this frame
  const [client, setClient] = useState<Promise<OpenChatXFrame> | undefined>(
    undefined
  );

  // use an effect hook to initialise the iframe
  useEffect(() => {
    // maku sure that the iframe ref is not null
    if (iframe.current) {
      // if the client is undefined, we must initialise the connection with the supplied path
      if (client === undefined) {
        setClient(initialiseOpenChatFrame(path, iframe.current));
      } else {
        // if the client already exists then we assume that the path has changed and simply call changePath on the client.
        // This avoids unnecessary re-initialisation
        client.then((c) => c.changePath(path));
      }
    }
  }, [path, client]);
  return (
    <div className="chat">
      <iframe
        className="iframe"
        ref={iframe}
        title="OpenChat"
        frameBorder="0"
      />
    </div>
  );
}

export default OpenChatFrame;
