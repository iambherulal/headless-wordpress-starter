import { UtensilsCrossed } from "lucide-react";
import React from "react";

export default function Features({ data }) {
  return (
    <section className="container my-32 px-2 lg:px-8 features">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {data?.map((item, index) => (
          <div key={index}>
            <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full`} style={{ backgroundColor: item?.background }}>
              <div className={`h-9 w-9`} style={{ color: item?.color }} dangerouslySetInnerHTML={{ __html: item.icon }} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">
              {item.title}
            </h3>
            <p className="mt-4 text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
