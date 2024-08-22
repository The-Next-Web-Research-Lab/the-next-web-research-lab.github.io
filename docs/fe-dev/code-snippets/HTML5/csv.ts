interface Props {
  listData: string[][];
  fileName: string;
}

const downloadCSVFile = ({ listData, fileName }: Props) => {
  const BOM_FOR_KOREAN = "\uFEFF";
  const options = {
    type: "text/csv",
  };

  const content = listData
    .map((item) => {
      return item.map((innerItem) => `"${innerItem}"`).join(",");
    })
    .join("\n");

  const csvBlob = new Blob([`${BOM_FOR_KOREAN}${content}`], options);
  const href = window.URL.createObjectURL(csvBlob);

  Object.assign(document.createElement("a"), {
    href,
    download: `${fileName}_${Date.now()}.csv`,
  }).click();

  window.URL.revokeObjectURL(href);
};
