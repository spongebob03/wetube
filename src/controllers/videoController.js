import Video from "../models/Video";

export const home = (req, res) => {
    console.log("1");
    Video.find({}, (error, videos) => {
        console.log("3!");
        return res.render("home", {pageTitle: "Home", videos});
    });
    console.log("2")
};
export const watch = (req, res) => {
    const {id} = req.params;
    return res.render("watch", {pageTitle: `Watching`});
};
export const upload = (req, res) => res.send("Upload");
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", {pageTitle: `Editing`});
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};
export const deleteVideo = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search");

export const getUpload = (req, res) => {
    return res.render("upload");
}

export const postUpload = (req, res) => {
    const { title } = req.body;
    return res.redirect("/");
};