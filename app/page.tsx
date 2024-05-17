import Table from "@/components/Table";
import Link from "next/link";
import { MdOutlineWindow } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <main className="border rounded-2xl">
        <div className="flex justify-between items-center p-4 border-b rounded-2xl">
          <h1 className="text-2xl font flex items-center">
            <MdOutlineWindow className="mr-2" /> Dataset Viewer
          </h1>
          <div className="flex items-center space-x-4 text-slate-300">
            <div className="flex items-center space-x-1">
              <Link href={"#"} className="text-lg underline flex items-center">
                <TfiReload className="mr-1" /> Auto-converted
              </Link>
              <p>to Parquet</p>
            </div>
            <button className="border text-black px-2 py-1 rounded bg-gray-100">
              API
            </button>
            <button className="border text-black px-2 py-1 rounded flex bg-gray-100">
              <MdOutlineWindow className="bg-red-500 text-white"/>
              View in Dataset Viewer
            </button>
          </div>
        </div>
        <Table />
      </main>
    </div>
  );
}
