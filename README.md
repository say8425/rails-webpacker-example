# What is it?
2018년 8월 4일 perl x ruby 2018 모임에서 발표한 자료 입니다.
Ruby on Rails 5.1 에 추가된 webpacker 사용해보기 라이브 코딩 할때 작성된 코드를 다음어서 올립니다.

# entry
```
javascript
├── packs
│   ├── application.js
│   └── stylesheets.scss
└── src
    └── posts
        ├── images
        │   ├── index.js
        │   └── sigong.gif
        ├── index.js
        └── index.scss
```
레일즈 트리 구조를 본따서 만들었습니다. 트리 구조에 대해서는 webpacker에서도 [언급](https://github.com/rails/webpacker/blob/master/docs/folder-structure.md#namespacing)되어 있으니 참고하세요.

# webpack-dev-server
전통적인 `rails s` 명령어로 서버를 실행하면 webpack도 같이 실행되므로 신경 쓸 필요 없습니다.
하지만 개발을 좀 더 윤택하게 하게 해주는 [hot module reloading](https://medium.com/rubyinside/hot-module-reloading-with-webpacker-b663643a60b1)을 사용하고 싶다면 `bin/webpack-dev-server`를 터미널에서 추가로 실행하세요.
