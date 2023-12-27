"use client";

const ResumeButton = () => {
  return (
    <h1
      onClick={() => {
        console.log("CLicked");
        window.location.href =
          "https://drive.google.com/file/d/1iwJyEMwqWcXbHfpI7qm5m3YAPGD7jiz1/view";
      }}
    >
      Resume📄
    </h1>
  );
};

export default ResumeButton;
