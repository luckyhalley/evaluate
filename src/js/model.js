export function getCourseInfo (classId) {
  return new Promise((resolve, reject) => {
    resolve(
      {
        "classId": 1,
        "className": "JavaScript高级程序设计",
        "lessonName": "第一单元",
        "allowComment": true,
        "beginTime": "2016-9-6 20:00",
        "endTime": "2016-9-6 21:00",
        "teachers": [
          {
            "teacherId": 1,
            "teacherImage": "http://n1image.hjfile.cn/res7/2016/11/03/c5d66d9eafc4f5b4177626eb001e492d.jpg",
            "teacherName": "Nicholas C. Zakas"
          }
        ]
      }
    );
  });
}

export function getScore (classId) {
  return new Promise((resolve, reject) => {
    resolve(
      {
        "data": {
          "classId": 1,
          "anonymous": 1,
          "behave": 4,
          "boardLayout": 5,
          "harvest": 5,
          "interaction": 3,
          "comment": "评价内容",
          "hasEvaluation": 1,
          "userID": 1
        },
        "message": "",
        "status": 0
      }
    );
  });
}
