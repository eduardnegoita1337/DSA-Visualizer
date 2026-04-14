import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex text-4xl justify-center pt-20">
        Data Structures and Algorithms Visualizer
      </div>
      <div className="flex text-lg pl-20 pt-10 indent-7">
        <p className="indent-8">
        This project is a tool that is meant to guide you through all the data structures in existence and provide an easy-to-digest visual representation for all the algorithms associated
        with them.
        </p>
      </div>
    </div>
  );
}
