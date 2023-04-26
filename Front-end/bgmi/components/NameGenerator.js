import React, { useState, useRef } from "react";
import { Suspense } from "react";

function NameGenerator() {
  const [name, setName] = useState("");
  const [generatedName, setGeneratedName] = useState("");
  const generatedNameRef = useRef(null);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const generateName = (event) => {
    event.preventDefault();
    const options = [
      "Viper",
      "Creed",
      "Ninja",
      "Verse",
      "Shams",
      "Baaz",
      "Hurricane",
      "Apha",
      "Omega",
      "Fury",
      "Wrath",
      "Madness",
      "Siege",
      "Sting",
      "Shadow",
      "Xenon",
      "Nova",
      "Peril",
      "Viper King",
      "King Mamba",
      "T Strike",
      "Rattle Gunn",
      "Lynch Maes",
      "Sniper Mox",
      "Brawl King",
      `Riddle`,
      `Mox`,
      `Lyncher`,
      `Brawler`,
      `Strapper`,
      "Lobby Cleaner",
      "Noob Smasher",
      `Daemon`,
      "Noob Kira",
      `Bruiser`,
      `Samson`,
      "Kira Slayer",
      `Rex`,
      "Devil’s Menace",
      `IronClad`,
    ];
    const generatedName = `${name} ${options[Math.floor(Math.random() * options.length)]}`;
    setGeneratedName(generatedName);
  };

  const copyGeneratedName = () => {
    if (generatedNameRef.current) {
      generatedNameRef.current.select();
      document.execCommand('copy');
    }
  }

  return (
    <div className="name_generator">
      <h1 className="latest_blog_heading">Name Generator</h1>
      <form className="name_generator_form" onSubmit={generateName}>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="my-label">Enter Your Name</label>
          <input
            type="text"
            className="my-input"
            id="exampleInputPassword1"
            placeholder="Name"
            style={{ fontSize: "28px" }}
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Generate Name
        </button>

        { (
          <div>
            <label htmlFor="generatedName" className="my-label">Generated Name:</label>
              <input
                type="text"
                className="my-input"
                id="generatedName"
                style={{ fontSize: "28px", color: "black" }}

                value={generatedName}
                ref={generatedNameRef}
                readOnly
              />
              <button type="button" className="btn btn-outline-secondary" onClick={copyGeneratedName}>
                Copy
              </button>
          </div>
        )}
      </form>
    </div>
  );
}

function SuspenseNameGenerator() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NameGenerator />
    </Suspense>
  );
}

export { NameGenerator}
