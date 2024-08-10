const handleClick = async () => {
  const files = await getFiles();

  if (files.length) {
    // 업로드 API 실행
    console.log(files);
  }
};

const getFiles = () => {
  return new Promise((resolve) => {
    const fileInput = document.createElement("input");
    const handler = () => {
      resolve(fileInput.files);
    };

    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("accept", "image/*");
    fileInput.setAttribute("multiple", "true");

    fileInput.onchange = handler;
    fileInput.oncancel = handler;

    fileInput.click();
  });
};
