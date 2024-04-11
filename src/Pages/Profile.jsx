import React, { useState } from "react";
import Dribbble from "../components/Dribble";

const posts = [
  {
    title: "I'm a designer looking to share my work",
    img: "https://ik.imagekit.io/dnacvljugg/design.png?updatedAt=1712681750172",
    date: "Jan 4 2022",
    desc: "With over 7 million shots from a vast community of designers, dribble is the leading source of design inspiration.",
    text: "Anything else? you can select multiple"
  },
  {
    title: "I'm looking to share a design",
    img: "https://ik.imagekit.io/dnacvljugg/design.png?updatedAt=1712681750172",
    date: "Jan 4 2022",
    desc: "With over 7 million shots from a vast community of designers, dribble is the leading source of design inspiration.",
    text: "Anything else? you can select multiple"
  },
  {
    title: "I'm looking for a design inpiration",
    img: "https://ik.imagekit.io/dnacvljugg/design.png?updatedAt=1712681750172",
    date: "Jan 4 2022",
    desc: "With over 7 million shots from a vast community of designers, dribble is the leading source of design inspiration.",
    text: "Anything else? you can select multiple"
  },
];

const Profile = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedCardDesc, setSelectedCardDesc] = useState("");
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [finishButtonText, setFinishButtonText] = useState("");

  const handleCardSelect = (index, desc, text) => {
    setSelectedCardIndex(index);
    setSelectedCardDesc(desc);
    setFinishButtonText(text);
    setShowFinishButton(true);
  };

  const handleFinishButtonClick = () => {
    // Handle finish button click action here
  };

  return (
    <>
      <Dribbble />
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl ">
              What brings you to dribble?
            </h1>
            <p className="text-gray-600">
              Select the options that best describe you. Don't worry, you can
              explore the other options later.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 border-purple-700">
            {posts.map((item, index) => (
              <li
                className={`w-full mx-auto group sm:max-w-sm ${
                  selectedCardIndex === index ? "border-pink-500 border-[3px] rounded-md" : ""
                }`}
                key={index}
              >
                <div
                  className={`plant-card relative overflow-hidden rounded-lg shadow-lg ${
                    selectedCardIndex === index ? "selected" : ""
                  }`}
                  onClick={() => handleCardSelect(index, item.desc, item.text)}
                >
                  <img
                    src={item.img}
                    loading="lazy"
                    alt={item.title}
                    className="w-full rounded-lg transition-transform duration-300 transform group-hover:-translate-y-10"
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-gray-800 font-extrabold flex justify-center items-center">
                      {item.title}
                    </h3>
                    {selectedCardIndex === index && (
                      <p className="text-gray-600 text-sm flex flex-row text-center mt-4">{item.desc}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          {showFinishButton && (
            <div className="text-center mt-8">
              <p className="text-black font-bold text-lg">{finishButtonText}</p>
              <button
                className="px-5 py-3 my-5 text-white duration-150 rounded-lg bg-pink-500 hover:bg-pink-600"
                onClick={handleFinishButtonClick}
              >
                Finish
              </button>
            </div>
          )}
          
        </div>
      </section>
    </>
  );
};

export default Profile;
