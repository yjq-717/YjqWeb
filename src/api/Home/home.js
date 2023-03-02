import request from '../../request';

const home = {
    getArticlesHot: data =>
        request({
            url: `/rabsaved/articles/hot?lmit=${data}`,
            method: 'get',
        }),
};

export default home;
