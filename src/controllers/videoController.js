import Video from "../models/Video";

export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        console.log(videos);
        return res.render("home", {pageTitle: "Home", videos});
    } catch {
        return res.render("server-error");
    }
};

export const watch = async (req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    if (!video) {
        return res.render("404", {pageTitle:"Video not found."});
    }
    return res.render("watch", {pageTitle: video.title, video });
};

export const upload = (req, res) => res.send("Upload");

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);

    if (!video) {
        return res.render("404", {pageTitle: "Video not found."});
    }
    return res.render("edit", {pageTitle: `Editing`, video});
};

export const postEdit = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({ _id: id});
    if (!video) {
        return res.render("404", { pageTitle: "Video not found."});
    }
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: hashtags
            .split(",")
            .map((word) => (word.startsWith("#")? word: `#${word}`)),
    });
    return res.redirect(`/videos/${id}`);
};

export const deleteVideo = (req, res) => res.send("Delete Video");

export const search = (req, res) => res.send("Search");

export const getUpload = (req, res) => {
    return res.render("upload");
}

export const postUpload = async(req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => (word.startsWith("#")? word: `#${word}`)),
        });
        return res.redirect("/");
    } catch(error) {
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }    
};