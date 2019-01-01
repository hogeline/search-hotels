import React from "react";

const Head = () => (
  <header>
    <div className="header-logo">
      <a href="/search-hotels">学会周辺ホテル調べ</a>
    </div>
    <div className="header-menu">
      <nav className="header-menu-navi">
        <a href="/search-hotels">ホテル検索</a>
        <a href="/search-hotels/about">About</a>
      </nav>
    </div>
  </header>
);

export default Head;