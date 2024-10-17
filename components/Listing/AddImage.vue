<template>
  <div id="UploadImage">
    <h2 class="font-medium text-xl mb-6 mt-10">Upload Car Images</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <label for="uploadImage">
        <div
          @drop.prevent="handleDrag($event)"
          @dragover.prevent=""
          class="flex items-center justify-center flex-col border rounded-xl w-full aspect-[1/1] border-dashed border-primary bg-blue-100 cursor-pointer hover:shadow-md transition-all"
        >
          <Icon name="lucide:plus" size="24" class="text-black" />
          <span class="text-black text-center font-semibold"
            >Click or Drag to Upload</span
          >
        </div>
        <input
          type="file"
          @change="handleChange($event)"
          multiple
          id="uploadImage"
          hidden
          accept="image/*"
        />
      </label>
      <div
        v-for="(file, index) in filesDisplay"
        :key="index"
        class="relative w-full aspect-[1/1] overflow-hidden flex items-center justify-center rounded-xl"
      >
        <img :src="file" class="w-full rounded-xl" />
        <div
          class="absolute top-0 left-0 size-full bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
        >
          <Icon
            @click="handleDeleteUploadImage(index)"
            name="lucide:circle-x"
            size="30"
            class="opacity-60 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type CarImage = {
  id: string;
  imageUrl: string | null;
  carListingId: string;
  createdAt: string;
  updatedAt: string;
};
const prop = defineProps<{
  carImage?: CarImage[];
}>();

const filesDisplay = ref<string[]>([]);
const filesData = ref<File[]>([]);

onMounted(() => {
  filesDisplay.value =
    prop.carImage?.map((image) => image.imageUrl || "") || [];
});

function handleChange(e: Event) {
  const files = (e.target as HTMLInputElement).files;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      filesDisplay.value.push(URL.createObjectURL(files[i]));
      filesData.value.push(files[i]);
    }
  }
}
function handleDrag(e: DragEvent) {
  const files = e.dataTransfer?.files;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      filesDisplay.value.push(URL.createObjectURL(files[i]));
      filesData.value.push(files[i]);
    }
  }
}
function handleDeleteUploadImage(index: number) {
  if (filesData.value.length) {
    filesData.value.splice(index, 1);
  }
  const file = filesDisplay.value.splice(index, 1);
  URL.revokeObjectURL(file[0]);
}

async function uploadImage(carListingId: string) {
  const results = await useFirebase(filesData.value);
  const { data } = await useFetch("/api/db/car-image", {
    method: "POST",
    body: {
      carListingId: carListingId,
      images: results,
    },
    watch: false,
  });

  if (data.value?.message == "Success") {
    useCreateToast("Uploaded successfully!", undefined, "/profile");
    resetState();
    await navigateTo("/profile");
  } else
    useCreateToast(
      "Uploaded failed!",
      "red",
      undefined,
      "i-heroicons-x-circle"
    );
}

function resetState() {
  filesData.value = [];
  for (let i = 0; i < filesDisplay.value.length; i++) {
    URL.revokeObjectURL(filesDisplay.value[i]);
  }
}

async function updateImage(carListingId: string) {
  if (prop.carImage) {
    let removeImage: boolean[] = [];
    removeImage = prop.carImage.map((image) => {
      return filesDisplay.value.includes(image.imageUrl ?? "");
    });

    if (removeImage.some((bol) => bol == false)) {
      for (let i = 0; i < removeImage.length; i++) {
        if (removeImage[i] == false) {
          await useFetch(`/api/db/car-image`, {
            method: "DELETE",
            body: {
              id: prop.carImage[i].id,
            },
            watch: false,
          });
        }
      }
    }
  }

  const results = await useFirebase(filesData.value);
  const { data } = await useFetch("/api/db/car-image", {
    method: "POST",
    body: {
      carListingId: carListingId,
      images: results,
    },
    watch: false,
  });

  if (data.value?.message == "Success") {
    useCreateToast("Updated successfully!", undefined, "/profile");
    resetState();
    await navigateTo("/profile");
  } else
    useCreateToast("Updated failed!", "red", undefined, "i-heroicons-x-circle");
}

defineExpose({
  uploadImage,
  updateImage,
  filesDisplay,
});

onUnmounted(() => {
  for (let i = 0; i < filesDisplay.value.length; i++) {
    URL.revokeObjectURL(filesDisplay.value[i]);
  }
});
</script>
