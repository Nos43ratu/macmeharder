import React from "react";

const PostSm = () => {
  return (
    <div className="w-full h-64 flex flex-col overflow-hidden">
      <img
        src="https://sun9-55.userapi.com/impf/xNakkYlcehO-bkDNRJ84o-v-fs47tKKmHeHvEw/e08uAUVRa4w.jpg?size=1280x960&quality=96&sign=eaef6e7710da2d2d448cd4d589d5bea7&type=album"
        className=" flex-auto  rounded-sm object-cover"
        alt="post"
      />
      <div className="flex flex-col justify-end text-santosGray mt-3">
        <div className="text-xs uppercase font-bold clamp-1">Get it done</div>
        <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden">
          Tidy up your mac
        </div>
        <div className="text-sm mt-2 clamp-3">
          Clear out of the cruft with these handy apps
        </div>
      </div>
    </div>
  );
};

export default PostSm;
