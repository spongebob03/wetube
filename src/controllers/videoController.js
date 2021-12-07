export const trending = (req, res) => res.send("Trending video");
export const watch = (req, res) => {
    console.log(`Watch Vidoe #${req.params.id}`);
    return res.send(`Watch Vidoe #${req.params.id}`);
};
export const upload = (req, res) => res.send("Upload");
export const edit = (req, res) => res.send("Edit");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search");