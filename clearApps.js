const fetch = require("node-fetch");

let start = 81;
let end = 676;

const DeleteApplication = (index) => {
  const next = index + 1;
  fetch(`http://macmeharder.com:8080/private/application/${index}`, {
    method: "DELETE",
    headers: {
      Cookie:
        "session=MTYxODY1NzAwNXxEdi1CQkFFQ180SUFBUkFCRUFBQUh2LUNBQUVHYzNSeWFXNW5EQWtBQjNWelpYSmZhV1FEYVc1MEJBSUFBZz09fJcFBLkd1XtT6WqDkGYU95YFWMmRLiS0bFgDIAOBB_20",
    },
  })
    .then(() => {
      console.log(index);
      if (next <= end) DeleteApplication(next);
    })
    .catch((err) => console.log(err));
};

DeleteApplication(start);
