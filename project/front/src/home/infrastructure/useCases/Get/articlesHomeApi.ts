import {api} from "~/src/core/http/Api";

async function articlesHomeInMemory() {
    // await UtilHelper.wait(500);
    return [{ idAvisoLeido: 2901 }];
}

async function articlesHomeApi() {

    const response = await api.get('check');
    console.log("test",response);
    return response.data;
}

async function getArticlesHome() {
    // return UtilHelper.checkEnvironment() ? await articlesHomeInMemory() : await articlesHomeApi();
    return  await articlesHomeApi();
}

export { getArticlesHome };
