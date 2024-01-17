import { For } from "solid-js";

import { photos } from "../api";

function Album() {
  return (
    <>
      <For each={photos()}>
        {(photo) => (
          <div>
            <p>{photo.albumId}</p>
            <p>{photo.id}</p>
            <h3>{photo.title}</h3>
            <a>{photo.url}</a>
            <a>{photo.thumbnailUrl}</a>
            <span>-----------------------</span>
          </div>
        )}
      </For>
    </>
  );
}

export default Album;
