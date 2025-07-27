import { useCallback, useEffect, useState } from "react";
import { fetchUpdates, type latestUpdate} from "../../lib/axios/api/latestupdate";
import { useAppDispatch, useAppSelector } from "../../lib/store/store";
import Loading from "./Loading";
import { setLoading } from "../../lib/store/Features/loadingSlice";
import { Link } from "react-router-dom";

export default function TickerBar() {
  const [hold, setHold] = useState<boolean>(false)
  const loading = useAppSelector(s => s.loadingScreen.loading)
  const dispatch = useAppDispatch()
  const [item, setItem] = useState<latestUpdate | null>(null)

  const showingData = useCallback(() => {
     fetchUpdates().then((data) => {
      dispatch(setLoading(true))
      if (data)
        setItem(data)
    }).finally(()=>
      dispatch(setLoading(false)) // Changed this to false to properly handle loading state
    )
  }, [dispatch])

  useEffect(
    () => showingData(), [showingData])

  if (loading && !item) {
    return <Loading />
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#0E4B82] text-white">
      <div className="flex items-center overflow-hidden">
        {/* Label Section */}
        <div className="relative bg-primary pl-6 pr-6 py-4 text-white font-semibold whitespace-nowrap">
          <span className="relative z-10">
            Latest Updates
          </span>
          {/* Wedge arrow */}
          <div className="absolute -right-2 rotate-45 w-20 h-20 bg-primary z-9  -top-3.5 2xl:-top-2.5"></div>
          <div className="absolute -right-3 rotate-45 w-20 h-20 bg-white z-8  -top-3.5 2xl:-top-2.5"></div>
        </div>
         
        {/* Marquee Text */}
        <div className="overflow-hidden whitespace-nowrap py-2 w-full">
          <div 
            onMouseEnter={() => setHold(true)} 
            onMouseLeave={() => setHold(false)} 
            className="inline-block min-w-full cursor-pointer animate-marquee"
            style={{
              animationPlayState: hold ? 'paused' : 'running'
            }}
          >                       
            <Link to={item?.input1_link ??""} className="px-4">{item?.input1_data}</Link>
            <Link to={item?.input2_link ??""} className="px-4">{item?.input2_data}</Link>
            <Link to={item?.input3_link ??""} className="px-4">{item?.input3_data}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}