const fetch = require("node-fetch");
for (let i = 1; i <= 113; i++) {
  fetch(`http://macmeharder.com:8080/private/application/${i}`, {
    method: "DELETE",
    headers: {
      Cookie:
        "session=MTYxODY1NzAwNXxEdi1CQkFFQ180SUFBUkFCRUFBQUh2LUNBQUVHYzNSeWFXNW5EQWtBQjNWelpYSmZhV1FEYVc1MEJBSUFBZz09fJcFBLkd1XtT6WqDkGYU95YFWMmRLiS0bFgDIAOBB_20",
    },
  }).catch((err) => console.log(err));
}
