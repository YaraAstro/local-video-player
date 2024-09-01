import DropZoneButton from "@/ui/dropZoneButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center">
      <DropZoneButton />
    </main>
  );
}
