import React, { FC } from "react";

import { ArticleList } from "src/components/Article";

interface Props {
	articles: Array<ArticleGlobal.Article>;
}

export const ArticleContainer: FC<Props> = ({ articles }) => (
	<>
		<ArticleList articles={articles} />
	</>
);
