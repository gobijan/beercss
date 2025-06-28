import { ref, type Ref } from "vue";
import theme from "../shared/theme";
import { type IMusicPlayer } from "./interfaces";

const data: IMusicPlayer = {
  ...theme,
  showPage: false,
  showWallpaper: false,
  title: "Music Player",
  wallpaper: "/dog.png",
  time: 0,
};

const dataAsRef: Ref<IMusicPlayer> = ref(data);

export default dataAsRef;
