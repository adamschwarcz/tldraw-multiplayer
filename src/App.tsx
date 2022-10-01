import { Tldraw, useFileSystem } from "@tldraw/tldraw";
import { useMultiplayerState } from "./hooks/useMultiplayerState";
import "./styles.css";
import { roomID } from "./store";

function Editor({ roomId }: { roomId: string }) {
  const fileSystemEvents = useFileSystem();
  const { onMount, ...events } = useMultiplayerState(roomId);

  return (
    <div>
      <a
        className="twitter"
        href="https://twitter.com/nayajunimesh"
        target="_blank"
        rel="noreferrer"
      >
        @nayajunimesh
      </a>
      <Tldraw
        autofocus
        disableAssets
        showPages={false}
        onMount={onMount}
        {...fileSystemEvents}
        {...events}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="tldraw">
      <Editor roomId={roomID} />
    </div>
  );
}
