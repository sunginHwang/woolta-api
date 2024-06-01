// ##### app.ts #####

// // dotenv를 설치했다면
// import * as dotenv from "dotenv";
// dotenv.config();

import express, { Request, Response } from "express";
import {PrismaClient as BlogPrismaClient, User} from "../prisma/generated/blog";
import {PrismaClient as WoolBankPrismaClient, User as WooltaUser} from "../prisma/generated/woolBank";


const prismaB = new BlogPrismaClient();
const prismaW = new WoolBankPrismaClient();

// // cors 설치했다면
// import cors from "cors";

// // 각 router
// import movieRouter from "./routes/movie";
// import dramaRouter from "./routes/drama";
// import bookRouter from "./routes/book";

// 모든 에러를 처리하는 핸들러

const app = express();
app.set("port", 3050);

// 2022/12/22 추가 -> body parser ( 이거 안넣으면 POST 요청 시 보내는 데이터가 파싱되지 않아서 빈 값만 출력됩니다... )
// 까먹고 안넣었다가 axios.post()가 왜 데이터를 못보내지? 왜 못받지? 이러고 혼자 한참 헤맸습니다...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // "cors"를 설치했다면 ( 개발모드에서는 "http://localhost:3000"에서의 송수신을 허락한다는 의미 )
// const corsOrigin =
//   process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : [""];
// app.use(cors({ credentials: true, origin: corsOrigin }));

// 기본으로 서버 URL에 들어왔을 때 "index.html" 보여주기 ( 이후에 API문서처럼 만들면 좋을 것 같음 )
app.get("/", (req: Request, res: Response) => {
    prismaB.user.findMany().then((users:User[]) => {
        console.log(users);
        res.json({ users });
    });
});

app.get("/blog", (req: Request, res: Response) => {
    prismaW.user.findMany().then((users:WooltaUser[]) => {
        console.log(users);
        res.json({ users });
    });
});

// // router 연결
// app.use("/api/movie", movieRouter);
// app.use("/api/drama", dramaRouter);
// app.use("/api/book", bookRouter);


// express 실행
app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번 실행중...`);
});