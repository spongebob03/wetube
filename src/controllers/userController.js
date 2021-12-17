import User from "../models/User";

export const getJoin = (req, res) => res.render("Join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
    const {name, username, email, password, location} = req.body;
    await User.create({
        name, 
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
};

export const login = (req, res) => res.send("LogIn");
export const logout = (req, res) => res.send("LogOut");
export const see = (req, res) => res.send("See");
export const edit = (req, res) => res.send("Edit");
export const remove = (req, res) => res.send("Remove");