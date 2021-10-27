import { AxiosResponse } from "axios";

import request from "src/utils/request";

export const getArticles = (): Promise<AxiosResponse<Array<ArticleGlobal.Article>>> =>
	request.get("/posts");
