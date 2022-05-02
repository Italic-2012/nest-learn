import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  allArticle() {
    return [
      {
        title: '珊瑚',
        content: '大海的中珊瑚',
      },
      {
        title: '珊瑚2',
        content: '大海的中珊瑚2',
      },
      {
        title: '珊瑚3',
        content: '大海的中珊瑚3',
      },
      {
        title: '珊瑚4',
        content: '大海的中珊瑚4',
      },
    ];
  }
}
