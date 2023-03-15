import request from '../../request';

const home = {
    getArticlesHot: data =>
        request({
            url: `/rabsaved/articles/hot?limit=${data}`,
            method: 'get',
        }),
    getArticlesNew: data =>
        request({
            url: `/rabsaved/articles/new?lmit=${data}`,
            method: 'get',
        }),
};

export default home;
