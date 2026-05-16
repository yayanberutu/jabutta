export type EventUseCase = {
  title: string;
  description: string;
  icon: "plate" | "cross" | "home" | "briefcase" | "gift";
};

export const eventUseCases: EventUseCase[] = [
  {
    title: "Arisan",
    description: "Menu praktis untuk meja kumpul yang hangat dan akrab.",
    icon: "plate",
  },
  {
    title: "Partangiangan",
    description: "Hidangan rumahan untuk momen doa dan kebersamaan.",
    icon: "cross",
  },
  {
    title: "Kumpul keluarga",
    description: "Rasa kampung yang mudah dinikmati semua generasi.",
    icon: "home",
  },
  {
    title: "Acara kantor kecil",
    description: "Pilihan sederhana untuk rapat, syukuran, dan makan bersama.",
    icon: "briefcase",
  },
  {
    title: "Oleh-oleh untuk keluarga",
    description: "Roti Ketawa Siantar yang mudah dibawa dan dibagikan.",
    icon: "gift",
  },
];
