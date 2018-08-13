define({ "api": [
  {
    "type": "post",
    "url": "/api/article/add",
    "title": "添加文章",
    "group": "Article",
    "name": "addArticle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   data: {\n        success: 'success',\n        msg: '创建文章成功'\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    fail: 'fail',\n    msg: '创建文章失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/article.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/article/add"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/article/del",
    "title": "删除文章",
    "group": "Article",
    "name": "addArticle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   msg: \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    fail: 'fail',\n    msg: '删除失败'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/article.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/article/del"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/article/detail",
    "title": "文章详情",
    "group": "Article",
    "name": "addArticle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>文章Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      data: {\n        title: \"标题\",\n        content: \"内容\",\n        img: \"http:://example.com/1.jpg\",\n        imgTitle: \"图片描述\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    fail: '',\n    msg: ''\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/article.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/article/detail"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/article/all",
    "title": "获取所有文章数据",
    "group": "Article",
    "name": "getArticleAll",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": [\n        {\n            \"_id\": \"5b3302540fc22700200af738\",\n            \"author\": \"814731008@qq.com\",\n            \"username\": \"814731008@qq.com\",\n            \"title\": \"23123\",\n            \"content\": \"123123\",\n            \"__v\": 0\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   \"fail\": \"fail\",\n   \"msg\": \"没有文章\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/article.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/article/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/article/user",
    "title": "获取用户文章数据",
    "group": "Article",
    "name": "getArticleUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>游戏Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>游戏,kog或lol</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n     \"data\": [\n        {\n            \"_id\": \"5b3302540fc22700200af738\",\n            \"author\": \"814731008@qq.com\",\n            \"username\": \"814731008@qq.com\",\n            \"title\": \"23123\",\n            \"content\": \"123123\",\n            \"__v\": 0\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    fail: 'fail',\n    msg: '没有文章'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/article.js",
    "groupTitle": "Article",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/article/user"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "登录",
    "group": "Login",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   success: 'success',\n   username: username,\n   msg: '登录成功',\n   token: token\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   fail: 'fail',\n   msg: '用户名或密码不正确'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/login.js",
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "注册",
    "group": "Register",
    "name": "Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>昵称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   success: 'success',\n   username: data.username,\n   msg: '注册成功'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   error: error,\n   msg: '发生错误'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/register.js",
    "groupTitle": "Register",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/register/checkname",
    "title": "用户名是否存在",
    "group": "Register",
    "name": "checkname",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   exist: true,\n   msg: '用户已存在'\n}\n或\n{\n   exist: false,\n   msg: '用户可注册'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   error: error,\n   msg: '发生错误'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/register.js",
    "groupTitle": "Register",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/register/checkname"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/profile",
    "title": "用户资料",
    "group": "User",
    "name": "profile",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   success: 'success',\n   username: username,\n   surname: surname\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://192.168.11.7:3003/api/user/profile"
      }
    ]
  }
] });