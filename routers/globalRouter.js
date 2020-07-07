import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { login, logout, getJoin, postJoin } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join,getJoin);
globalRouter.post(routes.join,postJoin);//주의 getㄴㄴ

globalRouter.get(routes.home,home);
globalRouter.get(routes.search,search);

globalRouter.get(routes.login,login);
globalRouter.get(routes.logout,logout);

export default globalRouter;//전체 export