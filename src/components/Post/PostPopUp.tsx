import React from "react";

const PostPopUp = (close: any) => {
  return (
    <div className="bg-tuna h-full w-full flex flex-col md:flex-row overflow-auto fixed">
      <div className="md:w-2/5 w-full">
        <div className="absolute mt-16 ml-8">
          <div className="text-sm uppercase font-bold clamp-1 text-santosGray">
            OUR FAVORITES
          </div>
          <div className="text-white text-4xl clamp-2 overflow-ellipsis overflow-hidden mt-2">
            Apps and games for 2021
          </div>
        </div>
        <img
          src="https://sun9-3.userapi.com/impg/c858424/v858424254/1e9306/iylXlgMEDKE.jpg?size=1486x2000&quality=96&proxy=1&sign=47e19c6e76762e374b91836a57c7ce61&type=album"
          className=" object-cover h-full w-full"
          alt="post"
        />
      </div>
      <div className="bg-balticSea md:w-3/5 w-full pt-20 px-10">
        <div className="border-b border-tuna text-2xl pb-8 flex">
          <div> Start 2021 off right</div>
          <div className="text-santosGray float-left ml-1">
            with these new and updated apps and games of the past year.
          </div>
        </div>
        <div className="text-2xl pt-8">For staying productive</div>
        <div className="text-2xl pt-2">Meeter</div>
        <div className="text-santosGray py-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia
        </div>
        <div className="text-santosGray py-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia
        </div>
        <div className="text-santosGray py-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia
        </div>
        <div className="text-santosGray py-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia
        </div>
      </div>
    </div>
  );
};

export default PostPopUp;
