import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import {
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin,
} from "../controller/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin); //주의 getㄴㄴ

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, onlyPublic, logout);

export default globalRouter; //전체 export
