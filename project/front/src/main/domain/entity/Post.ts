export class Post {
    title: string;
    author: string;
    date: Date;
    content: string;
    images: string[];
    tags: string[];

    constructor(title: string, author: string, content: string, images: string[], tags: string[]) {
        this.title = title;
        this.author = author;
        this.date = new Date();
        this.content = content;
        this.images = images;
        this.tags = tags;
    }
}