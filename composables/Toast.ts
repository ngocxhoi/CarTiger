export type NotificationColor =
  | "gray"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "primary";
export const useCreateToast = (
  title: string,
  color: NotificationColor = "green",
  path?: string,
  icon: string = "i-heroicons-check-circle"
) => {
  const toast = useToast();
  toast.add({
    icon: icon,
    title: title,
    color: color,
    click: async () => {
      await navigateTo(`${path}`);
    },
  });
};
