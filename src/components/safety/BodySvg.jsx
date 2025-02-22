import React from "react";

const BodySvg = ({ selectedParts, toggleSelection, isFront }) => {
  const defaultColor = "#4A90E2";
  const selectedColor = "red";

  const partMap = {
    "Sol Omuz": "Sağ Omuz",
    "Sağ Omuz": "Sol Omuz",
    "Sol Üst Kol": "Sağ Üst Kol",
    "Sağ Üst Kol": "Sol Üst Kol",
    "Sol Alt Kol": "Sağ Alt Kol",
    "Sağ Alt Kol": "Sol Alt Kol",
    "Sol Dirsek": "Sağ Dirsek",
    "Sağ Dirsek": "Sol Dirsek",
    "Sol El": "Sağ El",
    "Sağ El": "Sol El",
    "Sol Üst Bacak": "Sağ Üst Bacak",
    "Sağ Üst Bacak": "Sol Üst Bacak",
    "Sol Alt Bacak": "Sağ Alt Bacak",
    "Sağ Alt Bacak": "Sol Alt Bacak",
    "Sol Diz": "Sağ Diz",
    "Sağ Diz": "Sol Diz",
    "Sol Ayak": "Sağ Ayak",
    "Sağ Ayak": "Sol Ayak",
    "Sol Kulak": "Sağ Kulak",
    "Sağ Kulak": "Sol Kulak",
  };

  const getCorrectPart = (part) =>
    !isFront && partMap[part] ? partMap[part] : part;

  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 600"
        className="w-[250px] h-auto"
      >
        {/* Kafa */}
        <circle
          cx="200"
          cy="70"
          r="40"
          fill={selectedParts.includes("Kafa") ? selectedColor : defaultColor}
          onClick={() => toggleSelection("Kafa")}
          className="cursor-pointer"
        />

        {/* Kulaklar */}
        <circle
          cx="160"
          cy="70"
          r="10"
          fill={
            selectedParts.includes(getCorrectPart("Sol Kulak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol Kulak"))}
          className="cursor-pointer"
        />
        <circle
          cx="240"
          cy="70"
          r="10"
          fill={
            selectedParts.includes(getCorrectPart("Sağ Kulak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ Kulak"))}
          className="cursor-pointer"
        />

        {/* Gözler */}
        {isFront && (
          <>
            <circle
              cx="185"
              cy="65"
              r="6"
              fill={
                selectedParts.includes("Sol Göz") ? selectedColor : "white"
              }
              onClick={() => toggleSelection("Sol Göz")}
              className="cursor-pointer"
            />
            <circle
              cx="215"
              cy="65"
              r="6"
              fill={
                selectedParts.includes("Sağ Göz") ? selectedColor : "white"
              }
              onClick={() => toggleSelection("Sağ Göz")}
              className="cursor-pointer"
            />
          </>
        )}

        {/* Boyun */}
        <rect
          x="180"
          y="100"
          width="40"
          height="30"
          fill={selectedParts.includes("Boyun") ? selectedColor : defaultColor}
          onClick={() => toggleSelection("Boyun")}
          className="cursor-pointer"
        />

        {/* Gövde */}
        {isFront ? (
          <>
            <rect
              x="140"
              y="130"
              width="120"
              height="90"
              fill={
                selectedParts.includes("Göğüs") ? selectedColor : defaultColor
              }
              onClick={() => toggleSelection("Göğüs")}
              className="cursor-pointer"
            />
            <rect
              x="140"
              y="220"
              width="120"
              height="90"
              fill={
                selectedParts.includes("Karın") ? selectedColor : defaultColor
              }
              onClick={() => toggleSelection("Karın")}
              className="cursor-pointer"
            />
          </>
        ) : (
          <>
            <rect
              x="140"
              y="130"
              width="120"
              height="80"
              fill={
                selectedParts.includes("Sırt") ? selectedColor : defaultColor
              }
              onClick={() => toggleSelection("Sırt")}
              className="cursor-pointer"
            />
            <rect
              x="140"
              y="210"
              width="120"
              height="50"
              fill={selectedParts.includes("Bel") ? selectedColor : defaultColor}
              onClick={() => toggleSelection("Bel")}
              className="cursor-pointer"
            />
            <rect
              x="140"
              y="260"
              width="120"
              height="50"
              fill={
                selectedParts.includes("Kalça") ? selectedColor : defaultColor
              }
              onClick={() => toggleSelection("Kalça")}
              className="cursor-pointer"
            />
          </>
        )}

        {/* Kollar */}
        <rect
          x="100"
          y="160"
          width="30"
          height="70"
          fill={
            selectedParts.includes(getCorrectPart("Sol Üst Kol"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol Üst Kol"))}
          className="cursor-pointer"
        />
        <rect
          x="100"
          y="230"
          width="30"
          height="70"
          fill={
            selectedParts.includes(getCorrectPart("Sol Alt Kol"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol Alt Kol"))}
          className="cursor-pointer"
        />

        <rect
          x="270"
          y="160"
          width="30"
          height="70"
          fill={
            selectedParts.includes(getCorrectPart("Sağ Üst Kol"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ Üst Kol"))}
          className="cursor-pointer"
        />
        <rect
          x="270"
          y="230"
          width="30"
          height="70"
          fill={
            selectedParts.includes(getCorrectPart("Sağ Alt Kol"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ Alt Kol"))}
          className="cursor-pointer"
        />

        {/* Eller */}
        <circle
          cx="115"
          cy="310"
          r="15"
          fill={
            selectedParts.includes(getCorrectPart("Sol El"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol El"))}
          className="cursor-pointer"
        />
        <circle
          cx="285"
          cy="310"
          r="15"
          fill={
            selectedParts.includes(getCorrectPart("Sağ El"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ El"))}
          className="cursor-pointer"
        />

        {/* Omuzlar */}
        <rect
          x="90"
          y="130"
          width="50"
          height="30"
          fill={
            selectedParts.includes(getCorrectPart("Sol Omuz"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol Omuz"))}
          className="cursor-pointer"
        />

        <rect
          x="260"
          y="130"
          width="50"
          height="30"
          fill={
            selectedParts.includes(getCorrectPart("Sağ Omuz"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ Omuz"))}
          className="cursor-pointer"
        />

        {/* Üst ve Alt Bacaklar */}
        <rect
          x="140"
          y="320"
          width="50"
          height="80"
          fill={
            selectedParts.includes(getCorrectPart("Sol Üst Bacak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol Üst Bacak"))}
          className="cursor-pointer"
        />
        <rect
          x="210"
          y="320"
          width="50"
          height="80"
          fill={
            selectedParts.includes(getCorrectPart("Sağ Üst Bacak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ Üst Bacak"))}
          className="cursor-pointer"
        />

        <rect
          x="140"
          y="400"
          width="50"
          height="80"
          fill={
            selectedParts.includes(getCorrectPart("Sol Alt Bacak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol Alt Bacak"))}
          className="cursor-pointer"
        />
        <rect
          x="210"
          y="400"
          width="50"
          height="80"
          fill={
            selectedParts.includes(getCorrectPart("Sağ Alt Bacak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ Alt Bacak"))}
          className="cursor-pointer"
        />

        {/* Ayaklar */}
        <ellipse
          cx="165"
          cy="500"
          rx="25"
          ry="15"
          fill={
            selectedParts.includes(getCorrectPart("Sol Ayak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sol Ayak"))}
          className="cursor-pointer"
        />
        <ellipse
          cx="235"
          cy="500"
          rx="25"
          ry="15"
          fill={
            selectedParts.includes(getCorrectPart("Sağ Ayak"))
              ? selectedColor
              : defaultColor
          }
          onClick={() => toggleSelection(getCorrectPart("Sağ Ayak"))}
          className="cursor-pointer"
        />
      </svg>
    </div>
  );
};

export default BodySvg;
