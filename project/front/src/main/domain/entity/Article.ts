export class Article {
    title: string;
    tags: string[];
    author: string;
    images: string[];
    content: string;

    constructor(title: string, author: string, content: string, images: string[], tags: string[]) {
        this.title = title;
        this.author = author;
        this.content = content;
        this.images = images;
        this.tags = tags;
    }
}
