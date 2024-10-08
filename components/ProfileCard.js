import React from 'react';
//import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div>
        <div className="card bg-base-100 w-80 shadow-xl ">
            <div className="avatar items-center justify-center mt-12">
                <div className="mask mask-squircle w-24 shadow-2xl items-center">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

        <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Caleb Zwingli</h2>
            <p className="text-sm text-white">@ZwingliCaleb</p>
            <div className="card-actions flex flex-col mb-12">
                <button className="btn bg-[#0d1117]">Github</button>
                <button className="btn bg-[#bb0000]">Youtube</button>
                <button className="btn bg-[#0390d1]">Linkedin</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileCard
