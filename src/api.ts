import { createResource } from "solid-js";
import axios from "axios";

export type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const fetchPhotos = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    const photos = res.data;
    return photos;
  } catch (err) {
    console.error(err);
  }
};

export const [photos] = createResource<Photos[]>(fetchPhotos);
