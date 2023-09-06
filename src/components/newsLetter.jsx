import update from "../assets/update.svg";
import { useState } from "react";

const NewsLetter = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post("YOUR_BACKEND_URL", {
        data: input,
      });
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className={"newsletter_container"}>
      <div
        className={"newsletter_wrapper flex flex-col items-center mt-[195px]"}
      >
        <span className={"text-[48px] font-semibold text-center"}>
          NEWSLETTER
        </span>
        <p
          className={
            "text-[24px] text-center font-medium mt-[45px] w-[950px] whitespace-wrap"
          }
        >
          If you read these words, you are early. We plan to reward all early
          contributors. Drop us your email address to stay up to date!
        </p>
      </div>

      <div
        className={
          "w-[1140px] flex justify-between items-center border border-blue-700 px-[35px] py-[20px] box-border rounded-[16px] mt-[63px] "
        }
        style={{ backgroundColor: "rgba(46,0,255,0.1)" }}
      >
        <input
          type="text"
          placeholder={"Enter Your email here"}
          className={"outline-none bg-transparent"}
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>
          <img src={update} alt="emailupdate" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
