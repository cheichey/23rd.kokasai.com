import React, { FC } from "react";
import { Link } from "react-router-dom";


const Header: FC = (): JSX.Element => {
  return (
    <header>
        <div>工華祭</div>
        <Link to="/">トップ</Link>
        <br/>
        <Link to="/project">企画</Link>
        <br/>
        <Link to="/access">アクセス</Link>
        <br/>
        <Link to="/bus">バス情報</Link>
        <br/>
        <Link to="/login">学内向け</Link>
    </header>
  );
};

export default Header;
