import {getArticlesHome} from "~/src/home/infrastructure/useCases/Get/articlesHomeApi";

export function articlesHomeApp() {

    async function get() {
        try {
            const data = await getArticlesHome();
            return data;
            // return createPresentacionDetalleObject(data);
        } catch (error) {
            console.log("test");
            return null;
        } finally {
            console.log("test finally");
        }
    }

    return { get };
}