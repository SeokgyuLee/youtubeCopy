import { videos } from "../db";
import routes from "../routes";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  console.log(searchingBy);
  res.render("Search", { pageTitle: "search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redirect(routes.videoDetail(11111111));
};

export const videoDetail = (req, res) =>
  res.render("video_detail", { pageTitle: "videoDetail" });
export const editVideo = (req, res) =>
  res.render("edit_video", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("delete_video", { pageTitle: "deleteVideo" });
