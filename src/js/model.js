export function getScore(classId) {
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