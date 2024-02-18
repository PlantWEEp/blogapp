import React from "react";
import Ratings from "../addPost/Ratings";

function DetailPages() {
  const tabs = ["Ratings", "Over View", "Stay", "Photos"];
  const images = [
    "https://images.unsplash.com/photo-1612607805663-9429ad361c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612607805663-9429ad361c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612607805663-9429ad361c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612607805663-9429ad361c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <>
      <div className="flex gap-3 mb-3 w-full">
        {tabs.map((tab, key) => (
          <div
            key={key}
            className="border px-6 py-1 rounded-sm hover:bg-skin-secondary cursor-pointer"
          >
            {tab}
          </div>
        ))}
      </div>
      <div>
        <div id="ratings">
          <div className="h-[200px] bg-black w-full"></div>
        </div>
        <div id="Overview" className="py-4">
          <h5 className="text-custom-h5 font-bold pb-3">Over View</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum labore tenetur beatae totam sit illo et reprehenderit vitae, voluptates eligendi, sunt itaque praesentium in mollitia. Maiores sunt, dolorem ad quae, fugit fuga harum quod ut expedita magni molestias dolorum blanditiis dolor non laborum adipisci maxime quis iste esse totam aut nam beatae ipsam neque. Voluptas veritatis, cum quos earum temporibus laboriosam sint? Assumenda veritatis iusto aperiam molestias ea perferendis dicta, mollitia ad dolor exercitationem excepturi non eveniet earum voluptates molestiae blanditiis in tempora reiciendis? Consequatur cumque, cum ducimus consequuntur perspiciatis error nisi maiores aperiam adipisci nulla eveniet autem quidem accusamus architecto excepturi quos facilis nihil et repudiandae. Deleniti at libero, quasi unde sapiente dolores iusto beatae, cum laudantium placeat harum consectetur inventore natus illum, eaque aliquam consequuntur expedita nesciunt delectus praesentium est. Praesentium repellendus, obcaecati et ex nulla inventore eos unde dolorum, nemo adipisci eaque laborum necessitatibus atque ducimus, ea reprehenderit! Optio non repellendus vel, commodi deleniti repellat a maiores illum velit libero placeat dolorem animi ut quis temporibus tempore obcaecati? Nobis expedita a nemo nisi distinctio alias quo quis atque dicta mollitia non quae numquam iusto, ducimus modi. A nobis quisquam nemo cum praesentium id incidunt natus deserunt iure!
          </p>
        </div>
        <div id="Photos">
          <h5 className="text-custom-h5 font-bold pb-3">Photos</h5>
          {images.map((image, index) => (
            <img src={image} key={index} alt={`Image ${index}`} />
          ))}
        </div>
        <div id="Stay"></div>
      </div>
    </>
  );
}

export default DetailPages;
