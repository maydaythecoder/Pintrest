"use client";
import React, { useEffect, useState } from 'react';
import PinImage from './../../components/PinDetail/PinImage';
import PinInfo from './../../components/PinDetail/PinInfo';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import app from '@/app/Shared/firebaseConfig';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useRouter } from 'next/navigation';

function PinDetail({ params }) {
  const router = useRouter();
  const db = getFirestore(app);
  const [pinDetail, setPinDetail] = useState([]);

  useEffect(() => {
    getPinDetail();
  }, []);

  const getPinDetail = async () => {
    const docRef = doc(db, 'pinterest-post', params.pinId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPinDetail(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };


    
    const handleBackButtonClick = () => {
      router.back();
    };
  

    return (
      <>
                <div className='p-3 md:p-12 rounded-2xl md:px-24 lg:px-36 fixed ml-2 mt-2'>
            <svg
              aria-hidden="true"
              aria-label=""
              height="35"
              width="35"
              role="img"
              viewBox="0 0 24 24"
              className="text-[60px] font-bold ml-[-130px] cursor-pointer rounded-full p-2 "
              onClick={handleBackButtonClick}
            >
              <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z" />
            </svg>
            <p className='-ml-20 -mt-[29px] font-medium text-lg'>For you</p>
            </div>
        {pinDetail ? (
          <div className=' bg-white p-3 md:p-12 rounded-2xl md:px-24 lg:px-36 mt-12'>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-2xl ">
                <PinImage pinDetail={pinDetail} className="h-full lg:w-full " />
                  <div className="">
                    <PinInfo pinDetail={pinDetail} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  };


export default PinDetail;