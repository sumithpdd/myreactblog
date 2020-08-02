import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticleListPage = () => (
    <>
        <h1>Articles List</h1>
        <ArticlesList articles={articleContent} />
    </>
)

export default ArticleListPage;