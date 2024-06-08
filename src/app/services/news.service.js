import { News } from "../../mongo/schemes/news.scheme.js";


async function getAllNews() {
    return await News.find();
}

async function getNewsById(id) {
    return await News.findById(id);
}

async function createNews(NewsData) {
    const News = new News(NewsData);
    return await News.save();
}

async function updateNews(id, NewsData) {
    return await News.findByIdAndUpdate(id, NewsData, { new: true });
}

async function deleteNews(id) {
    return await News.findByIdAndDelete(id);
}

const NewsService = {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
};

export {
    NewsService
}