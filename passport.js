import passport from "passport";
import User from "./models/User";

//stratege: 로그인하는 방법
//createStrategy()는 Localstratege사용 단축키같음
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
