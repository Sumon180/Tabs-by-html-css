import { useState, ChangeEvent } from "react";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState<string>("one");

  const handleTabChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedTab(event.target.id);
  };
  return (
    <>
      <div className="warpper">
        <input
          className="radio"
          id="one"
          name="group"
          type="radio"
          checked={selectedTab === "one"}
          onChange={handleTabChange}
        />
        <input
          className="radio"
          id="two"
          name="group"
          type="radio"
          checked={selectedTab === "two"}
          onChange={handleTabChange}
        />
        <input
          className="radio"
          id="three"
          name="group"
          type="radio"
          checked={selectedTab === "three"}
          onChange={handleTabChange}
        />

        <div className="tabs">
          <label className="tab" id="one-tab" htmlFor="one">
            Tab1
          </label>
          <label className="tab" id="two-tab" htmlFor="two">
            Tab2
          </label>
          <label className="tab" id="three-tab" htmlFor="three">
            Tab3
          </label>
        </div>

        <div className="panels">
          {selectedTab === "one" && (
            <div className="panel" id="one-panel">
              <div className="panel-title">Title1</div>
              <p>Content1</p>
            </div>
          )}
          {selectedTab === "two" && (
            <div className="panel" id="two-panel">
              <div className="panel-title">Title2</div>
              <p>Content2</p>
            </div>
          )}
          {selectedTab === "three" && (
            <div className="panel" id="three-panel">
              <div className="panel-title">Title3</div>
              <p>Content3</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
