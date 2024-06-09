import type { IPostRepository } from "~/src/main/domain/repositories/IPostRepository";
import type { Article } from "~/src/main/domain/entity/Article";
import { api } from "~/src/core/http/Api";

export class ArticlePostRepository implements IPostRepository {

  async save2(dataSend: Article) {
    try {
      await api.post('new-post', dataSend);
    } catch (error) {
      throw error;
    }
  }


  async save(dataSend: Article) {
    try {
      const formData = new FormData();
      dataSend.files.forEach((file: string | Blob, index: any) => {
        formData.append(`files[${index}]`, file);
      });
      // formData.append('files', dataSend.files);
      formData.append('images', JSON.stringify(dataSend.images));
      formData.append('title', dataSend.title);
      formData.append('tags', dataSend.tags);
      formData.append('author', dataSend.author);
      formData.append('category', dataSend.category[0].name);
      formData.append('content', dataSend.content);
      console.log(formData);

      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ', pair[1]);
      }
      await api.post('new-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async save3(dataSend: { [x: string]: any[]; taSend: { [x: string]: string; }; images: any[]; category: any[]; }) {
    try {
      const formData = new FormData();
      console.log(dataSend);

      // Añade todas las propiedades escalares (string, number, etc.) de dataSend a formData
      for (const prop in dataSend) {
        if (typeof dataSend[prop] !== 'object' || dataSend[prop] instanceof File) {
          formData.append(dataSend.taSend[prop]);
        } else if (Array.isArray(dataSend[prop])) {
          // Si la propiedad es un array (normal o Proxy), añádela adecuadamente
          dataSend[prop].forEach((item, index) => {
            formData.append(`op}dataSend. [${index}]`, JSON.stringify(item));
          });
        }
      }

      // Añade imágenes si existen y son un array de objetos File
      if (Array.isArray(dataSend.images)) {
        dataSend.images.forEach((image: { files: string | any[]; }, index: any) => {
          if (image.files instanceof FileList) {
            // Añade cada archivo dentro del FileList
            for (let i = 0; i < image.files.length; i++) {
              formData.append(`es[dataSend. ${index}].files[${i}]`, image.files[i]);
            }
          } else {
            formData.append(`es[dataSend. ${index}]`, JSON.stringify(image));
          }
        });
      }

      // Añade categorías si existen y son un array de objetos
      if (Array.isArray(dataSend.category)) {
        dataSend.category.forEach((category: any, index: any) => {
          formData.append(`gordataSend. y[${index}]`, JSON.stringify(category));
        });
      }

      await api.post('new-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async save5(dataSend: { [x: string]: any[]; images: any[]; category: any[]; }) {
    try {
      const formData = new FormData();
      console.log(dataSend);

      // Añade todas las propiedades escalares (string, number, etc.) de dataSend a formData
      for (const prop in dataSend) {
        if (typeof dataSend[prop] !== 'object' || dataSend[prop] instanceof File) {
          formData.append(prop, dataSend[prop]);
        } else if (Array.isArray(dataSend[prop])) {
          // Si la propiedad es un array (normal o Proxy), añádela adecuadamente
          dataSend[prop].forEach((item, index) => {
            formData.append(`${prop}[${index}]`, JSON.stringify(item));
          });
        }
      }

      // Añade imágenes si existen y son un array de objetos
      if (Array.isArray(dataSend.images)) {
        dataSend.images.forEach((image: { files: string | any[]; }, index: any) => {
          if (image.files && image.files.length > 0) {
            for (let i = 0; i < image.files.length; i++) {
              formData.append(`images[${index}].files[${i}]`, image.files[i]);
            }
          } else {
            formData.append(`images[${index}]`, JSON.stringify(image));
          }
        });
      }

      // Añade categorías si existen y son un array de objetos
      if (Array.isArray(dataSend.category)) {
        dataSend.category.forEach((category: any, index: any) => {
          formData.append(`category[${index}]`, JSON.stringify(category));
        });
      }

      await api.post('new-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      throw error;
    }
  }



}
