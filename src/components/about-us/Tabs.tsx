import { useState } from "react";
import { tabs } from "@data/tabs";
import "@styles/tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full">
      <div className="w-full">
        {tabs.map(({ id, title, content, url }, index) => (
          <article
            key={id}
            id={id}
            className={`tab-content ${index === activeTab ? "visible" : ""}`}
          >
            <figure className="w-full">
              <img
                className="w-full object-cover aspect-video md:aspect-square lg:h-full lg:aspect-[16/7]"
                src={url}
                alt={title}
              />
            </figure>
            <div className="p-6 pb-10 bg-89007 text-white h-[22rem] md:h-auto lg:h-auto">
              <h2 className="uppercase font-bold mb-4 text-2xl md:text-2xl lg:text-3xl">
                {title}
              </h2>
              <p className="text-justify text-base">{content}</p>
            </div>
          </article>
        ))}
      </div>

      <ul className="w-full shadow-2xl p-0 grid grid-cols-2 md:flex md:justify-center lg:flex lg:justify-center">
        {tabs.map(({ id, label }, index) => (
          <li
            key={id}
            className={`tab-button ${index === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
