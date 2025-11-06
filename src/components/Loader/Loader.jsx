import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css"

export default function MyComponent() {
    const [loading, setLoading] = useState(true)
    return (
        <div className={css.loader}>
                  <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        visible={loading}
      />
      </div>

);
}

// import { Audio, Oval, ThreeDots, ThreeDots  } from "react-loader-spinner";

// export default function MyComponent() {
//   return (
    // <Audio
    //   height="80"
    //   width="80"
    //   color="#4fa94d"
    //   ariaLabel="audio-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="wrapper-class"
    //   visible={true}
    // />
// {/* <ThreeDots
//   height="80"
//   width="80"
//   radius="9"
//   color="#4fa94d"
//   ariaLabel="three-dots-loading"
//   wrapperStyle={{ margin: '20px' }}
//   wrapperClass="custom-loader"
//   visible={true}
//       /> */}
 
// //     <Oval
// //   height={80}
// //   width={80}
// //   color="#4fa94d"
// //   visible={true}
// //   ariaLabel="oval-loading"
// //   secondaryColor="#4fa94d"
// //   strokeWidth={2}
//       //   strokeWidthSecondary={2}
      
//       // />
{/* <ThreeDots
  height="80"
  width="80"
  radius="9"
  color="#4fa94d"
  ariaLabel="three-dots-loading"
  wrapperStyle={{ margin: '20px' }}
  wrapperClass="custom-loader"
  visible={true}
/> */}
//    //   <TailSpin
//    //     height="80"
//    //     width="80"
//    //     color="#4fa94d"
//    //     ariaLabel="tail-spin-loading"
//    //     visible={loading}
//    //   />
// );
// }
