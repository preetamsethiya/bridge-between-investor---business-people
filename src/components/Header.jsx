import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="headerLinkListWrapper">
          <div className="logoContainer">
            <div className="logoOuterWrapper">
              <a href="#">
                <div className="logoInnerWrapper">
                  <span>instagram</span>
                </div>
              </a>
            </div>
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <div className="linkOuterWrapper">
                {" "}
                <a href="#">
                  <div className="linkInnerWrapper">
                    <div className="linkIcon">🏠</div>{" "}
                    <div className="linkText">Home</div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="linkOuterWrapper">
                <a href="#">
                  {" "}
                  <div className="linkInnerWrapper">
                    {" "}
                    <div className="linkIcon">🔍</div>{" "}
                    <div className="linkText">Search</div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="linkOuterWrapper">
                {" "}
                <a href="#">
                  {" "}
                  <div className="linkInnerWrapper">
                    {" "}
                    <div className="linkIcon">🧭</div>{" "}
                    <div className="linkText">Explore</div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="linkOuterWrapper">
                {" "}
                <a href="#">
                  {" "}
                  <div className="linkInnerWrapper">
                    {" "}
                    <div className="linkIcon">➕</div>
                    <div className="linkText">Create</div>
                  </div>{" "}
                </a>
              </div>
            </div>
            <div>
              <div className="linkOuterWrapper">
                <a href="#">
                  {" "}
                  <div className="linkInnerWrapper">
                    <div className="linkIcon">👩‍👦</div>{" "}
                    <div className="linkText">Profile</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
