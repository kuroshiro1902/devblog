import Resizer from "react-image-file-resizer";
export default function (file, setFile) {
  Resizer.imageFileResizer(
    file,
    1600, // max-width
    900, // max-height
    "JPEG", // định dạng ảnh mới (JPEG, PNG, GIF)
    85, // chất lượng mới (0-100)
    0, // độ quay (0, 90, -90, 180)
    (newFile) => {
      setFile(newFile);
    },
    "file" // đầu ra (base64, file, blob)
  );
}
