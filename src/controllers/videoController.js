export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
export const watch = (req, res) => res.render("watch");
export const upload = (req, res) => res.send("Upload");
export const edit = (req, res) => res.send("Edit");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search");