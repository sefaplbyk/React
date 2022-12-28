import React from "react";
import { useDispatch } from "react-redux";
import { Link, } from "react-router-dom";
import logo from "./img/logo.png";
import "./style.css";
import { getUrl,pokeData } from "../store/pokeSlice";
export default function Header() {
  const dispatch = useDispatch()

  const reset = () => {
    dispatch(pokeData(""))
    dispatch(getUrl('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24'))
  }
  return (
    <>
      <div className="header flex justify-center">
          <Link className="logo w-auto  " to="/" onClick={reset}>
            <img src={logo} className="md:w-80 w-32"  alt="Logo" />
          </Link>
      </div>
    </>
  );
}
