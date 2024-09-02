import { FaDiscord } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
    <div className="bg-custom-dark-blue mt-8 rounded-t-[20px]">
      <div className="text-white flex space-x-32 justify-center w-full">
        <div className="flex flex-col items-center mt-4">
          <p className="text-2xl font-semibold">inNews</p>
          <p className="text-center">Concise news for busy lives—stay <br></br>
            informed, stay ahead daily.</p>
        </div>

        <div className="flex flex-col items-center mt-4">
          <p className="text-2xl font-semibold ml-4">Links</p>
          <ul className="flex flex-col gap-2 list-none">
            <li>
              <a href="#" className="no-underline text-white">Home</a>
            </li>
            <li>
              <a href="#" className="no-underline text-white">Feedback</a>
            </li>
            <li>
              <a href="#" className="no-underline text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="no-underline text-white">Contacts</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center mt-4">
          <p className="text-2xl font-semibold mr-4">Follow Us</p>
          <div className="flex justify-center">
            <FaDiscord className={`text-white ${styles.Discord_Icon}`}/>
            <FaSquareInstagram className={`text-white ${styles.Insta_Icon}`}/>
            <FaYoutube className={`text-white ${styles.YouTube_Icon}`}/>
          </div>
          
        </div>

        <div className="flex flex-col items-center mt-4">
          <p className="text-2xl font-semibold">Call Us</p>
          <p>7488197567</p>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Footer 