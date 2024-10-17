export const useFileReaderMultiple = (files: File[]): Promise<string[]> => {
  return Promise.all(
    files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (typeof reader.result === "string") {
            resolve(reader.result);
          } else {
            reject(new Error("Không thể đọc dữ liệu tệp."));
          }
        };

        reader.onerror = () => {
          reject(new Error("Có lỗi xảy ra khi đọc tệp."));
        };

        reader.readAsDataURL(file);
      });
    })
  );
};
