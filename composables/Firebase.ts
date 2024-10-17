import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { firebaseStore } from "~/server/firebase/config";

async function upload(file: File) {
  const name = Date.now() + ".jpg";
  const storageRef = ref(firebaseStore, `images/${name}`);
  const metadata = {
    contentType: "image/jpeg",
  };
  const snapShot = await uploadBytes(storageRef, file, metadata);
  const url = await getDownloadURL(snapShot.ref);
  return url;
}

export const useFirebase = async (files: File[]) => {
  try {
    const uploadPromises = files.map((file) => upload(file));
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error: any) {
    throw showError(error);
  }
};
