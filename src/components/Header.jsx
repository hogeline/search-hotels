import React from "react";

const Head = () => (
  <header>
    <div className="head-logo">
      <a href="/search-hotels">学会周辺ホテル調べ</a>
    </div>
    <div className="head-menu">
      <ul className="head-menu-navi">
        <li>
          <a href="/search-hotels">ホテル検索</a>
        </li>
        <li>
          <a href="/search-hotels/about">About</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Head;