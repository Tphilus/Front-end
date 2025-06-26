import Image from "next/image";
import pixImage from "../../images/GodisablePexels.jpg";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className=" text-4xl">ID: {params.id}</h1>
      <section className=" flex gap-x-4 mt-4">
        {/* local image  */}
        <div>
          <Image
            src={pixImage}
            alt="pixImage"
            priority
            width={192}
            height={192}
            className=" w-48 h-48 object-cover rounded"
          />
        </div>

        {/* remote image  */}
        <div></div>
      </section>
    </div>
  );
}

export default page;
