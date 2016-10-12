export function getCourseInfo (classId) {
  return new Promise((resolve, reject) => {
    resolve(
      {
        "classId": 1,
        "className": "测试课程",
        "lessonName": "第一单元",
        "allowComment": true,
        "beginTime": "2016-9-6 20:00",
        "endTime": "2016-9-6 21:00",
        "teachers": [
          {
            "teacherId": 1,
            "teacherImage": "http://i3.s.7.hjfile.cn/img/entry/201605/84690a79-07f0-416f-b8b1-49598a417587.jpg",
            "teacherName": "Mike"
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
