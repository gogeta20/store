export class Article {
  title: string;
  tags: string[];
  author: number;
  images: any;
  files: any;
  content: string;
  category: string;

  constructor(title: string, author: number, content: string, images: any, files: any, tags: string[], category: string) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.images = images;
    this.files = files;
    this.tags = tags;
    this.category = category;
  }
}
